import React from 'react';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Checkbox from 'antd/es/checkbox';
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

import '../styles/login/index.scss';

const Login = () => {
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    return (
        <div className="login-form-wrapper">
          <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="/forgotPassword">
                  Forgot password
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="/register">register now!</a>
              </Form.Item>
            </Form>
        </div>
      );
};

export default Login;