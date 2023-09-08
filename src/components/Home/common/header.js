import React from "react";
import { Button, Anchor } from 'antd';
import { Link } from 'react-router-dom';

const { Link: AntdLink } = Anchor; 

function AppHeader() {
    return (
        <div className="container-fluid-header">
            <div className="header">
                <div className="anchor">
                    <Anchor targetOffset={60}>
                        <AntdLink href="#hero" title="Home" /> 
                        <AntdLink href="#project" title="Project" />
                        <AntdLink href="#price" title="Pricing" />
                        <AntdLink href="#about" title="About Us" />
                    </Anchor>
                </div>
                <div className="buttons">
                    <Button type="text" className="text-button text-button1">
                        Register
                    </Button>
                    <Button type="primary" className="text-button">
                        <Link to="/maps">Login</Link> 
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
