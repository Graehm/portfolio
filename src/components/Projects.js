import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { BrowserRouter as Router, Link } from "react-router-dom";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Fallmart",
      description: "An e commerce MERN Stack app",
      imgUrl: projImg3,
      link: 'https://fallmart.graehm.me/'
    },
    {
      title: "BimmerBits",
      description: "on online automotive parts supplier",
      imgUrl: projImg2,
      link: 'https://bimmerbits.graehm.me/'
    },
    {
      title: "Tic Tac Toe",
      description: "OOP structure",
      imgUrl: projImg1,
      link: 'https://exquisite-nougat-5d8b25.netlify.app/'
    }
  ];

  return (
    <Router>
      <section className="project" id="projects">
        <Container>
          <Row >
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""} >
                  <h2>Projects</h2>
                  <p>Preview and view my deployed projects below</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"></Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <Link key={index} to={project.link}>
                                  <ProjectCard {...project} />
                                </Link>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt=''></img>
      </section>
    </Router>
  )
}