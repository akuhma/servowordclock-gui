import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import Button from "preact-material-components/ts/Button";
import Slider from "preact-material-components/ts/Slider";
import Select from "preact-material-components/Select";
import "preact-material-components/List/style.css";
import "preact-material-components/Menu/style.css";
import "preact-material-components/Select/style.css";
import "preact-material-components/Slider/style.css";
import "preact-material-components/Button/style.css";
import Constants from "../../Constants";
import { route } from "preact-router";

const Display: FunctionalComponent = () => {
    const onClickSave = () => {
        console.log("save"); //TODO: Save => https://material.preactjs.com/component/linear-progress/
        route(Constants.routes.Home);
    };

    return (
        <div class={style.display}>
            <h1>Display</h1>
            <div>
                <Slider id="brigtness" step={1} value={10} max={100} />
                <label htmlFor="brigtness">Brightness</label>
            </div>
            <div>
                <label htmlFor="hour-effect">Hour effect</label>
                <Select id="hour-effect" hintText="Hour effect">
                    <Select.Item>opt1</Select.Item>
                    <Select.Item>opt2</Select.Item>
                    <Select.Item>opt3</Select.Item>
                </Select>
            </div>
            <div>
                <label htmlFor="5-minute-effect">5 minute effect</label>
                <Select id="5-minute-effect" hintText="5 minute effect">
                    <Select.Item>opt1</Select.Item>
                    <Select.Item>opt2</Select.Item>
                    <Select.Item>opt3</Select.Item>
                </Select>
            </div>
            <div>
                <label htmlFor="dot-color-mode">Dot color mode</label>
                <Select id="dot-color-mode" hintText="Dot color mode">
                    <Select.Item>opt1</Select.Item>
                    <Select.Item>opt2</Select.Item>
                    <Select.Item>opt3</Select.Item>
                </Select>
            </div>
            <div>
                <label htmlFor="dot-color">Dot color</label>
                <input id="dot-color" type="color" />
            </div>
            <div>
                <label htmlFor="word-color-mode">Word color mode</label>
                <Select id="word-color-mode" hintText="Word color mode">
                    <Select.Item>opt1</Select.Item>
                    <Select.Item>opt2</Select.Item>
                    <Select.Item>opt3</Select.Item>
                </Select>
            </div>
            <div>
                <label htmlFor="word-color">Word color</label>
                <input id="word-color" type="color" />
            </div>
            <div>
                <label htmlFor="background-color-mode">
                    Background color mode
                </label>
                <Select
                    id="background-color-mode"
                    hintText="Background color mode"
                >
                    <Select.Item>opt1</Select.Item>
                    <Select.Item>opt2</Select.Item>
                    <Select.Item>opt3</Select.Item>
                </Select>
            </div>
            <div>
                <label htmlFor="background-color">Background color</label>
                <input id="background-color" type="color" />
            </div>
            <Button onClick={() => onClickSave()}>Save</Button>
        </div>
    );
};

export default Display;
