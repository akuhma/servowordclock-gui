import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Constants from "../Constants";
import Home from "../no_routes/home";
import Wifi from "../no_routes/wifi";
import Timezone from "../no_routes/timezone";
import ManualTime from "../no_routes/manual-time";
import Display from "../no_routes/display";
import NightMode from "../no_routes/night-mode";
import NotFoundPage from "../no_routes/notfound";
import Header from "./header";
import { createHashHistory } from "history";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentRoute: string = Constants.routes.Home;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentRoute = e.url;
    };

    return (
        <div id="app">
            <Header currentRoute={currentRoute} />
            <Router onChange={handleRoute} history={createHashHistory()}>
                <Route path={Constants.routes.Home} component={Home} />
                <Route path={Constants.routes.Wifi} component={Wifi} />
                <Route path={Constants.routes.Timezone} component={Timezone} />
                <Route
                    path={Constants.routes.ManualTime}
                    component={ManualTime}
                />
                <Route path={Constants.routes.Display} component={Display} />
                <Route
                    path={Constants.routes.NightMode}
                    component={NightMode}
                />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
