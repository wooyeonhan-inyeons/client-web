import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import {
  ArrowLeftOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { recoil_ } from "../../../recoil";
import { USER_ROLE } from "../../../constants";
import { GetAdmin } from "./api";
import { useMutation } from "react-query";

const AdminLogin = () => {
  const [, setUser] = useRecoilState(recoil_.userState);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [submitLoding, setSubmitLoding] = useState(false);

  const { mutate } = useMutation(GetAdmin, {
    onMutate: () => {
      //μμ
      setSubmitLoding(true);
    },
    onError: (error: Error) => {
      console.log("onError", error);
      message.error(error.message + " π");
    },
    onSuccess: () => {
      message.success("λ‘κ·ΈμΈμ μ±κ³΅νμμ΅λλ€. π");
      setUser({ userId: 0, role: USER_ROLE.ADMIN });
    },
    onSettled: () => {
      //μ’λ£
      setSubmitLoding(false);
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const { Title } = Typography;

  return (
    <Row align="middle" style={{ height: "100vh", backgroundColor: "#fff" }}>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} />
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <Link to="/" style={{ display: "block", marginBottom: "1.5rem" }}>
          <ArrowLeftOutlined /> λμκ°κΈ°
        </Link>
        <Title level={1}>κ΄λ¦¬μ μ μ</Title>
        <Form
          name="basic"
          onFinish={() =>
            mutate({ username: form.username, password: form.password })
          }
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "μμ΄λλ₯Ό μλ ₯ν΄ μ£ΌμΈμ." }]}
          >
            <Input
              name="username"
              placeholder="ID"
              prefix={<UserOutlined />}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "λΉλ°λ²νΈλ₯Ό μλ ₯ν΄ μ£ΌμΈμ" }]}
          >
            <Input.Password
              name="password"
              placeholder="PW"
              prefix={<LockOutlined />}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item style={{ float: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              style={{ minWidth: "100px" }}
              loading={submitLoding}
            >
              λ‘κ·ΈμΈ
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} />
    </Row>
  );
};

export default AdminLogin;
