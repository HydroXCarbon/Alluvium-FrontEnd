import React from "react";

import Ham from "../../../assets/images/Ham.jpg";
import Auu from "../../../assets/images/Auu.png";
import View from "../../../assets/images/View.jpg";
import Nut from "../../../assets/images/Nut.png";

import { Avatar } from "antd";

function AppAbout() {
    const AvatarSize = {
        xs: 80,
        sm: 100,
        md: 120,
        lg: 150,
        xl: 190,
        xxl: 225,
    };

    const developers = [
        { name: "Ham",displayname: "Jiruschai Anuntabudit" , role1:"Team lead",role2: "Full Stack Developer",role3: "Data science" },
        { name: "Auu",displayname: "Pisit Saejia" , role1: "Full Stack Developer" },
        { name: "View",displayname: "Purin pongpanich" , role1: "Frontend Developer" },
        { name: "Nut",displayname: "Kreakpol kobsiripat" , role1: "Data science", role2:"Data analyst" },
    ];

    const developerImages = {
        Ham,
        Auu,
        View,
        Nut,
    };
return(
    <div id="about" className="block aboutBlock bgGray">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>About Us</h2>
            </div>
            <div className="content responsive-text">
                {developers.map((developer, index) => (
                            <div key={index} className="avatarWithRole">
                                <Avatar src={developerImages[developer.name]} size={AvatarSize} />
                                <h1>{developer.displayname}</h1>
                                <p>{developer.role1}</p>
                                <p>{developer.role2}</p>
                                <p>{developer.role3}</p>
                            </div>
                        ))}
            </div>
        </div>
    </div>
    );
}

export default AppAbout;