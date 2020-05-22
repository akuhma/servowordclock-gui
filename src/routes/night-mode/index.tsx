import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/ts/Button";
import FormField from "preact-material-components/ts/FormField";
import TextField from "preact-material-components/ts/TextField";
import Checkbox from "preact-material-components/ts/Checkbox";
import LayoutGrid from "preact-material-components/ts/LayoutGrid";
import "preact-material-components/Button/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Checkbox/style.css";
import "preact-material-components/LayoutGrid/style.css";
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
            <h4>Weekdays</h4>
            <LayoutGrid>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell phoneCols={2}>
                        <label htmlFor="weekday-start">Start time</label>
                        <TextField
                            id="weekday-start"
                            label="Start time"
                            type="time"
                            helperText="hh:mm"
                            class={style.half}
                        />
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell phoneCols={2}>
                        <label htmlFor="weekday-end">End time</label>
                        <TextField
                            id="weekday-end"
                            label="End time"
                            type="time"
                            helperText="hh:mm"
                            class={style.half}
                        />
                    </LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
            <h4>Weekends</h4>
            <LayoutGrid>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell phoneCols={2}>
                        <label htmlFor="weekend-start">Start time</label>
                        <TextField
                            id="weekend-start"
                            label="Start time"
                            type="time"
                            helperText="hh:mm"
                            class={style.half}
                        />
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell phoneCols={2}>
                        <label htmlFor="weekend-end">End time</label>
                        <TextField
                            id="weekend-end"
                            label="End time"
                            type="time"
                            helperText="hh:mm"
                            class={style.half}
                        />
                    </LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
            <FormField>
                <Checkbox id="activate" checked={true} />
                <label htmlFor="activate">activate</label>
            </FormField>
            <div class={style.textRight}>
                <Button onClick={() => onClickSave()}>Save</Button>
            </div>
        </div>
    );
};

export default NightMode;
