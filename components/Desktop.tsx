import React, {CSSProperties} from 'react';
import {Col, Row} from "antd";

export default function Desktop(props: { children?: React.ReactNode, style?: CSSProperties }) {
  return (
    <Row style={props.style}>
      <Col xs={0} sm={0} md={0} lg={0} xl={24}>
        {props.children}
      </Col>
    </Row>
  )
}
