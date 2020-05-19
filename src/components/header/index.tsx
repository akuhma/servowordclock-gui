import { h, Component } from "preact";
import * as style from "./style.css";
import Constants from "../../constants";
import TopAppBar from "preact-material-components/ts/TopAppBar";
import Drawer from "preact-material-components/ts/Drawer";
import List from "preact-material-components/ts/List";
import "preact-material-components/Drawer/style.css";
import "preact-material-components/List/style.css";
import "preact-material-components/TopAppBar/style.css";
import { route } from "preact-router";

interface State {
    isDrawerOpen: boolean;
}

interface Props {
    currentRoute: string;
}

class Header extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isDrawerOpen: false
        };
    }
    route(url: string) {
        route(url);
        this.setState({ isDrawerOpen: false });
    }

    render() {
        console.log("this.props.currentRoute", this.props.currentRoute);

        return (
            <div>
                <TopAppBar className="topappbar" onNav>
                    <TopAppBar.Row>
                        <TopAppBar.Section align-start>
                            <TopAppBar.Icon
                                onClick={() => {
                                    this.setState({
                                        isDrawerOpen: !this.state.isDrawerOpen
                                    });
                                }}
                            >
                                menu
                            </TopAppBar.Icon>
                            <TopAppBar.Title>Servo Word Clock</TopAppBar.Title>
                        </TopAppBar.Section>
                    </TopAppBar.Row>
                </TopAppBar>
                <Drawer
                    modal
                    open={this.state.isDrawerOpen}
                    onClose={() => {
                        this.setState({ isDrawerOpen: false });
                    }}
                >
                    <Drawer.DrawerContent>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.Home
                            }
                            onClick={() => {
                                this.route(Constants.routes.Home);
                            }}
                        >
                            <List.ItemGraphic>home</List.ItemGraphic>
                            Home
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.Wifi
                            }
                            onClick={() => {
                                this.route(Constants.routes.Wifi);
                            }}
                        >
                            <List.ItemGraphic>wifi</List.ItemGraphic>
                            Wifi
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.Timezone
                            }
                            onClick={() => {
                                this.route(Constants.routes.Timezone);
                            }}
                        >
                            <List.ItemGraphic>timelapse</List.ItemGraphic>
                            Timezone
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.ManualTime
                            }
                            onClick={() => {
                                this.route(Constants.routes.ManualTime);
                            }}
                        >
                            <List.ItemGraphic>access_time</List.ItemGraphic>
                            Manual time
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.Display
                            }
                            onClick={() => {
                                this.route(Constants.routes.Display);
                            }}
                        >
                            <List.ItemGraphic>grid_on</List.ItemGraphic>
                            Display
                        </Drawer.DrawerItem>
                        <Drawer.DrawerItem
                            selected={
                                this.props.currentRoute ===
                                Constants.routes.NightMode
                            }
                            onClick={() => {
                                this.route(Constants.routes.NightMode);
                            }}
                        >
                            <List.ItemGraphic>
                                notifications_paused
                            </List.ItemGraphic>
                            Night mode
                        </Drawer.DrawerItem>
                    </Drawer.DrawerContent>
                </Drawer>
            </div>
        );
    }

    // render(){
    //     return (
    //         <header class={style.header}>
    //             <h1>Servo Word Clock</h1>
    //             <nav>
    //                 <Link activeClassName={style.active} href={Constants.routes.Home}>
    //                     Start
    //                 </Link>
    //                 <Link activeClassName={style.active} href={Constants.routes.Wifi}>
    //                     Wifi
    //                 </Link>
    //                 <Link activeClassName={style.active} href={Constants.routes.Timezone}>
    //                     Timezone
    //                 </Link>
    //                 <Link activeClassName={style.active} href={Constants.routes.ManualTime}>
    //                     Manual Time
    //                 </Link>
    //                 <Link activeClassName={style.active} href={Constants.routes.Display}>
    //                     Display
    //                 </Link>
    //                 <Link activeClassName={style.active} href={Constants.routes.NightMode}>
    //                     Night Mode
    //                 </Link>
    //             </nav>
    //         </header>
    //     );
    // }
}

export default Header;
