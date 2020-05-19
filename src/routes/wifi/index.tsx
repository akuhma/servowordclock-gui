import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Wifi: FunctionalComponent = () => {
    return (
        <div class={style.wifi}>
            <h1>Wifi</h1>
            <p>This is the Wifi component.</p>
        </div>
    );
};

export default Wifi;
