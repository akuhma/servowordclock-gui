import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Display: FunctionalComponent = () => {
    return (
        <div class={style.display}>
            <h1>Display</h1>
            <p>This is the Display component.</p>
        </div>
    );
};

export default Display;
