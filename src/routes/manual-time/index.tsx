import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/ts/Button";
import TextField from "preact-material-components/ts/TextField";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";

const ManualTime: FunctionalComponent = () => {
    const onClickSave = () => {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    };
    return (
        <div class={style.manualTime}>
            <h1>Manual time</h1>
            <div>
                <label htmlFor="ssid">Time</label>
                <TextField
                    id="time"
                    label="Time"
                    type="time"
                    helperText="hh:mm:ss"
                    step="1"
                    value={new Date().toTimeString().split(" ")[0]}
                />
            </div>
            <Button onClick={() => onClickSave()}>Save</Button>
        </div>
    );
};

export default ManualTime;
