import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/ts/Button";
import FormField from "preact-material-components/ts/FormField";
import TextField from "preact-material-components/ts/TextField";
import Checkbox from "preact-material-components/ts/Checkbox";
import "preact-material-components/Button/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Checkbox/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";

const NightMode: FunctionalComponent = () => {
    const onClickSave = () => {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    };
    return (
        <div class={style.nightMode}>
            <h1>Night mode</h1>
            <FormField>
                <Checkbox id="activate" checked={true} />
                <label htmlFor="activate">activate</label>
            </FormField>
            <h4>Weekdays</h4>
            <div>
                <label htmlFor="weekday-start">Start time</label>
                <TextField
                    id="weekday-start"
                    label="Start time"
                    type="time"
                    helperText="hh:mm"
                />
            </div>
            <div>
                <label htmlFor="weekday-end">End time</label>
                <TextField
                    id="weekday-end"
                    label="End time"
                    type="time"
                    helperText="hh:mm"
                />
            </div>
            <h4>Weekends</h4>
            <div>
                <label htmlFor="weekend-start">Start time</label>
                <TextField
                    id="weekend-start"
                    label="Start time"
                    type="time"
                    helperText="hh:mm"
                />
            </div>
            <div>
                <label htmlFor="weekend-end">End time</label>
                <TextField
                    id="weekend-end"
                    label="End time"
                    type="time"
                    helperText="hh:mm"
                />
            </div>
            <Button onClick={() => onClickSave()}>Save</Button>
        </div>
    );
};

export default NightMode;
