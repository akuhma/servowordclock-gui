import { baseApiUrl } from "../Constants";

export function apiPostFormData<TResult>(
    route: string,
    input: object
): Promise<{}> {
    const body = new FormData();
    for (const key in input) {
        body.append(key, input[key]?.toString() ?? null);
    }
    return fetch(`${baseApiUrl}${route}`, {
        method: "post",
        body,
        credentials: "include"
    });
}

export function apiGetParsed<TResult>(route: string): Promise<TResult> {
    return new Promise((resolve, reject) => {
        fetch(`${baseApiUrl}${route}`, {
            headers: { "Content-Type": "text/plain" },
            method: "get",
            credentials: "include"
        })
            .then(response => {
                if (response.ok) {
                    response
                        .text()
                        .then(text => {
                            const result = text
                                .split("\n\n")
                                .map(p => p.split("\n"))
                                .reduce((obj, kv) => {
                                    obj[kv[0]] =
                                        kv.length === 2 ? kv[1] : kv.slice(1);
                                    return obj;
                                }, {} as TResult);
                            resolve(result);
                        })
                        .catch(reject);
                } else {
                    reject(response);
                }
            })
            .catch(reject);
    });
}
