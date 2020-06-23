import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Constants from "../Constants";
import Home from "./home";
import Wifi from "./wifi";
import TimeSettings from "./time-settings";
import Display from "./display";
import NightMode from "./night-mode";
import NotFoundPage from "./notfound";
import Header from "./header";
import { createHashHistory } from "history";
import { SWCClient } from "../domain/SWCClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const client = new SWCClient();

const App: FunctionalComponent = () => {
    let currentRoute: string = Constants.routes.Home;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentRoute = e.url;
    };

    return (
        <div id="app">
            <Header currentRoute={currentRoute} />
            <Router onChange={handleRoute} history={createHashHistory()}>
                <Home path={Constants.routes.Home} />
                <Wifi path={Constants.routes.Wifi} client={client} />
                <TimeSettings
                    path={Constants.routes.TimeSettings}
                    client={client}
                />
                <Display path={Constants.routes.Display} client={client} />
                <NightMode path={Constants.routes.NightMode} client={client} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
