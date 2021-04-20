import React from "react";
import { Button, Row, Col, Table, Breadcrumb } from "antd";

import { ScanOutlined, HomeOutlined } from "@ant-design/icons";
import useDeviceDetect from "../utils/useDeviceDetect";
import { Link } from "react-router-dom";

export default function Scan() {
  const { isMobile } = useDeviceDetect();
  const columns = [
    {
      title: "วันที่",
      dataIndex: "date"
    },
    {
      title: "เวลา",
      dataIndex: "time"
    },
    {
      title: "สถานะ",
      dataIndex: "status"
    },
    {
      title: "สถานที่",
      dataIndex: "location"
    }
  ];
  const data = [
    {
      key: "1",
      date: "19 เม.ย. 2564",
      time: "08:20",
      status: "เข้า",
      location: "ศูนย์คอมพิวเตอร์"
    },
    {
      key: "2",
      date: "19 เม.ย. 2564",
      time: "16:20",
      status: "ออก",
      location: "ศูนย์คอมพิวเตอร์"
    }
  ];

  return (
    <>
      <div style={{ margin: "35px 0px 5px 0px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>สแกน</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="site-layout-background" style={{ padding: 24 }}>
        {isMobile ? (
          <Row>
            <Col span={12}>
              <Button type="dashed" block>
                <Link to="/scaninout?q=checkin">
                  <ScanOutlined /> สแกนเข้า
                </Link>
              </Button>
            </Col>
            <Col span={12}>
              <Button type="dashed" block>
                <Link to="/scaninout?q=checkout">
                  <ScanOutlined /> สแกนออก
                </Link>
              </Button>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={12}>
              <Button type="dashed" block>
                <Link to="/scaninout?q=checkin">
                  <ScanOutlined /> สแกนเข้า
                </Link>
              </Button>
            </Col>
            <Col span={12}>
              <Button type="dashed" block>
                <Link to="/scaninout?q=checkout">
                  <ScanOutlined /> สแกนออก
                </Link>
              </Button>
            </Col>
          </Row>
        )}

        <Row>
          <Col span={24} style={{ marginTop: "10px" }}>
            {/* <h4>Middle size table</h4>
          <Table columns={columns} dataSource={data} size="middle" /> */}
            {/* <h4>Small size table</h4> */}
            <Table columns={columns} dataSource={data} size="small" />
          </Col>
        </Row>
      </div>
    </>
  );
}
