import React from "react";
import Description from "./Description.js";
import Contacts from "./Contacts.js";
import Team from "./Team.js";

function AboutUs(){

    return(
        <>
            <main>
                <Description />
                <Contacts />
                <Team />
            </main>
        </>
    );
}

export default AboutUs;