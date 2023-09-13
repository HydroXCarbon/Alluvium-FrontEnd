import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Style from '../../Pages/Map/Maps.module.css';
import useToken from '../../hooks/useToken';

function AppHeader() {
    const navigate = useNavigate();
    const { removeToken } = useToken();

    const handleLogout = () => {
        removeToken();
        navigate('/');
        window.scrollTo(0, 0);
    };

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
                    <Button type="text" className={Style.textButton} onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
