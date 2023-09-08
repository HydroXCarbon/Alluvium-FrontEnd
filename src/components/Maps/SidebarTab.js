import React, { useState } from 'react';
import { Tabs } from 'antd';
import BingMap from './Api';
import { Link } from 'react-router-dom';
import Style from '../../Pages/Map/Maps.module.css';

function Sidebar() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <div className={Style.sidebarBlock}>
            <div className={`${Style.tabs} ${Style.bgLightGray}`}>
                <Tabs activeKey={activeTab} onChange={handleTabChange} tabPosition="left">
                    <Tabs.TabPane tab="Tab 1" key="tab1">
                        <BingMap />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Profile" key="tab2">
                        <p>Content for Tab 2 goes here.</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><span role="img" aria-label="Settings">⚙️</span> Settings</span>} key="tab3">
                        <Link to="/"></Link>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Sidebar;
