import React from "react";
import { Button, Anchor } from 'antd';
import { Link } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const { Link: AntdLink } = Anchor;

function AppHeader() {
    const { token } = useToken();

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
                        {token ? (
                            <Link to="/maps" target="_top">Register</Link>
                        ) : (
                            <Link to="/register" target="_top">Register</Link>
                        )}
                    </Button>
                    <Button type="primary" className="text-button">
                        {token ? (
                            <Link to="/maps" target="_top">Login</Link>
                        ) : (
                            <Link to="/login" target="_top">Login</Link>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
