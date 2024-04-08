import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "./Avatar";

export default function Hero() {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>
        <small>Download Resume</small>
      </strong>
    </Tooltip>
  );
  return (
    <div className="vh-100 hero-section-container">
      <Container className=" d-flex justify-content-center align-items-center  ">
        <Row>
          <Col xs={7}>
            <div className="left  text-center vh-100 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-section-wrapper">
                <p className="welcome-text"> Hi, I&apos;m</p>
                <motion.p
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
                  className="hero-text "
                >
                  LANRE-ABASS AKEEM
                </motion.p>
                <span className="description hero-sub-text">
                  I develop sexy webpages
                  <br />
                  <small>.....I play with three js too ;)</small>
                </span>
                <ul className="links text-center mt-2 ">
                  <div className="  connect-links d-flex justify-content-center align-items-center gap-3 text-center">
                    <li className="social-icon ">
                      <a
                        rel="noreferrer"
                        className=""
                        href="https://github.com/abassakeem"
                        target="_blank"
                      >
                        {" "}
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        rel="noreferrer"
                        className=""
                        href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/"
                        target="_blank"
                      >
                        <AiFillLinkedin />
                      </a>
                    </li>

                    <li className="social-icon">
                      <a
                        rel="noreferrer"
                        href="mailto:lanreabassab1@gmail.com"
                        target="_blank"
                      >
                        <AiOutlineMail />
                      </a>
                    </li>
                    <li className="social-icon">
                      <OverlayTrigger placement="top" overlay={tooltip}>
                        <a href="https://drive.google.com/drive/u/0/folders/1B8TVbnRmBd5oOcViu580ce4ZSN3wOKPp">
                          <AiOutlineDownload />
                        </a>
                      </OverlayTrigger>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={5} className="m-0 p-0">
            <div className="right">
              <Avatar />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
