import React, { Component } from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import Breadcrumb from 'antd/es/breadcrumb';
import DesktopOutlined from '@ant-design/icons/DesktopOutlined';
import PieChartOutlined from '@ant-design/icons/PieChartOutlined';
import FileOutlined from '@ant-design/icons/FileOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';

import '../styles/app.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    state = {
        collapsed: false
    };

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
                      <PieChartOutlined />
                      <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <DesktopOutlined />
                      <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <UserOutlined />
                          <span>User</span>
                        </span>
                      }
                    >
                      <Menu.Item key="3">Tom</Menu.Item>
                      <Menu.Item key="4">Bill</Menu.Item>
                      <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <TeamOutlined />
                          <span>Team</span>
                        </span>
                      }
                    >
                      <Menu.Item key="6">Team 1</Menu.Item>
                      <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                      <FileOutlined />
                    </Menu.Item>
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

export default App;