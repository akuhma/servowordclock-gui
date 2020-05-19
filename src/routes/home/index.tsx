import { FunctionalComponent, h } from "preact";
import Card from "preact-material-components/ts/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import * as style from "./style.css";
import { route } from "preact-router";
import Constants from "../../constants";

const renderCard = (title: string, description: string, routePath: string) => (
    <Card class={style.card}>
        <div class={style.cardHeader}>
            <h2 class=" mdc-typography--title">{title}</h2>
        </div>
        <div class={style.cardBody}>{description}</div>
        <Card.Actions>
            <Card.ActionButtons>
                <Card.ActionButton
                    onClick={() => {
                        route(routePath);
                    }}
                >
                    OK
                </Card.ActionButton>
            </Card.ActionButtons>
        </Card.Actions>
    </Card>
);

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            {renderCard(
                `Wifi`,
                `Select your local WiFi network`,
                Constants.routes.Wifi
            )}
            {renderCard(
                `Timezone`,
                `Enter your local timezone`,
                Constants.routes.Timezone
            )}
            {renderCard(
                `Manual time`,
                `Set the time manually, if your clock is not connected to the internet or cannot synchronize`,
                Constants.routes.ManualTime
            )}
            {renderCard(
                `Display`,
                `Change several options on how the clock displays time`,
                Constants.routes.Display
            )}
            {renderCard(
                `Night mode`,
                `Either switch of the servos or the entire clock for certain periods`,
                Constants.routes.NightMode
            )}
        </div>
    );
};

export default Home;
