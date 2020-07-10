import React, { CSSProperties } from "react"
import { Layout, Row, Col, Space } from "antd"

export default function Page(props: { children?: React.ReactNode, style?: CSSProperties }) {
  return (
    <Layout style={{
      height: "100vh",
      width: "100vw",
      paddingTop: '5rem',
      overflow: 'scroll',
      ...props.style
    }}>
        <Row>
          <Col xs={2} sm={4} md={6} lg={6} xl={6}/>
          <Col xs={20} sm={16} md={12} lg={12} xl={12} style={{ display: "flex", flexDirection: "column" }}>
            {props.children}
          </Col>
          <Col xs={2} sm={4} md={6} lg={6} xl={6}/>
        </Row>
    </Layout>
  )
}
