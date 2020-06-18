import { FunctionalComponent, h, Component } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/Button";
import Slider from "preact-material-components/Slider";
import Select from "preact-material-components/Select";
import "preact-material-components/List/style.css";
import "preact-material-components/Menu/style.css";
import "preact-material-components/Select/style.css";
import "preact-material-components/Slider/style.css";
import "preact-material-components/Button/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";
import { SWCClient } from "../../domain/SWCClient";

class Display extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    onClickSave(): void {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    }

    render() {
        return (
            <div class={style.display}>
                <h1>Display effects</h1>
                <div>
                    <label htmlFor="brigtness">Brightness</label>
                    <Slider id="brigtness" step={1} value={10} max={100} />
                </div>
                <div>
                    <label htmlFor="hour-effect">Hour effect</label>
                    <div>
                        <Select
                            id="hour-effect"
                            hintText="Hour effect"
                            class={style.control}
                        >
                            <Select.Item value="effect1">typing</Select.Item>
                            <Select.Item value="effect2">fade in</Select.Item>
                            <Select.Item value="effect3">fade out</Select.Item>
                            <Select.Item value="effect4">color mix</Select.Item>
                            <Select.Item value="random">
                                random effect
                            </Select.Item>
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="5-minute-effect">5 minute effect</label>
                    <div>
                        <Select
                            id="5-minute-effect"
                            hintText="5 minute effect"
                            class={style.control}
                        >
                            <Select.Item value="effect1">typing</Select.Item>
                            <Select.Item value="effect2">fade in</Select.Item>
                            <Select.Item value="effect3">fade out</Select.Item>
                            <Select.Item value="effect4">color mix</Select.Item>
                            <Select.Item value="random">
                                random effect
                            </Select.Item>
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="dot-color-mode">Dot color mode</label>
                    <div>
                        <Select id="dot-color-mode" class={style.control}>
                            <Select.Item value="random">random</Select.Item>
                            <Select.Item value="fixed">fixed</Select.Item>
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="dot-color">Dot color</label>
                    <div class={style.control}>
                        <input id="dot-color" type="color" />
                    </div>
                </div>
                <div>
                    <label htmlFor="word-color-mode">Word color mode</label>
                    <div>
                        <Select id="word-color-mode" class={style.control}>
                            <Select.Item value="random">random</Select.Item>
                            <Select.Item value="fixed">fixed</Select.Item>
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="word-color">Word color</label>
                    <div class={style.control}>
                        <input id="word-color" type="color" />
                    </div>
                </div>
                <div>
                    <label htmlFor="background-color-mode">
                        Background color mode
                    </label>
                    <div>
                        <Select
                            id="background-color-mode"
                            class={style.control}
                        >
                            <Select.Item value="random">random</Select.Item>
                            <Select.Item value="cycle">cycle</Select.Item>
                            <Select.Item value="fixed">fixed</Select.Item>
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="background-color">Background color</label>
                    <div class={style.control}>
                        <input id="background-color" type="color" />
                    </div>
                </div>
                <div class={style.textRight}>
                    <Button onClick={() => this.onClickSave()}>Save</Button>
                </div>
            </div>
        );
    }
}

interface Props {
    client: SWCClient;
}
interface State {
    isLoading: boolean;
    settings?: {
        brightness: number;
        hourEffect: string;
        fiveMinEffect: string;
        dotColorMode: string;
        dotColor: string;
        wordColorMode: string;
        wordColor: string;
        backbroundColorMode: string;
        backbroundColor: string;
    };
}

export default Display;
