import React from 'react';
import { Layout } from 'antd';
import LoginForm from '../../components/Login/LoginForm';
import AppHeader from '../../components/Login/header';
import AppFooter from '../../components/Home/common/footer';

const { Header, Content, Footer } = Layout;

function Login() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <LoginForm />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
};

export default Login;