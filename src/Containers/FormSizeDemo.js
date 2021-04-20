import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Switch,
  Breadcrumb
} from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "moment/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 14
  }
};

const validateMessages = {
  required: "${label} ต้องไม่เป็นค่าว่าง!"
};

export default function FormSizeDemo() {
  const [componentSize, setComponentSize] = useState("default");

  const onFinish = (values) => {
    console.log(values);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div style={{ margin: "35px 0px 5px 0px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>ลงทะเบียน</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="horizontal"
          initialValues={{
            size: componentSize,
            serial: uuidv4(),
            date: moment(new Date()),
            status: true
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="ขนาดฟอร์ม" name="size">
            <Radio.Group>
              <Radio.Button value="small">เล็ก</Radio.Button>
              <Radio.Button value="default">กลาง</Radio.Button>
              <Radio.Button value="large">ใหญ่</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item label="ชื่อ-สกุล">
          <Input />
        </Form.Item> */}
          <Form.Item
            name="name"
            label="ชื่อ-สกุล"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select
              showSearch
              // style={{ width: 300 }}
              placeholder="เลือก ชื่อ-นามสกุล"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Select.Option value="210">ชาติชัย พุทธานี</Select.Option>
              <Select.Option value="211">เฉลิมศักดิ์ อังคุนะ</Select.Option>
              <Select.Option value="212">ปรีญารัศมิ์ อุปจันทร์</Select.Option>
              <Select.Option value="213">
                พรวิภาพรรณ ประเสริฐสังข์
              </Select.Option>
              <Select.Option value="214">สุพัชฌาพ์ ภูพลผัน</Select.Option>
              <Select.Option value="215">วิชิต ภักดีสมัย</Select.Option>
              <Select.Option value="216">
                พงษ์ศักดิ์ จูตะวิริยะสกุล
              </Select.Option>
              <Select.Option value="217">มนต์ชัย ศรีทอง</Select.Option>
              <Select.Option value="218">ปัสธร หวานอารมย์</Select.Option>
              <Select.Option value="219">ประมวล นัดทะยาย</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="serial"
            label="รหัสประจำเครื่อง"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              placeholder="รหัสประจำเครื่อง"
              defaultValue={uuidv4()}
              disabled
            />
          </Form.Item>

          <Form.Item label="วันที่" name="date">
            <DatePicker
              locale={locale}
              format="YYYY-MM-DD"
              placeholder="เลือกวันที่"
              defaultValue={moment(new Date())}
              disabled
            />
          </Form.Item>
          <Form.Item label="สถานะ" name="status">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              บันทึก
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
