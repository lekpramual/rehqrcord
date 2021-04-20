import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Breadcrumb,
  Spin,
  Divider,
  DatePicker,
  message,
  Button,
  Radio,
  Typography,
  PageHeader,
  Switch,
  Row,
  Col
} from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  SearchOutlined
} from "@ant-design/icons";

import Form from "./Containers/Form";
// import "./App.less";
import "antd/dist/antd.css";
import "./index.css";
import "moment/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = (props) => {
  const [theme, setTheme] = useState("light");
  const [date, setDate] = useState(null);
  const [size, setSize] = useState("large");
  const [collapsed, setCollapsed] = useState(false);
  const [inout, setInout] = useState(null);

  const changeTheme = (value) => {
    console.log(value);
    setTheme(value ? "dark" : "light");
  };

  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu"
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu"
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu"
    }
  ];

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
        <div className="logo" />
        <Menu theme={theme} mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
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
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Switch
            style={{ float: "right", marginTop: "-2px" }}
            checked={theme === "dark"}
            onChange={(e) => changeTheme(e)}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br />

          <div
            className="site-page-header"
            style={{ margin: "-5px 0px 5px 0px" }}
          >
            <PageHeader
              className="site-page-header"
              title="Title"
              breadcrumb={{ routes }}
              subTitle="This is a subtitle"
            />
          </div>

          <div className="site-layout-background" style={{ padding: 24 }}>
            <Spin spinning={false} delay={500} size="large">
              <Divider plain>DatePicker</Divider>
              <Row>
                <Col span={12}>
                  {" "}
                  <DatePicker locale={locale} onChange={handleChange} />
                </Col>
                <Col span={12}>col-12</Col>
              </Row>

              <div style={{ marginTop: 16 }}>
                Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
              </div>

              <Divider plain>Button</Divider>
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <hr />
              <Button type="primary" size={size} icon={<SearchOutlined />}>
                Button
              </Button>
              <Divider plain>Title</Divider>
              <Title>h1. Ant Design</Title>
              <Title level={2}>h2. Ant Design</Title>
              <Divider plain>Text</Divider>
              <Text>Ant Design (default)</Text>
            </Spin>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
