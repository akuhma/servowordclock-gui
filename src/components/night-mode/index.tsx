import { h, Component } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/Button";
import FormField from "preact-material-components/FormField";
import TextField from "preact-material-components/TextField";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/Button/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Radio/style.css";
import "preact-material-components/LayoutGrid/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";
import { SWCClient } from "../../domain/SWCClient";
import Radio from "preact-material-components/Radio";

class NightMode extends Component<Props, State> {
    onClickSave(): void {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    }
    render() {
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
                                class={style.full}
                            />
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell phoneCols={2}>
                            <label htmlFor="weekday-end">End time</label>
                            <TextField
                                id="weekday-end"
                                label="End time"
                                type="time"
                                helperText="hh:mm"
                                class={style.full}
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
                                class={style.full}
                            />
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell phoneCols={2}>
                            <label htmlFor="weekend-end">End time</label>
                            <TextField
                                id="weekend-end"
                                label="End time"
                                type="time"
                                helperText="hh:mm"
                                class={style.full}
                            />
                        </LayoutGrid.Cell>
                    </LayoutGrid.Inner>
                </LayoutGrid>
                <h4>Mode</h4>
                <FormField>
                    <Radio id={`nightmode-on`} name="timezone" checked={true} />
                    <label htmlFor={`timezone-on`}>disable night mode</label>
                </FormField>
                <FormField>
                    <Radio
                        id={`nightmode-silent`}
                        name="timezone"
                        checked={true}
                    />
                    <label htmlFor={`timezone-silent`}>servos off</label>
                </FormField>
                <FormField>
                    <Radio
                        id={`nightmode-off`}
                        name="timezone"
                        checked={true}
                    />
                    <label htmlFor={`timezone-off`}>everything off</label>
                </FormField>
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

export default NightMode;
