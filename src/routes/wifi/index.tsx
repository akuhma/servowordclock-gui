import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/ts/Button";
import TextField from "preact-material-components/ts/TextField";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import { route } from "preact-router";
import Constants from "../../Constants";

const Wifi: FunctionalComponent = () => {
    const onClickSave = () => {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    };

    return (
        <div class={style.wifi}>
            <h1>Wifi</h1>
            <div>
                <label htmlFor="ssid">SSID</label>
                <TextField
                    id="ssid"
                    label="SSID"
                    helperText="Your network name"
                    class={style.full}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <TextField
                    id="password"
                    label="Password"
                    helperText="Your network password"
                    class={style.full}
                />
            </div>
            <div class={style.textRight}>
                <Button onClick={() => onClickSave()}>
                    Save &amp; Restart
                </Button>
            </div>
        </div>
    );
};

export default Wifi;
