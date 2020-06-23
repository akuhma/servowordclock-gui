import { h, Component } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";
import { SWCClient } from "../../domain/SWCClient";
import Checkbox from "preact-material-components/Checkbox";
import Radio from "preact-material-components/Radio";
import FormField from "preact-material-components/FormField";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/Button/style.css";
import "preact-material-components/Checkbox/style.css";
import "preact-material-components/Radio/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/LayoutGrid/style.css";
import "mdn-polyfills/String.prototype.padStart";

class TimeSettings extends Component<Props, State> {
    constructor(props?: Props, context?: any) {
        super(props, context);
        this.state = {
            isLoading: false,
            timesettings: "timezone"
        };
    }

    onClickSave(): void {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    }
    render() {
        const content =
            this.state.timesettings == "timezone"
                ? this.renderTimeZoneSettings()
                : this.renderManualTime();

        return (
            <div class={style.timeSettings}>
                <h1>Time Settings</h1>
                <div>
                    <FormField>
                        <Radio
                            id={`timesettings-timezone`}
                            name="timesettings"
                            checked={this.state.timesettings == "timezone"}
                            onChange={e =>
                                this.setState({ timesettings: "timezone" })
                            }
                        />
                        <h4>
                            <label htmlFor={`timesettings-timezone`}>
                                Use time zone
                            </label>
                        </h4>
                    </FormField>
                </div>
                <div>
                    <FormField>
                        <Radio
                            id={`timesettings-manual`}
                            name="timesettings"
                            checked={this.state.timesettings == "manual"}
                            onChange={e =>
                                this.setState({ timesettings: "manual" })
                            }
                        />
                        <h4>
                            <label htmlFor={`timesettings-manual`}>
                                Use manual time
                            </label>
                        </h4>
                    </FormField>
                </div>
                {content}
                <div class={style.textRight}>
                    <Button onClick={() => this.onClickSave()}>Save</Button>
                </div>
            </div>
        );
    }

    renderTimeZoneSettings() {
        return (
            <div>
                <LayoutGrid>
                    <LayoutGrid.Inner>
                        <LayoutGrid.Cell phoneCols={2}>
                            {this.renderTimeZones(0)}
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell phoneCols={2}>
                            {this.renderTimeZones(1)}
                        </LayoutGrid.Cell>
                    </LayoutGrid.Inner>
                </LayoutGrid>
                <div>
                    <FormField>
                        <Checkbox id="daylight-saving" checked={true} />
                        <label htmlFor="daylight-saving">
                            enable Daylight saving
                        </label>
                    </FormField>
                </div>
            </div>
        );
    }

    renderTimeZones(offset: number) {
        const result = [];
        for (let i = 0; i < 12; i++) {
            const num = i * 2 + offset;
            result.push(
                <FormField>
                    <Radio
                        id={`timezone-${num}`}
                        name="timezone"
                        checked={num == 1}
                    />
                    <label htmlFor={`timezone-${num}`}>
                        GTM +{num.toString().padStart(2, "0")}
                    </label>
                </FormField>
            );
            result.push(<br />);
        }
        return result;
    }

    renderManualTime() {
        return (
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
        );
    }
}

interface State {
    isLoading: boolean;
    timesettings: "timezone" | "manual";
}
interface Props {
    client: SWCClient;
}

export default TimeSettings;
