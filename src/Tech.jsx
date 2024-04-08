import React from 'react'

import reactbootstrap from "./../assets/tech/reactbootstrap.svg";
import css from "./../assets/tech/css.png";

import figma from "./../assets/tech/figma.png";
import git from "./../assets/tech/git.png";
import html from "./../assets/tech/html.png";
import javascript from "./../assets/tech/javascript.png";

import nodejs from "./../assets/tech/nodejs.png";
import reactjs from "./../assets/tech/reactjs.png";

import illustrator from "./../assets/tech/illustrator.svg";
import tailwind from "./../assets/tech/tailwind.png";
import typescript from "./../assets/tech/typescript.png";
import threejs from "./../assets/tech/threejs.svg";



export default function Tech() {

    

    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
    
        {
          name: "JavaScript",
          icon: javascript,
        },
    
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
    
        {
          name: "React Bootstrap",
          icon: reactbootstrap,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "Adobe illustrator",
          icon: illustrator,
        },
    
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },
      ];
  return (
    <div>
      <div className=" mt-5  header-tech text-center section-header">
        <h4>Tech</h4>
        <small className="text-secondary">
          Some of the technologies I have experience with include
        </small>
      </div>
      <div className="mt-2 text-center  d-flex  flex- justify-content-center align-items-center gap-3 ">
        {technologies.map((technology) => (
          <div className="tech-img-container" key={technology.name}>
            <img src={technology.icon} className="tech-img" />
            <p className="tech-name d-none d-sm-block">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
