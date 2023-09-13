import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Style from '../../Pages/Login/Login.module.css';

function AppHeader() {
    return (
        <div className={Style.containerFluidHeader}>
            <div className={Style.header}>
                <h1 className={Style.logo}>
                    <Button type="text" className={Style.logo}>
                        <Link to="/" target="_top">Alluvium</Link>
                    </Button>
                </h1>
            </div>
        </div>
    );
}

export default AppHeader;
