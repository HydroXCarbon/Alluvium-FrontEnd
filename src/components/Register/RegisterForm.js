import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message, Form, Input } from 'antd';
import Style from '../../Pages/Register/Register.module.css';

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handletologin = () => {
    navigate('/login');
    window.scrollTo(0, 0);
  }

  const onFinish = async (values) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_WEB_DOMAIN}/user/register`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      message.success('Register complete');
      navigate('/login');
      window.scrollTo(0, 0);
    } catch (error) {
      if (error.message === 'user.username.already.use') {
        message.error('Username is already in use');
      } else if (error.message === 'user.password.unmatched') {
        message.error('Passwords do not match');
      }
      console.error(error);
    }
  };

  return (
    <div className={Style.registerBlock}>
      <div className={Style.containerFluid}>
        <div className={Style.largeregisterCard}>
          <div className={Style.registerContent}>
            <h1 className={Style.welcometitle}>Welcome to Alluvium</h1>
            <p className={Style.welcomeText}>
              Discover the power of data-driven insights with Alluvium. Log in to your account to unlock a world of possibilities.
            </p>
          </div>
          <div className={Style.smallregisterCard}>
            <h1 className={Style.registertitle}>Register</h1>
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
                name="confirmpassword"
                label="confirmPassword"
                labelCol={{
                  span: 24,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your confirm password',
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
                  className={Style.registerButtonContainer}
                >
                  Register
                </Button>
                <Button
                  type="text"
                  onClick={handletologin}
                  className={Style.button}
                >
                  already have an account?
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
