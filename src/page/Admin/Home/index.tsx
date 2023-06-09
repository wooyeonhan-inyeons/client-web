import { Col, Row, Button, Select } from "antd";
import React from "react";
import { useResetRecoilState } from "recoil";
import { recoil_ } from "../../../recoil";
import { useState } from "react";
import UserTable from "./UserTable";
import { useRef } from "react";
import FriendsTable from "./FriendTable";
import PostTable from "./PostTable";
import ReportTable from "./ReportTable";

const AdminHome: React.FC = () => {
  const resetUser = useResetRecoilState(recoil_.userState);
  const [menu, setMenu] = useState("user");

  const handleChange = (value: string) => {
    setMenu(value);
  };

  const tableMap = useRef<any>({
    user: <UserTable />,
    friends: <FriendsTable />,
    post: <PostTable />,
    report: <ReportTable />,
  });

  return (
    <>
      <Row justify="center">
        <Col
          span={20}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button type="primary" onClick={resetUser}>
            로그아웃
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          span={20}
          style={{
            margin: "1rem 0 ",
          }}
        >
          <Select
            defaultValue="user"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "user",
                label: "user",
              },
              {
                value: "friends",
                label: "friends",
              },
              {
                value: "post",
                label: "post",
              },
              {
                value: "report",
                label: "report",
              },
              // {
              //   value: "posting",
              //   label: "posting",
              // },
            ]}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>{tableMap.current[menu]}</Col>
      </Row>
    </>
  );
};

export default AdminHome;
