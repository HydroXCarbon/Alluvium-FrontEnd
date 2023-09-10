import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Style from '../../Pages/Map/Maps.module.css';

const handleLogout = () => {
    console.log('Logout clicked');
};

function AppHeader() {
    return (
        <div className={Style.containerFluidHeader}>
            <div className={Style.header}>
                <h1 className={Style.logo}>
                    <Button type="text" className={Style.logo}>
                        <Link to="/" target="_top">Alluvium</Link>
                    </Button>
                </h1>
                <div className={Style.buttons}>
                    <Button type="text" className={Style.textButton}>
                        Profile
                    </Button>
                    <Button type="text" className={Style.textButton}>
                        <Link to="/" onClick={handleLogout} target="_top">Logout</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
