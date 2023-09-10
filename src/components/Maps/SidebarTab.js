import React, { useState } from 'react';
import { Tabs } from 'antd';
import BingMap from './components/Api';
import styles from '../../Pages/Map/Maps.module.css';

function Sidebar() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <div className={styles.sidebarBlock}>
            <div className={`${styles.tabs} ${styles.bgLightGray}`}>
                <Tabs activeKey={activeTab} onChange={handleTabChange} tabPosition="left">
                    <Tabs.TabPane tab="Map" key="tab1">
                        <BingMap />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Result" key="tab2">
                        <p>Content for Tab 2 goes here.</p>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Sidebar;
