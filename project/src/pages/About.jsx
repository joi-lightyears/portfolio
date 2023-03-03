import React from 'react'
import TextSpan from '../TextSpan'
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";

// import Fade from 'react-awesome-reveal'

function About() {
  const heading = 'About me'

  

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
    const fadeInFromRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
      `;
  return (
    <section className='abt-container'>
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;about&gt;</div>
      </Reveal>
      <div className="content">
        <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
          <div className="fake-code">&lt;h2&gt;</div>
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
          <div className="fake-code">&lt;/h2&gt;</div>
        </Reveal>

        <div className="about-text">
          <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
            <div className="fake-code">&lt;p&gt;</div>
          </Reveal>
          {/* <Reveal className='reveal-section' keyframes={bottomFadeIn}> */}
            <p>
            I'm a third-year IT major who's passionate about learning frontend development. I'm a highly organized person who pays great attention to detail, and I believe these qualities are essential to building great software. When I'm not coding, you can usually find me exploring the latest web design trends and experimenting with new tools and technologies to keep my skills up to date.
            </p>
          {/* </Reveal> */}
          <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
            <div className="fake-code">&lt;/p&gt;</div>
          </Reveal>
        </div>
      </div>

      <div className="skills">
        <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
          <div className="fake-code">&lt;skills&gt;</div>
        </Reveal>
        <Reveal className='reveal-section' keyframes={fadeInFromRight}>
            <div className="banner-texts">
              <div className="">
                HTML - <span>Node JS - </span>CSS - <span>ReactJS - </span>JSON - <span>TypeScript - </span>npm - <span>Git - </span>jQuery - <span>Sass - </span>React Native - <span>Redux - </span>
                HTML - <span>Node JS - </span>CSS - <span>ReactJS - </span>JSON - <span>TypeScript - </span>npm - <span>Git - </span>jQuery - <span>Sass - </span>React Native - <span>Redux - </span>
              </div>
              <div className="">
                HTML - <span>Node JS - </span>CSS - <span>ReactJS - </span>JSON - <span>TypeScript - </span>npm - <span>Git - </span>jQuery - <span>Sass - </span>React Native - <span>Redux - </span>
                HTML - <span>Node JS - </span>CSS - <span>ReactJS - </span>JSON - <span>TypeScript - </span>npm - <span>Git - </span>jQuery - <span>Sass - </span>React Native - <span>Redux - </span>
              </div>
            </div>
        </Reveal>
        <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
          <div className="fake-code">&lt;/skills&gt;</div>
        </Reveal>
      </div>
      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;/about&gt;</div>
      </Reveal>
    </section>
  )
}

export default About