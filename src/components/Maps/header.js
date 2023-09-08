import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Style from '../../Pages/Map/Maps.module.css';

function AppHeader() {
    return (
        <div className={Style.containerFluidHeader}>
            <div className={Style.header}>
                <div className={Style.buttons}>
                    <Button type="text" className={Style.textButton}>
                        Profile
                    </Button>
                    <Button type="text" className={Style.textButton}>
                        <Link to="/">Logout</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
