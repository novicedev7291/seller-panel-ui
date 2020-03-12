import React from 'react';
import Tabs from 'antd/es/tabs';
import Login from '../components/Login';

import '../styles/welcome.scss';

const { TabPane } = Tabs;

const callback = (key) => console.log(key);

const Welcome = () => (
    <div className="welcome-wrapper">
        <div className="ww-left--pane">
            <div className="logo" />
        </div>
        <div className="ww-right--pane">
            <div className="rp-title--wrapper">
                <span className="right-pane--title">Welcome</span>
            </div>
            <div className="rp-login--wrapper">
                <Tabs defaultActiveKey="1" onChange={callback} >
                    <TabPane tab="Login" key="1">
                        <Login />
                    </TabPane>
                    <TabPane tab="Register" key="2">
                        Register
                    </TabPane>
                </Tabs>
            </div>
            <div className="ww-footer">Seller panel ©2020 Created by Example.com</div>
        </div>
    </div>
);

export default Welcome;