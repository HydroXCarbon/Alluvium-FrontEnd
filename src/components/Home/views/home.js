import React from "react";
import AppHero from "../home/hero";
import AppProject from "../home/project";
import AppPricing from "../home/pricing";
import AppAbout from "../home/about";

function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppProject/>
            <AppPricing/>
            <AppAbout/>
        </div>
    );
}

export default AppHome;