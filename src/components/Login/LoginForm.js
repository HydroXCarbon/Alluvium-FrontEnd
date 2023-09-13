import React from 'react';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import Style from '../../Pages/Login/Login.module.css';

const LoginForm = () => {
  const [form] = Form.useForm();
  const { setToken } = useToken();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_WEB_DOMAIN}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const userData = await response.json();
      console.log('Login successful');
      const token = userData.token;
      setToken({ token });
      navigate('/maps');
      window.scrollTo(0, 0);
    } catch (error) {
      message.error('Username or Password is incorrect');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={Style.loginBlock}>
      <div className={Style.containerFluid}>
        <div className={Style.largeloginCard}>
          <div className={Style.loginContent}>
            <h1 className={Style.welcometitle}>Welcome to Alluvium</h1>
            <p className={Style.welcometext}>
              Discover the power of data-driven insights with Alluvium. Log in to your account to unlock a world of possibilities.
            </p>
          </div>
          <div className={Style.smallloginCard}>
            <h1 className={Style.logintitle}>Login</h1>
            <Form
              form={form}
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              onFinish={onFinish}
              className={Style.Form}
            >
              <Form.Item
                name="username"
                label="Username"
                labelCol={{
                  span: 24,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username',
                  },
                ]}
              >
                <Input className={Style.largerStyles} />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                labelCol={{
                  span: 24,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password',
                  },
                ]}
              >
                <Input.Password className={Style.largerStyles} />
              </Form.Item>
              <Form.Item
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className={Style.loginButtonContainer}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
