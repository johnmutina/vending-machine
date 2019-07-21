import React from "react";
import VendingMachine from "./VendingMachine";
import { Route, NavLink, Switch } from "react-router-dom";
import Sound from "react-sound";
import soundfile from "./assets/background_music.mp3";
import Soda from "./Soda";
import Chips from "./Chips";
import Cats from "./Cats";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                volume={10}
            />
            <div className="App-navbar">
                <NavLink
                    exact
                    to="/vending-machine"
                    activeClassName="App-active"
                >
                    Vending Machine
                </NavLink>
                <NavLink
                    exact
                    to="/vending-machine/soda"
                    activeClassName="App-active"
                >
                    Soda
                </NavLink>
                <NavLink
                    exact
                    to="/vending-machine/chips"
                    activeClassName="App-active"
                >
                    Chips
                </NavLink>
                <NavLink
                    exact
                    to="/vending-machine/cats"
                    activeClassName="App-active"
                >
                    Cats
                </NavLink>
            </div>

            {/* ROUTES FOR CLIENT-SIDE ROUTING */}
            <Switch>
                <Route
                    exact
                    path="/vending-machine"
                    component={VendingMachine}
                />
                <Route exact path="/vending-machine/soda" component={Soda} />
                <Route exact path="/vending-machine/chips" component={Chips} />
                <Route exact path="/vending-machine/cats" component={Cats} />
            </Switch>
        </div>
    );
}

export default App;
