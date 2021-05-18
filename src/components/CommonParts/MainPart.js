import React from 'react';
import {useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";

import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";

const MainPart = () => {

    const dispatch = useDispatch()
    (
        <main>
            <Switch>
                <Route path='/AboutUs' component={AboutUs}/>
                <Route path='/FAQ' component={FAQ}/>
            </Switch>
        </main>
    );
};

export default MainPart;