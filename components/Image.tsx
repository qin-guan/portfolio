import React from 'react';
import {Col, Row} from "antd";

export default function Image(props: { src?: string }) {
  return (
    <Row>
      <Col xs={20} sm={20} md={18} lg={16} xl={14} style={{display: 'flex'}}>
        <div style={{
          backgroundImage: `url(${props.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'left center',
          flex: 1,
          height: 75
        }}>
          {/*<img src={props.src} style={{visibility: "hidden"}}/>*/}
        </div>
      </Col>
    </Row>
  )
}
