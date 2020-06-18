import { FunctionalComponent, h, Component } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";
import { SWCClient } from "../../domain/SWCClient";

class ManualTime extends Component<Props, State> {
    onClickSave(): void {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    }
    render() {
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
                        class={style.full}
                    />
                </div>
                <div class={style.textRight}>
                    <Button onClick={() => this.onClickSave()}>Save</Button>
                </div>
            </div>
        );
    }
}

interface State {
    isLoading: boolean;
}
interface Props {
    client: SWCClient;
}

export default ManualTime;
