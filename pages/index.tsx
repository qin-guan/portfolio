import React from "react"
import { Avatar, Button, Col, Divider, Layout, Row, Space, Timeline, Tooltip, Typography } from "antd"
import Page from "../components/Page"
import { motion } from "framer-motion"
import { ArrowDownOutlined } from "@ant-design/icons"
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons/lib"
import Link from "next/link"

const { Title, Text } = Typography

const { Header, Footer, Sider, Content } = Layout

interface IIndexPageState {
}

interface IIndexPageProps {
}

class IndexPage extends React.Component<IIndexPageProps, IIndexPageState> {
  constructor(props: IIndexPageProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Page>
        <Content style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
              <Space direction="vertical" size={"large"}>
                <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }}>
                  <Title style={{
                    fontFamily: "Metropolis"
                  }}>Hi, I'm Qin Guan</Title>
                </motion.div>
                <Space>
                  <a href={"https://github.com/qin-guan"} target={"_blank"}>
                    <GithubOutlined style={{
                      fontSize: "2rem"
                    }}/>
                  </a>
                  <a href={"https://instagram.com/qinguan2004"} target={"_blank"}>
                    <InstagramOutlined style={{
                      fontSize: "2rem"
                    }}/>
                  </a>
                  <a href={"https://www.linkedin.com/in/qin-guan/"} target={"_blank"}>
                    <LinkedinOutlined style={{
                      fontSize: "2rem"
                    }}/>
                  </a>
                </Space>
                <Title style={{
                  fontFamily: "Inter"
                }} level={4}>I'm a student from the School of Science and Technology, Singapore</Title>
              </Space>
            </Col>
            <Col xs={0} sm={0} md={0} lg={6} xl={6}>
              <Avatar size={150} src="/me.jpg"/>
            </Col>
          </Row>
        </Content>
        <Divider>
          <Footer style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button size="large" type={"text"} shape="circle" icon={
              <ArrowDownOutlined/>
            }/>
          </Footer>
        </Divider>
        <Content>
          <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }}>
            <Title style={{
              fontFamily: "Metropolis"
            }}>
              My experiences
            </Title>
          </motion.div>
          <Timeline>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2017</Text>
                Co-Founder & CTO, CodeCollab.io
              </Title>
              <Text>
                Together with Carl, my classmate, we created CodeCollab. A collaborative code editor that allows anyone
                to compile, collaborate and create code anywhere, at any time.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Swift Accelerator Program (2018)
              </Title>
              <Text>
                I  the pioneering batch of the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift Accelerator Program</a>, an
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2018</Text>
                Chief Technology Officer (iOS), SST Inc</Title>
              <Text>
                As the Chief Technology Officer for iOS, I assisted students in developing their iOS applications. I
                also maintained SST Inc's iOS resources, such as deploying apps to the app store.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Chief Technology Officer (React), SST Inc</Title>
              <Text>
                As the Chief Technology Officer for React, I promoted the use of React/React Native to students and also
                assisted them in getting started with the framework. I conducted a 5 day course on React Native, which
                covers the basics of ReactJS, to more advanced usages with Redux and RNFirestore.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Software Engineer, Outside Technologies Private Limited</Title>
              <Text>
                As the Chief Technology Officer for React, I promoted the use of React/React Native to students and also
                assisted them in getting started with the framework. I conducted a 5 day course on React Native, which
                covers the basics of ReactJS, to more advanced usages with Redux and RNFirestore.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Content>
      </Page>
    )
  }
}

export default IndexPage
