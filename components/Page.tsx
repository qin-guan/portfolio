import React, { CSSProperties } from "react"
import { Layout, Row, Col, Space } from "antd"
import Head from "next/head";

export default function Page(props: { children?: React.ReactNode, style?: CSSProperties, title?: string }) {
  return (
    <Layout style={{
      width: "100vw",
      paddingTop: '5rem',
      ...props.style
    }}>
      <Head>
        <title>{props.title}</title>
      </Head>
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
