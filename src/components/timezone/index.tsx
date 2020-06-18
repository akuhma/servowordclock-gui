import { FunctionalComponent, h, Component } from "preact";
import * as style from "./style.css";
import Checkbox from "preact-material-components/Checkbox";
import Radio from "preact-material-components/Radio";
import FormField from "preact-material-components/FormField";
import Button from "preact-material-components/Button";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/Button/style.css";
import "preact-material-components/Checkbox/style.css";
import "preact-material-components/Radio/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/LayoutGrid/style.css";
import "mdn-polyfills/String.prototype.padStart";
import { route } from "preact-router";
import Constants from "../../Constants";
import { SWCClient } from "../../domain/SWCClient";

class TimeZone extends Component<Props, State> {
    onClickSave() {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
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

    render() {
        return (
            <div class={style.timezone}>
                <h1>Timezone</h1>
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
                        <label htmlFor="daylight-saving">Daylight saving</label>
                    </FormField>
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

export default TimeZone;
