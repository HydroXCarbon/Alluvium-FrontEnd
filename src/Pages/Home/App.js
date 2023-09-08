import React from 'react';
import './App.css';
import { Layout } from 'antd';
import AppHeader from '../../components/Home/common/header';
import AppFooter from '../../components/Home/common/footer';
import AppHome from '../../components/Home/views/home';

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <AppHome />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
};

export default App;
