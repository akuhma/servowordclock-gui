const Constants = {
    routes: {
        Home: "/",
        Wifi: "/wifi/",
        TimeSettings: "/time-settings/",
        Display: "/display/",
        NightMode: "/night-mode/"
    }
};

export function sanitizeTime(input: string): string {
    return input
        .split(":")
        .map(i => i.padStart(2, "0"))
        .join(":");
}

export const baseApiUrl = "http://192.168.3.141/api/";

export default Constants;
