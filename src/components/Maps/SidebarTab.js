import React, { useState } from 'react';
import { Tabs } from 'antd';
import { GoogleMapApp } from './components/Api';
import Result from './components/Result';
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
                    <Tabs.TabPane tab={<span style={{ fontSize: '20px' }}>Map</span>} key="tab1">
                        <GoogleMapApp />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span style={{ fontSize: '20px' }}>Result</span>} key="tab2">
                        <div style={{ minHeight: '85vh' }}>
                            <Result />
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Sidebar;
