import React, { Component } from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import Breadcrumb from 'antd/es/breadcrumb';

import '../styles/app.scss';

import AppstoreOutlined from "@ant-design/icons/AppstoreOutlined";
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import IdcardOutlined from "@ant-design/icons/IdcardOutlined";

import { withRouter } from 'react-router-dom';
import ApiToken from '../ApiToken';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const apiToken = new ApiToken();

class App extends Component {
    state = {
        collapsed: false
    };

    componentDidMount = () => {
      if(!apiToken.getToken()) {
        this.props.history.push("/welcome");
      }
    }

    onCollapse = collapsed => {
        this.setState({
            collapsed
        });
    };
    render(){
        return (
            <div className="app-layout--wrapper">
              <Layout className="app-layout">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                  <div className="logo" />
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                      <IdcardOutlined />
                      <span>Profile</span>
                    </Menu.Item>
                    <SubMenu key="2"
                      title={
                        <span>
                          <TeamOutlined />
                          <span>IAM</span>
                        </span>
                      }
                    >
                      <Menu.Item key="3">Users</Menu.Item>
                      <Menu.Item key="4">Roles</Menu.Item>
                      <Menu.Item key="5">Permissions</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <AppstoreOutlined />
                          <span>Inventory</span>
                        </span>
                      }
                    >
                      <Menu.Item key="6">Products</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                      Bill is a cat.
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Seller panel ©2020 Created by Example.com</Footer>
                </Layout>
              </Layout>
            </div>
          );
    }
};

export default withRouter(App);