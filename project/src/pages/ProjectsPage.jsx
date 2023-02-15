import React from 'react'
import { projects } from '../data/data'
import TextSpan from '../TextSpan'
import Projects from '../components/Projects'
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";

function ProjectsPage() {
  const heading = 'Projects'

  const bottomFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
  `;
  const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
      opacity: 1;
      transform: translateX(-20px);
  }
    `;
  return (
    <section className="projects-container">
      <div className="content">
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;projects&gt;</div>
        <div className="fake-code">&lt;h3&gt;</div>
      </Reveal>
      <Reveal className='reveal-section' keyframes={bottomFadeIn}>
        <h1>
              {heading.split('').map((letter,index)=>{
                return(
                  <TextSpan key={index}>
                      {letter === " "? '\u00A0' : letter}
                  </TextSpan>
                )
              })}
        </h1>
      </Reveal>
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;/h3&gt;</div>
        <div className="fake-code">&lt;p&gt;</div>
      </Reveal>
      <Reveal className='reveal-section' keyframes={bottomFadeIn}>
        <div className="projects-desc">
          <p>
              Welcome to my coding project showcase! In this showcase, 
                you'll find a collection of my most recent and noteworthy projects, 
                each designed to showcase my technical abilities, creativity, and 
                problem-solving skills. From web applications to mobile apps, I'm proud 
                to present my portfolio of work that reflects my passion for programming 
                and my commitment to delivering high-quality solutions. So, please take a look 
                around and feel free to reach out to me if you have any questions or feedback.
          </p>
        </div>
        </Reveal>
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;/p&gt;</div>
      </Reveal>
      </div>
      <div className="showcase-section">
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;showcase style="overflow-y: scroll;"&gt;</div>
      </Reveal>
      <Reveal className='reveal-section' keyframes={bottomFadeIn}>
        <div className="projects-wrapper">
          {projects.map((project,index)=>{
            return <Projects {...project} key={index}/>
          })}
        </div>
      </Reveal>
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;/showcase&gt;</div>
        <div className="fake-code">&lt;/projects&gt;</div>
      </Reveal>
      </div>
    </section>
  )
}

export default ProjectsPage