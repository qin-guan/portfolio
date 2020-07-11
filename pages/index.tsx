import React from "react"
import { Avatar, Button, Col, Divider, Layout, Row, Space, Timeline, Collapse, Typography, List, Card } from "antd"
import Page from "../components/Page"
import { ArrowDownOutlined } from "@ant-design/icons"
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons/lib"

const { Title, Text, Link } = Typography

const { Header, Footer, Sider, Content } = Layout

const { Panel } = Collapse

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
            I am currently a Secondary 4 student at SST.
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
            My Technical Experiences
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
                Together with Carl, my schoolmate, we created <a href={"https://codecollab.io"}
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
                also maintained <a href={"https://sstinc.org"} target={"_blank"}>SST Inc</a>'s iOS resources, such as deploying apps to the app store.
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
                Cloud. While working, I also implemented CI/CD into the workflow to help the team test
                and deploy at greater efficiency.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Volunteer Experiences
          </Title>
          <Timeline>
            <Timeline.Item>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                Swift Accelerator Program (Volunteer)</Title>
              <Text>
                After taking part in the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift Accelerator Program</a>, I volunteered to to help the subsequent cohorts and
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
                I volunteered at <a href={"https://hackomania.geekshacking.com"} target={"_blank"}>Hackomania</a> 2019, an annual 24-hour hackathon by Geekshacking Community that aims to
                bring together tech enthusiasts, students and working professionals from various backgrounds to tackle
                real-world issues with tech solutions. At the hackathon, I helped with event logistics.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
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
              <Text>
                <a href={"https://github.com/sst-inc/openhouse2020"}><Text keyboard>Open Source</Text></a>
                I also developed the <a href={"https://github.com/sst-inc/openhouse2020"}>Open House App</a> for 2020. Due to the COVID-19 situation, the app was not
                released. However, the source code will be used to build the 2021 Open House App.</Text>
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
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Achievements
          </Title>
          <Space direction={"vertical"} size={"large"}>
            <div>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2019</Text>
                IMDA Techblazer Awards (Student) - Silver</Title>
              <Text>CodeCollab.io <a
                href={"https://techblazerawards.sg/Past-Winners/2019-Winners/School-Of-Science-And-Technology-Singapore"}
                target={"_blank"}>attained Silver</a> in the IMDA Techblazer Awards, Student Category. Techblazer Awards
                (student) is the Singapore's highest accolade for tech innovation that recognizes innovative ideas with
                commercialisation potential developed by students</Text>
            </div>
            <div>
              <Title style={{
                fontFamily: "Inter",
                fontWeight: 500
              }} level={4}>
                <Text keyboard>2020</Text>
                SST Inventive Minds Award</Title>
            </div>
          </Space>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Knowledge and Skills
          </Title>
          <Collapse>
            <Panel header="Languages" key="languages">
              <List grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3
              }}
                    dataSource={[{ title: "Typescript", link: "https://www.typescriptlang.org" }, {
                      title: "C#",
                      link: "https://asp.net"
                    }, { title: "Swift", link: "https://swift.org" }, {
                      title: "Python",
                      link: "https://python.org"
                    }, { title: "Go", link: "https://golang.org" }, { title: "Rust", link: "https://rustlang.org" }]}
                    renderItem={item => (
                      <List.Item>
                        <a href={item.link} target={"_blank"}>
                          <Text>{item.title}</Text>
                        </a>
                      </List.Item>
                    )}
              />
            </Panel>
            <Panel header="Frameworks" key="frameworks">
              <List grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3
              }}
                    dataSource={[{ title: "React", link: "https://reactjs.org" }, {
                      title: "React Native",
                      link: "https://reactnative.dev"
                    }, { title: "NestJS", link: "https://nestjs.com" }, {
                      title: "ASP.NET",
                      link: "https://asp.net"
                    }, { title: "Django", link: "https://djangoproject.com" }]}
                    renderItem={item => (
                      <List.Item>
                        <a href={item.link} target={"_blank"}>
                          <Text>{item.title}</Text>
                        </a>
                      </List.Item>
                    )}
              />
            </Panel>
            <Panel header="DevOps" key="DevOps">
              <List grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3
              }}
                    dataSource={[{ title: "Azure DevOps (Agile)", link: "https://dev.azure.com" }, {
                      title: "Google Cloud Platform",
                      link: "https://cloud.google.com"
                    }, { title: "Azure", link: "https://azure.com" }, {
                      title: "Tencent Cloud",
                      link: "https://intl.cloud.tencent.com"
                    }, { title: "Github Actions", link: "https://github.com" }, {
                      title: "Teamcity",
                      link: "https://jetbrains.com/teamcity"
                    }, { title: "Kubernetes", link: "https://k8s.io" }, {
                      title: "Docker",
                      link: "https://docker.com"
                    }]}
                    renderItem={item => (
                      <List.Item>
                        <a href={item.link} target={"_blank"}>
                          <Text>{item.title}</Text>
                        </a>
                      </List.Item>
                    )}
              />
            </Panel>
            <Panel header="Security" key="security">
              <List grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3
              }}
                    dataSource={[{ title: "OAuth2.0 Standard", link: "https://oauth.net" }]}
                    renderItem={item => (
                      <List.Item>
                        <a href={item.link} target={"_blank"}>
                          <Text>{item.title}</Text>
                        </a>
                      </List.Item>
                    )}
              />
            </Panel>
            <Panel header="Databases" key="databases">
              <List grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3
              }}
                    dataSource={[{ title: "TiDB", link: "https://pingcap.com" }, {
                      title: "MySQL",
                      link: "https://mysql.com"
                    }, { title: "MongoDB", link: "https://mongodb.com" }, {
                      title: "Google Cloud Firestore",
                      link: "https://cloud.google.com/firestore"
                    }, {
                      title: "Google Cloud Datastore",
                      link: "https://cloud.google.com/datastore"
                    }, { title: "Azure Cosmos DB", link: "https://azure.microsoft.com/en-us/services/cosmos-db/" }]}
                    renderItem={item => (
                      <List.Item>
                        <a href={item.link} target={"_blank"}>
                          <Text>{item.title}</Text>
                        </a>
                      </List.Item>
                    )}
              />
            </Panel>
          </Collapse>
        </Content>
        <Footer/>
      </Page>
    )
  }
}

export default IndexPage
