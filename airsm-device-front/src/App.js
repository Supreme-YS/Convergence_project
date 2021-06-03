import React, {useState} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Campaign from './Campaign';
import Home from './Home';
import Guide from './Guide';
// import CupCheck from './CupCheck';
import OpenHole from './OpenHole';
import SavePoint from './SavePoint';




function App(props) {
    const [phone, setPhone] = useState("");
    const [points, setPoints] = useState("");

    return (
        <BrowserRouter>
            <Route path="/" exact
                render={routeProps=>
                <Campaign
                    {...routeProps}
                />}/>
            <Route path="/home"
                render={routeProps=>
                <Home
                    phone={phone}
                    setPhone={setPhone}
                    {...routeProps}
                />}/>
            <Route path="/guide"
                render={routeProps=>
                <Guide
                    {...routeProps}
                />}/>
            <Route path="/outlet" 
                render={routeProps=>
                <OpenHole
                    phone={phone}
                    setPoints={setPoints}
                    {...routeProps}
                />}/>
            <Route path="/point"
                render={routeProps=>
                <SavePoint
                    points={points}
                    phone={phone}
                    {...routeProps}
                />}/>
        </BrowserRouter>
    );
}

export default App;

