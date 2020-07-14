import React, {CSSProperties} from 'react';
import {Col, Row} from "antd";

export default function Mobile(props: { children?: React.ReactNode, style?: CSSProperties }) {
  return (
    <Row style={props.style}>
      <Col xs={24} sm={24} md={24} lg={24} xl={0}>
        {props.children}
      </Col>
    </Row>
  )
}
