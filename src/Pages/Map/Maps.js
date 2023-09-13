import React from 'react';
import { Layout } from 'antd';
import AppFooter from '../../components/Home/common/footer';
import AppHeader from '../../components/Maps/header';
import Sidebar from '../../components/Maps/SidebarTab';

const { Header, Content, Footer } = Layout;

function Maps() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Sidebar />
            </Content>
            <Footer style={{ position: 'relative' }}>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default Maps;