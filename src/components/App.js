import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./CommonParts/Header.js";
import Footer from "./CommonParts/Footer.js";
import AboutUs from "../components/AboutUs/AboutUs";
import FAQ from "../components/FAQ/FAQ";
import MainPage from "../components/MainPage/MainPage";

const App = () => (
    <>
        <Header />
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/FAQ' component={FAQ} />
        </Switch>
        <Footer />
    </>
)

export default App;