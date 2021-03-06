import React from "react"
import { Avatar, Button, Col, Divider, Layout, Row, Space, Timeline, Collapse, Typography, List, Card } from "antd"
import Page from "../components/Page"
import { ArrowDownOutlined } from "@ant-design/icons"
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, GitlabOutlined } from "@ant-design/icons/lib"

import { scroller, Element } from "react-scroll"

import Desktop from "../components/Desktop"
import Mobile from "../components/Mobile"
import Image from "../components/Image"
import Flex from "../components/Flex"

const { Title, Text } = Typography

const { Footer, Content } = Layout

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
      <Page title={"Qin Guan"}>
        <Content style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
              <Space direction="vertical" size={"large"}>
                <Mobile>
                  <Avatar size={150} src={"/me.jpg"}/>
                </Mobile>
                <Title style={{
                  fontFamily: "Metropolis"
                }}>Hi, I'm Qin Guan</Title>
                <Space>
                  <a href={"https://github.com/qin-guan"} target={"_blank"}>
                    <GithubOutlined style={{
                      fontSize: "2rem"
                    }}/>
                  </a>
                  <a href={"https://gitlab.com/qinguan2004"} target={"_blank"}>
                    <GitlabOutlined style={{
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
                }} level={4}>I'm a Cybersecurity and Digital Forensics student from Ngee Ann Polytechnic</Title>
                <div style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>Co-Founder of <a href={"https://codecollab.io"} target={"_blank"}>CodeCollab.io</a></Text>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>Software Engineer Intern at <a href={"https://pigeonholelive.com"} target={"_blank"}>PigeonLab</a></Text>
                </div>
              </Space>
            </Col>
            <Desktop>
              <Avatar size={150} src={"/me.jpg"}/>
            </Desktop>
          </Row>
        </Content>
        <Divider>
          <Footer style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button onClick={() => scroller.scrollTo("start", {
              duration: 500,
              delay: 0,
              smooth: "easeInOutQuart"
            })} size="large" type={"text"} shape="circle" icon={
              <ArrowDownOutlined/>
            }/>
          </Footer>
        </Divider>
        <Element name={"start"}/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Education
          </Title>
          <Space direction={"vertical"} size={40}>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/sst.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2017-2020</Text>
                  School of Science and Technology, Singapore
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                At the School of Science and Technology, we are able to choose an O-Level Applied Subject to develop our
                interests in a specific field. For myself, I chose Computing+ as my Applied Subject, which allows me to
                develop my computational thinking skills, and also further my knowledge in the Python language.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/inc.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  SST Inc Ethical Hacking
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                I took part in the Ethical Hacking course offered by SST Inc, SST's ICT Talent Development Program.
                During the ethical hacking course, we learnt things such as how computers work, and how cyber attacks
                take place.
                At the end of the course, we built a chatroom with MySQL, PHP and Apache, and tried to bring down each
                other's chatroom.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/sap.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2018</Text>
                  Swift Accelerator Program
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                I am part of the pioneering batch of the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift
                Accelerator Program</a>. The 9 months long program, by IMDA and Apple, covers skills such as building
                apps with Swift
                and also marketing and design principles.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/sap.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2018</Text>
                  Swift Innovators' Summit
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                The Swift Innovators Summit is a summit held at the end of the <a href={"https://swiftinsg.org"}
                                                                                  target={"_blank"}>Swift Accelerator
                Program</a> for students to
                showcase their apps. My schoolmate, Carl, and I created an app, Parkgoer, and presented it at the
                Summit
                to IMDA
                Assistant Chief Executive of Planning, Ms Koh Li-Na. Parkgoer is an app to help children find parks and
                recreational facilities around Singapore.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/np.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2018</Text>
                  Ngee Ann Polytechnic Entrepreneurship First Steps (EFS)
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                I took part in EFS to learn more about how businesses work and entrepreneurship. Through the course, I
                was also able to gain more insight into starting and managing a business.
              </Text>
            </Flex>
          </Space>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Technical Experiences
          </Title>
          <Space direction={"vertical"} size={40}>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/cc.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2017</Text>
                  Co-Founded CodeCollab.io
                  <Text keyboard>Current</Text>
                </Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                Together with my schoolmate, Carl, we created <a href={"https://codecollab.io"}
                                                                 target={"_blank"}>CodeCollab</a>, a
                collaborative code
                editor that allows anyone
                to compile, collaborate and create code anywhere, at any time.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/inc.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2018</Text>
                  Chief Technology Officer (iOS) at SST Inc</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                As the Chief Technology Officer for iOS, I assisted students in developing their iOS applications. I
                also maintained <a href={"https://sstinc.org"} target={"_blank"}>SST Inc</a>'s iOS resources, such as
                deploying apps to the app store.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/inc.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  Chief Technology Officer (React) at SST Inc</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                As the Chief Technology Officer for React, I promoted the use of React/React Native to students and also
                assisted them in getting started with the framework. I conducted a 5 day course on React Native, which
                covers content ranging from the basics of ReactJS, to more advanced usages with Redux and RNFirestore.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/out.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  Software Engineer at Outside Technologies Private Limited
                </Title>
              </Space>
              <Space direction={"vertical"}>
                <Text style={{
                  fontFamily: "Inter"
                }}>
                  At Outside, I work on our <a href={"https://web.outsideapp.co"} target={"_blank"}>web
                  technologies</a> that is
                  in use today. I also helped to manage our cloud platforms, namely Google Cloud Platform and Tencent
                  Cloud. While working, I also implemented CI/CD into the workflow to help the team test
                  and deploy at greater efficiency.
                </Text>
                <div>
                  <Collapse>
                    <Panel header={"Letter of Recommendation"} key={"outside"}>
                      <iframe
                        src="https://onedrive.live.com/embed?cid=35655CF197B5953D&resid=35655CF197B5953D%212898&authkey=AHvFnaO7MKOrxQ8&em=2"
                        width={"90%"} height={400} frameBorder="0" scrolling="no"/>
                    </Panel>
                  </Collapse>
                </div>
              </Space>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/pigeon.svg"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2021</Text>
                  Software Engineer Intern at PigeonLab Private Limited
                  <Text keyboard>Current</Text>
                </Title>
              </Space>
              <Space direction={"vertical"}>
                <Text style={{
                  fontFamily: "Inter"
                }}>
                  In 2021, I joined the PigeonLab team, which created <a href={"https://pigeonholelive.com"} target={"_blank"}>Pigeonhole Live</a>, a live audience engagement platform, as a Software Engineer Intern. At PigeonLab, I worked on our internal tooling with frameworks like VueJS and ExpressJS. I also gained experience working with AWS services such as S3. Later on in the internship, I also got to work on our Public API in Go and Public API documentation with React.     
                </Text>
              </Space>
            </Flex>
          </Space>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Volunteer Experiences
          </Title>
          <Space direction={"vertical"} size={40}>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/sap.webp"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  <Text keyboard>2020</Text>
                  Swift Accelerator Program (Volunteer)</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                After taking part in the <a href={"https://swiftinsg.org"} target={"_blank"}>Swift Accelerator
                Program</a>,
                I volunteered to help the subsequent cohorts and
                provide technical assistance.
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/hack.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  Hackomania (Volunteer)</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>
                I volunteered at <a href={"https://hackomania.geekshacking.com"} target={"_blank"}>Hackomania</a> 2019,
                an
                annual 24-hour hackathon by Geekshacking Community that aims to
                bring together tech enthusiasts, students and working professionals from various backgrounds to tackle
                real-world issues with tech solutions. At the hackathon, I helped with event logistics.
              </Text>
            </Flex>
          </Space>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Projects
          </Title>
          <Space direction={"vertical"} size={40}>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/oh19.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  <Text keyboard>2021</Text>
                  SST Open House App</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>For SST's annual open house, I developed the Open House
                App to help users learn more about the
                events they can take part in during the event, and also help them plan their time at the school. <a
                  href={"https://apps.apple.com/sg/app/sst-open-house-2019/id1459040697"} target={"_blank"}><Text
                  keyboard>Link to Open House App 2019</Text>
                </a>
                <br/>
                I also developed the Open House App for 2020.
                Due to the COVID-19 situation, the app was not
                released. However, the source code will be used to build the 2021 Open House App.
                <a href={"https://github.com/sst-inc/openhouse2020"} target={"_blank"}><Text keyboard>Link to Open House
                  App 2021</Text></a>
              </Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/pace.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2018-2020</Text>
                  TTSH PACE</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>I helped to develop the TTSH PACE app. The project, a collaboration between Tan Tock Seng Hospital
                and SST, aims to help
                doctors in TTSH quicky reference standard operating procedures and guidance material. It also includes
                utilities like calculators for common formulas.</Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2020</Text>
                  Strife</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>My latest project is Strife. Strife is an open source collaborative and communication platform built on ASP.NET Core Blazor, MVC, and SignalR. It was started mainly as a way for me to try out ASP.NET Core Blazor, and to improve my OAuth2.0/OpenID Connect skills.</Text>
            </Flex>
          </Space>
        </Content>
        <Divider/>
        <Content>
          <Title style={{
            fontFamily: "Metropolis"
          }}>
            My Achievements
          </Title>
          <Space direction={"vertical"} size={40}>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/tb.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2019</Text>
                  IMDA Techblazer Awards (Student) - Silver</Title>
              </Space>
              <Text style={{
                fontFamily: "Inter"
              }}>CodeCollab.io <a
                href={"https://techblazerawards.sg/Past-Winners/2019-Winners/School-Of-Science-And-Technology-Singapore"}
                target={"_blank"}>attained Silver</a> in the IMDA Techblazer Awards, Student Category. Techblazer Awards
                (student) is the Singapore's highest accolade for tech innovation that recognizes innovative ideas with
                commercialisation potential developed by students.</Text>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/microsoft.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2020</Text>
                  Microsoft Imagine Cup Junior - 1st Runner Up</Title>
              </Space>
              <Text>My group <a
                href={"https://imaginecup.microsoft.com/en-us/junior"}
                target={"_blank"}>attained 1st runner up</a> in the Microsoft Imagine Cup Junior competition. Imagine
                Cup Junior provides students aged 13 to 18 the opportunity to learn about technology and how it can be
                used to positively change the world. In 2020, the global challenge was focused on Artificial
                Intelligence (AI), introducing students to AI and Microsoft’s AI for Good initiatives so they can come
                up with ideas to solve social, cultural and environmental issues. It’s also a great opportunity to
                encourage students to develop and practice 21st century skills like communication, collaboration,
                critical thinking and creativity.</Text>
              <div>
                <Collapse>
                  <Panel header={"Our Submission"} key={"imaginecup"}>
                    <iframe
                      src="https://s2017sstedusg-my.sharepoint.com/personal/qin_guan_s2017_sst_edu_sg/_layouts/15/Doc.aspx?sourcedoc={4b9e81e9-e8e0-40a6-94ba-e7eaa99bedce}&amp;action=embedview&amp;wdStartOn=1"
                      width={"90%"} height={400} frameBorder="0" scrolling="no"/>
                  </Panel>
                </Collapse>
              </div>
            </Flex>
            <Flex>
              <Space direction={"vertical"} size={"middle"}>
                <Image src={"/sst.png"}/>
                <Title style={{
                  fontFamily: "Inter",
                  fontWeight: 500
                }} level={4}>
                  <Text keyboard>2020</Text>
                  SST Inventive Minds Award</Title>
              </Space>
            </Flex>
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
              <Space direction={"vertical"} size={"large"}>
                <div>
                  <a href={"https://www.typescriptlang.org"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>Typescript</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>Majority of the projects I work on utilize Typescript. Some examples include the SST Open House
                    apps, and my work at Outside.</Text>
                </div>
                <div>
                  <a href={"https://asp.net"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>C#</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>I use C#, with ASP.NET Core on my personal projects, as it has a mature ecosystem. For example, I
                    frequently experiment with OAuth2.0 on IdentityServer4.</Text>
                </div>
                <Text keyboard>Others:</Text>
                <List grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3
                }}
                      dataSource={[{ title: "Swift", link: "https://swift.org" }, {
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
              </Space>
            </Panel>
            <Panel header="Frameworks" key="frameworks">
              <Space direction={"vertical"} size={"large"}>
                <div>
                  <a href={"https://reactjs.org"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>React/React Native</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>React is my preferred framework for front end development. It has a rich ecosystem with a great
                    support from the community. Knowing React also allows me to extend my skills into native app
                    development, with the help of React Native. I have used React in projects like CodeCollab and
                    Outside, and React Native in the Open House apps.</Text>
                </div>
                <div>
                  <a href={"https://asp.net"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>ASP.NET Core</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>ASP.NET Core is my preferred framework for back end development. I prefer to use ASP.NET Core as I find CSharp to be a very intuitive language. ASP.NET Core is also extremely performant and has the most support for OAuth2.0.</Text>
                </div>
                <Text keyboard>Others:</Text>
                <List grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3
                }}
                      dataSource={[{ title: "NestJS", link: "https://nestjs.com" }, {
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
              </Space>
            </Panel>
            <Panel header="DevOps" key="DevOps">
              <Space direction={"vertical"} size={"large"}>
                <div>
                  <a href={"https://jetbrains.com/teamcity"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>Teamcity</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>While working at Outside, I integrated CI/CD into the workflow with Teamcity, to help the team be
                    able to test and deploy faster.</Text>
                </div>
                <div>
                  <a href={"https://k8s.io"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>Kubernetes</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>I have experience in working with Kubernetes, through setting up distributed databases on Google
                    Cloud Platform.</Text>
                </div>
                <div>
                  <a href={"https://dev.azure.com"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>Azure DevOps (Agile)</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>I have worked with Agile Software Development while developing the TTSH PACE app.</Text>
                </div>
                <Text keyboard>Others:</Text>
                <List grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3
                }}
                      dataSource={[{ title: "Rushstack", link: "https://rushstack.io" }, {
                        title: "Google Cloud Platform",
                        link: "https://cloud.google.com"
                      }, { title: "Azure", link: "https://azure.com" }, {
                        title: "Tencent Cloud",
                        link: "https://intl.cloud.tencent.com"
                      }, { title: "Github Actions", link: "https://github.com" }, {
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
              </Space>
            </Panel>
            <Panel header="Security" key="security">
              <Space direction={"vertical"} size={"large"}>
                <div>
                  <a href={"https://oauth.net"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>OAuth2.0 Standard</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>I have read up extensively on OAuth2.0 while working on APIs at Outside, and implemented a
                    Resource Owner Password Grant workflow. While working on Strife, my latest project, I have implemented OpenID Connect, as well as my own Identity Provider with OAuth and ASP.NET Core Identity</Text>
                </div>
                <Text keyboard>Others:</Text>
                <List grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3
                }}
                      dataSource={[{ title: "Let's Encrypt", link: "https://letsencrypt.org" }, {
                        title: "Cloudflare",
                        link: "https://clouflare.com"
                      }, { title: "Nmap", link: "https://nmap.org" }, {
                        title: "Bettercap",
                        link: "https://www.bettercap.org"
                      }, { title: "ASP.NET Core Identity", link: "https://asp.net" }]}
                      renderItem={item => (
                        <List.Item>
                          <a href={item.link} target={"_blank"}>
                            <Text>{item.title}</Text>
                          </a>
                        </List.Item>
                      )}
                />
              </Space>
            </Panel>
            <Panel header="Databases" key="databases">
              <Space direction={"vertical"} size={"large"}>
                <div>
                  <a href={"https://mysql.com"} target={"_blank"}><Title level={4} style={{
                    fontFamily: "Inter",
                    fontWeight: 500
                  }}>MySQL</Title></a>
                  <Text style={{
                    fontFamily: "Inter"
                  }}>During the Ethical Hacking course at SST Inc, we were taught how to use MySQL to build a chatroom.
                    I have also used MySQL as the database while implementing OAuth2.0 and built a
                    centralized logging system with it</Text>
                </div>
                <Text keyboard>Others:</Text>
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
                        title: "MongoDB",
                        link: "https://mongodb.com"
                      }, {
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

              </Space>
            </Panel>
          </Collapse>
        </Content>
        <Divider/>
        <Footer>
          <Text>2020 Qin Guan <a href={"https://github.com/qin-guan/portfolio"} target={"_blank"}>
            <Text code>View source code for this site</Text>
          </a></Text>
        </Footer>
      </Page>
    )
  }
}

export default IndexPage
