import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";

const App = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Switch>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route path="/FAQ" component={FAQ}/>
            </Switch>
        </>
    );
};

export default App;