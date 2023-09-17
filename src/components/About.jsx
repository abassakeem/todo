import React from 'react'
import { motion } from "framer-motion";

import { AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div className='vh-100 bg-primary d-flex justify-content-center align-items-center'>

            <Container >
                <div >
                    <h1 className='text-center'>About</h1>
                    <Row>

                        <Row className='d-flex flex-md-row flex-column-reverse'>

                            <Col md={6} className='d-flex justify-content-center align-items-center'>

                                abass
                            </Col>


                            <Col md={6} className='text-center'>




                                <motion.span className="about-description text-center"
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
                                >"I hold a degree in computer science from Babcock University, with my primary focus being on frontend development using React. However, I also have a strong fascination with Node.js, Three.js, and the intricate world of cloud engineering. I excel in collaborating closely with clients to construct solutions that are not only efficient and scalable but also deeply attuned to user needs. I'm enthusiastic about the prospect of partnering with you to transform your ideas into tangible outcomes!"</motion.span>
                                <ul className="unordered d-flex flex-column text-center">
                                    <li>
                                        <h5>
                                            Front-end
                                        </h5>
                                        <motion.div
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
                                            className="tech-logo tech-logo1">
                                            <BiLogoReact />
                                        </motion.div>
                                        <p className="about-text"><small>Proficient in front-end technologies including React.js, HTML, CSS, and Bootstrap, complemented by strong skills in JavaScript.</small></p>

                                    </li>
                                    <li>
                                        <h5>
                                            Back-end
                                        </h5>
                                        <motion.div
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
                                            className="tech-logo2 tech-logo">
                                            <FaNodeJs />
                                        </motion.div>
                                        <p className="about-text"><small>Well-versed in back-end development with experience in Node.js, PHP, and database optimization.</small></p>

                                    </li>
                                    <li>
                                        <h5>
                                            Version Control
                                        </h5>
                                        <motion.div
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
                                            className="tech-logo tech-logo3">
                                            <AiFillGithub />
                                        </motion.div>
                                        <p className="about-text"><small>I have a strong background in using Git and GitHub for continuous integration and deployment of software.</small></p>


                                    </li>

                                </ul>

                            </Col>

                        </Row>


                    </Row>
                </div>
            </Container>


        </div>
    )
}
