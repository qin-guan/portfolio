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
                <Title style={{
                  fontFamily: "Metropolis"
                }}>Hi, I'm Qin Guan</Title>
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
                <div style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>Co-Founder of <a href={"https://codecollab.io"} target={"_blank"}>CodeCollab.io</a></Text>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>Software Engineer at <a href={"https://outsideapp.co"} target={"_blank"}>Outside</a></Text>
                </div>
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
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Education
          </Title>
          <Title style={{
            fontFamily: "Inter",
            fontWeight: 500
          }} level={4}>
            <Text keyboard>2017-2020</Text>
            Computing at School of Science and Technology, Singapore
          </Title>
          <Text>
            I am currently studying at the School of Science and Technology, Singapore. The applied subject that I am
            taking in SST is Computing.
          </Text>
          <Title style={{
            fontFamily: "Inter",
            fontWeight: 500
          }} level={4}>
            <Text keyboard>2018</Text>
            Swift Accelerator Program
          </Title>
          <Text>
            I am part of the pioneering batch of the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift
            Accelerator Program</a>. The program, by IMDA and Apple, covers skills such as building apps with Swift
            and also marketing and design principles.
          </Text>
          <Title style={{
            fontFamily: "Inter",
            fontWeight: 500
          }} level={4}>
            <Text keyboard>2018</Text>
            Swift Innovators' Summit
          </Title>
          <Text>
            As part of the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift
            Accelerator Program</a>, Carl, my schoolmate, and I created an app, Parkgoer, and presented it at the Summit
            to IMDA
            Assistant Chief Executive of Planning, Ms Koh Li-Na.
          </Text>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My experiences
          </Title>
          <Timeline>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2017</Text>
                Co-Founded CodeCollab.io
              </Title>
              <Text>
                Together with Carl, my schoolmate at SST, we created <a href={"https://codecollab.io"}
                                                                        target={"_blank"}>CodeCollab</a>, a
                collaborative code
                editor that allows anyone
                to compile, collaborate and create code anywhere, at any time.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2018</Text>
                Chief Technology Officer (iOS) at SST Inc</Title>
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
                Swift Accelerator Program (Volunteer)</Title>
              <Text>
                After taking part in the Swift Accelerator Program, I volunteered to to help the subsequent cohorts and
                provided technical assistance.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Hackomania (Volunteer)</Title>
              <Text>
                I volunteered at Hackomania 2019, an annual 24-hour hackathon by Geekshacking Community that aims to
                bring together tech enthusiasts, students and working professionals from various backgrounds to tackle
                real-world issues with tech solutions. At the hackathon, I helped with event logistics.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Chief Technology Officer (React) at SST Inc</Title>
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
                Software Engineer at Outside Technologies Private Limited</Title>
              <Text>
                At Outside, I work on our <a href={"https://web.outsideapp.co"} target={"_blank"}>web
                technologies</a> that is
                in use today. I also helped to manage our cloud platforms, namely Google Cloud Platform and Tencent
                Cloud. While developing the web app, I also implemented CI/CD into the workflow to help the team test
                and deploy at greater efficiency.
              </Text>
            </Timeline.Item><Timeline.Item>
            <Title style={{
              fontFamily: "Inter",
              fontWeight: 500
            }} level={4}>
              <Text keyboard>2020</Text>
              Swift Accelerator Program (Volunteer)</Title>
          </Timeline.Item>
          </Timeline>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Projects
          </Title>
          <Space direction={"vertical"} size={"large"}>
            <div>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                SST Open House App</Title>
              <Text>For SST's annual open house, I developed the <a
                href={"https://apps.apple.com/sg/app/sst-open-house-2019/id1459040697"} target={"_blank"}>Open House
                App</a> to help users learn more about the
                events they can take part in during the event, and also help them plan their time at the school.</Text>
            </div>
            <div>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2020/2021</Text>
                SST Open House App</Title>
              <Text>I also developed the Open House App for 2020. Due to the COVID-19 situation, the app was not
                released. However, the source code will be used to build the 2021 Open House App.
                Check out the code <a href={"https://github.com/sst-inc/openhouse2020"}>here</a></Text>
            </div>
            <div>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2018-2020</Text>
                TTSH PACE</Title>
              <Text>I helped to develop the TTSH PACE app. The project, a collaboration between Tan Tock Seng Hospital
                and SST, aims to help
                doctors in TTSH quicky reference standard operating procedures and guidance material. It also includes
                utilities like calculators for common formulas.</Text>
            </div>
          </Space>
        </Content>
      </Page>
    )
  }
}

export default IndexPage
