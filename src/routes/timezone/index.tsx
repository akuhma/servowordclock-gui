import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const TimeZone: FunctionalComponent = () => {
    return (
        <div class={style.timezone}>
            <h1>TimeZone</h1>
            <p>This is the TimeZone component.</p>
        </div>
    );
};

export default TimeZone;
