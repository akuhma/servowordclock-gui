import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import FormField from "preact-material-components/ts/FormField";
import "preact-material-components/FormField/style.css";
import TextField from "preact-material-components/ts/TextField";
import "preact-material-components/TextField/style.css";

const Wifi: FunctionalComponent = () => {
    return (
        <div class={style.wifi}>
            <h1>Wifi</h1>
            <FormField>
                <label htmlFor="ssid">SSID</label>
                <TextField
                    id="ssid"
                    label="SSID"
                    helperText="Your network name"
                />
            </FormField>
            <FormField>
                <label htmlFor="password">Password</label>
                <TextField
                    id="password"
                    label="Password"
                    helperText="Your network password"
                />
            </FormField>
        </div>
    );
};

export default Wifi;
