import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "./../assets/la-dark.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import pastquest from "./../assets/projects/pastquest.png";
import apple from "./../assets/projects/apple.png";
import port from "./../assets/projects/portfolio.png";
import budget from "./../assets/projects/budget.png";
import hangman from "./../assets/projects/hangman.png";
import bupower from "./../assets/projects/bupower.png";
import texttospeech from "./../assets/projects/texttospeech.png";
import todo from "./../assets/projects/todo.png";
import guess from "./../assets/projects/guess.png";
import wwtbam from "./../assets/projects/wwtbam.png";
import getlinked from "./../assets/projects/getlinked.png";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
export default function Projects() {
  const projects = [
    {
      index: 1,
      title: "PastQuest",
      url: "https://pastquestabass.netlify.app",
      image: pastquest,
      git: "https://github.com/abassakeem/PastQuest",
      description:
        "I built a quiz app with randomized questions on each restart, providing a dynamic experience. After finishing the quiz, users receive a detailed score breakdown and corrections to review their performance and learn from their mistakes.",
      tech: ["#React", "#CSS", "#Bootstrap"],
    },
    {
      index: 9,
      title: "Apple 3d Website Clone",
      url: "https://appleabass.netlify.app",
      image: apple,
      git: "https://github.com/apple-landing-page",
      description:
        "A meticulously crafted clone of Apple's  website. Leveraging advanced technologies such as 3D animation, React, WebGL, and Framer Motion, I meticulously replicated Apple's web presence with finesse and precision. .",
      tech: ["#React", "#CSS", "#React-Three-Fiber", "#Bootstrap"],
    },

    {
      index: 4,
      title: "GetLinked",
      url: "https://www.getlinkedd.netlify.app",
      image: getlinked,
      git: "https://github.com/abassakeem/getlinked",
      description:
        "I designed a landing page for 'getlink' which utilizes an API to retrieve the necessary data required for the registration process.",
      tech: ["#React", "#CSS", "#Bootstrap", "#Api"],
    },
    // {
    //   index: 5,
    //   title: "My Portfolio",
    //   url: "https://wuwaabassportfolio.netlify.app/",
    //   image: port,
    //   git: "https://github.com/abassakeem/wuwaabassportfolio",
    //   description:
    //     "I designed a portfolio website inspired by Wuwa Sensei, incorporating Three.js for 3D elements, animations, and Framer Motion to create an immersive and visually captivating experience.",
    //   tech: ["#React", "#CSS", "#TailwindCSS", "#Blender"],
    // },

    {
      index: 3,
      title: "A budget App",
      url: "https://mybudgetappabass.netlify.app",
      image: budget,
      git: "https://github.com/abassakeem/budget-tracker",
      description:
        "I developed a budget management application with an integrated pie chart, enabling users to calculate their budget and expenses easily. The intuitive visualization allows for a quick assessment of whether they are within or exceeding their budget.",
      tech: ["#React", "#CSS", "#Bootstrap"],
    },

    {
      index: 5,
      title: "Hangman Game",
      url: "https://hangmanabass.netlify.app",
      image: hangman,
      git: "https://github.com/abassakeem/hangman",
      description:
        "My Hangman game project, where React and TypeScript seamlessly come together to create an interactive word-guessing game. Players guess letters to uncover a hidden word while enjoying the suspense of avoiding incorrect guesses. This project highlights my skills in React development and the robustness of TypeScript.",
      tech: ["#React", "#Typescript", "#CSS", "#Bootstrap"],
    },
    {
      index: 9,
      title: "BU-POWER",
      url: "https://github.com/abassakeem/BabcockPower",
      image: bupower,
      git: "https://github.com/abassakeem/BabcockPower",
      description:
        "My Hangman game project, where React and TypeScript seamlessly come together to create an interactive word-guessing game. Players guess letters to uncover a hidden word while enjoying the suspense of avoiding incorrect guesses. This project highlights my skills in React development and the robustness of TypeScript.",
      tech: ["#HTML", "#CSS", "#JavaScript", "PHP", "#Bootstrap"],
    },
    {
      index: 8,
      title: "Text to Speech Converter",
      url: "https://text2speechabass.netlify.app",
      image: texttospeech,
      git: "https://github.com/abassakeem/text-to-speech",
      description:
        "I created a text-to-speech tool by harnessing the React-Speech API. This tool empowers users to input text, select from a variety of voices, and then seamlessly convert it into spoken language.",
      tech: ["#React", "#API", "#CSS", "#Bootstrap"],
    },
    {
      index: 6,
      title: "To-Do List",
      url: "/https://todoabass.netlify.app",
      image: todo,
      git: "https://github.com/abassakeem/todo-app",
      description:
        "I created a user-friendly To-Do List app using React, enabling easy task management. It offers task creation, completion, and removal, enhancing productivity and organization.",
      tech: ["#React", "#CSS", "#Bootstrap"],
    },
    {
      index: 7,
      title: "Higher Or Lower Game",
      url: "/https://higherorlowerabass.netlify.app",
      image: guess,
      git: "https://github.com/abassakeem/GuessTheNumber",
      description:
        "I developed a number guessing game where users have 5 attempts to guess a randomly generated number between 1 and 100. Success occurs if they guess correctly within the allotted tries, while failure results from an incorrect guess.",
      tech: ["#React", "#CSS", "#Bootstrap"],
    },
    {
      index: 2,
      title: "Who Wants To be A Millionaire",
      url: "/https://whowantstobeamillionaireabass.netlify.app",
      image: wwtbam,
      git: "https://github.com/abassakeem/who-wants-to-be-a-millionaire",
      description:
        "I designed and built a fully functional Who Wants to Be a Millionaire game clone using React, featuring authentic sound effects to enhance the user experience.",
      tech: ["#React", "#CSS", "#Bootstrap"],
    },
  ];
  const onNextClick = () => {
    setIndex((index + 1) % projects.length);
  };

  const onPrevClick = () => {
    setIndex((index - 1 + projects.length) % projects.length);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="projects-section vh-100  d-flex justify-content-center align-items-center">
      <Container>
        <div>
          <h1 className="text-center section-header">Projects.</h1>
          <Row>
            <Carousel>
              {projects.map((project, index) => (
                <Carousel.Item key={index} className="p-5">
                  <Row className="d-flex flex-md-row flex-column-reverse">
                    <Col
                      md={6}
                      className="d-flex project-words justify-content-center align-items-center"
                    >
                      <div className="project-left text-start">
                        <Carousel.Caption>
                          <div className="title text-start">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="description text-start">
                            <p>{project.description}</p>
                          </div>
                          <div className="git-view social-icon">
                            <a rel="noreferrer" href={project.git} target="_blank">
                              <AiFillGithub />
                            </a>
                            <a rel ="noreferrer" href={project.url} target="_blank">
                              <AiFillEye />
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="project-right">
                        <div className="project-images-container">
                          <div className="project-img d-flex gap-5 curved-tv">
                            <Image
                              src={project.image}
                              alt="project-img"
                              fluid
                            />
                          </div>
                          <span className="text-muted project-tech-tags">
                            {project.tech}{" "}
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </div>
      </Container>
    </div>
  );
}
