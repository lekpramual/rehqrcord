import React, { useState } from "react";
import { Route, Redirect, Switch as Switchs, Link } from "react-router-dom";
import { Layout, Menu, Avatar, PageHeader, Switch } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  DownOutlined,
  ScanOutlined,
  HomeOutlined
} from "@ant-design/icons";

import Form from "./Containers/FormSizeDemo";
import Home from "./Containers/Home";
import Scan from "./Containers/Scan";
import ScanInOut from "./Containers/ScanInOut";
import NotFoundPage from "./Containers/NotFoundPage";

// import "./App.less";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = (props) => {
  const [status, setStatus] = useState(null);
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    console.log(value);
    setTheme(value ? "dark" : "light");
  };


  return (
    <Layout style={{ minHeight: "100vh", marginTop: "-10px" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        theme={theme}
        style={{
          margin: "10px 0px 0px 0px"
        }}
      >
        <div className="logo" theme={theme} />
        <Menu theme={theme} mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">หน้าแรก</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to="/register">ลงทะเบียน</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ScanOutlined />}>
            <Link to="/scan">สแกน</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          // className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <Menu
            // style={{ textAlign: "center" }}
            theme={theme}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">
              <UserOutlined /> หน้าแรก
            </Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
            <SubMenu
              style={{ float: "right" }}
              icon={<Avatar icon={<UserOutlined />} />}
              title={
                <span>
                  {/* <Icon type="setting" /> */} ประมวล นัดทะยาย - ทั่วไป{" "}
                  <DownOutlined />
                </span>
              }
            >
              <MenuItemGroup title="ตั้งค่า">
                <Menu.Item key="setting:1">ข้อมูลส่วนตัว</Menu.Item>
              </MenuItemGroup>
              <Menu.Item key="setting:3">ออกจากระบบ</Menu.Item>
            </SubMenu>
          </Menu>
          <Switch
            style={{ float: "right", margin: "15px 15px 0px 0px" }}
            checked={theme === "dark"}
            onChange={(e) => changeTheme(e)}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <Switchs>
            <Route exact path="/">
              <Redirect from="/" to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Form} />
            <Route path="/scan" component={Scan} />
            <Route path="/scaninout" component={ScanInOut} />

            <Route component={NotFoundPage} />
          </Switchs>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
