import React from "react";
import { Button, Anchor } from 'antd';
import { useNavigate } from "react-router-dom";
import useToken from '../../../hooks/useToken';

const { Link: AntdLink } = Anchor;

function AppHeader() {
    const navigate = useNavigate();
    const { token } = useToken();

    const handleRegister = () => {
        if (!token) {
            navigate("/register");
        } else {
            navigate("/maps");
        }
    }

    const handleLogin = () => {
        if (!token) {
            navigate("/login");
        } else {
            navigate("/maps");
        }
    }


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
                    <Button type="text" className="text-button text-button1" onClick={handleRegister}>
                        Register
                    </Button>
                    <Button type="primary" className="text-button" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
