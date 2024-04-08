import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCodepen,
  faSquareGithub,
  faGithub,
  faBootstrap,
  faFigma,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  
  return (
    <div className=" about-section vh-100  d-flex justify-content-center align-items-center">
      <Container>
        <div>
          <h1 className="text-center section-header">About.</h1>
          <Row>
            <Row className="d-flex flex-md-row flex-column-reverse">
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="stage-cube-cont ">
                  <div className="cubespinner ">
                    <div className="face face1  ">
                      <FontAwesomeIcon icon={faReact} color="#61dafb" />
                    </div>
                    <div className="face face2 main-face-2">
                      <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className="face face3">
                      <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                    </div>
                    <div className="face face4">
                      <FontAwesomeIcon icon={faBootstrap} color="#F8F9FA" />
                    </div>
                    <div className="face face5">
                      <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
                    </div>
                    <div className="face face6">
                      <FontAwesomeIcon icon={faGitAlt} color="#171515 " />
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6} className="text-center">
                <motion.span
                  className="about-description  text-center"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                >
                  <i className=" text-justify">
                    "I am a computer science graduate from Babcock University,
                    with my primary focus being on frontend development using
                    React and Three.js. However, I also have a strong
                    fascination with Node.js, and the intricate world of cloud
                    engineering."
                  </i>
                </motion.span>
                <ul className="unordered d-flex flex-row mt-3 text-center">
                  <li className="">
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.9,
                      }}
                      className="tech-logo tech-logo1"
                    >
                      <BiLogoReact />
                    </motion.span>

                    <p className="about-text text-secondary">
                      <small>
                        Proficient in front-end technologies including React.js,
                        HTML, CSS, and Bootstrap, complemented by strong skills
                        in JavaScript.
                      </small>
                    </p>
                  </li>
                  <li>
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 1.15,
                      }}
                      className="tech-logo2 tech-logo"
                    >
                      <FaNodeJs />
                    </motion.span>

                    <p className="about-text text-secondary">
                      <small>
                        Well-versed in back-end development with experience in
                        Node.js, PHP, and database optimization.
                      </small>
                    </p>
                  </li>
                  <li>
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 1,
                      }}
                      className="tech-logo tech-logo3"
                    >
                      <AiFillGithub />
                    </motion.span>

                    <p className="about-text text-secondary">
                      <small>
                        I have a strong background in using Git and GitHub for
                        continuous integration and deployment of software.
                      </small>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
         
          </Row>
        </div>
      </Container>
    </div>
  );
}
