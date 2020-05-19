import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const ManualTime: FunctionalComponent = () => {
    return (
        <div class={style.manualTime}>
            <h1>ManualTime</h1>
            <p>This is the ManualTime component.</p>
        </div>
    );
};

export default ManualTime;
