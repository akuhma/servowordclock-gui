import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const NightMode: FunctionalComponent = () => {
    return (
        <div class={style.nightMode}>
            <h1>NightMode</h1>
            <p>This is the NightMode component.</p>
        </div>
    );
};

export default NightMode;
