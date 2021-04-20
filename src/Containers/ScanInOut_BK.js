import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Row, Col, Breadcrumb } from "antd";
// import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

import { ScanOutlined, HomeOutlined } from "@ant-design/icons";
import queryString from "query-string";
import QrScan from "react-qr-reader";
import { geolocated } from "react-geolocated";

function ScanInOut(location, props) {
  const qs = queryString.parse(location.search);

  return (
    <>
      <div style={{ margin: "35px 0px 5px 0px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/scan">
              <ScanOutlined />
              <span> สแกน</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>สแกน เข้า - ออก</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="site-layout-background" style={{ padding: 24 }}>
        {props.isGeolocationAvailable}
        {!props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled </div>
        ) : props.coords ? (
          <>
            <Row>
              <Col span={24}>
                <Button type="dashed" block>
                  <ScanOutlined /> จุดสแกน : ศูนย์คอมพิวเตอร์ สถานะ :{" "}
                  {qs["q"] === "checkin" ? "สแกนเข้า" : "สแกนออก"}
                </Button>
              </Col>
              <Col span={12}>
                <Button type="dashed" block>
                  <ScanOutlined /> Latitude : {props.coords.latitude}
                </Button>
              </Col>
              <Col span={12}>
                <Button type="dashed" block>
                  <ScanOutlined /> Longitude : {props.coords.longitude}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button
                  type="dashed"
                  style={{ height: "300px" }}
                  block
                ></Button>
              </Col>
            </Row>
          </>
        ) : (
          <div>Getting the location data&hellip; </div>
        )}
      </div>
    </>
  );
}
// export default withRouter(
//   geolocated({
//     // positionOptions: {
//     //   enableHighAccuracy: false
//     // },
//     positionOptions: {
//       enableHighAccuracy: true,
//       maximumAge: 0,
//       timeout: Infinity
//     },

//     watchPosition: false,
//     userDecisionTimeout: 5000,
//     suppressLocationOnMount: false,
//     geolocationProvider: navigator.geolocation,
//     isOptimisticGeolocationEnabled: true
//   })(ScanInOut)
// );

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ScanInOut);
