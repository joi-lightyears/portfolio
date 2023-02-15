import {React, useState, useRef} from 'react'
import TextSpan from '../TextSpan'
import emailjs from '@emailjs/browser'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";

function Contact() {
  const heading = 'Contact me'

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



  const [validInfo, setValidInfo] = useState({
    name: '',
    message: '',
    email: '',
    subject: '',
  })
  const form = useRef(null)
const handleSubmit = (e)=>{
  e.preventDefault()
  toast('Wait a second...')
  emailjs.sendForm(
    'service_cac7mfv',
    'template_nbtty4y',
    form.current,
    'iPHoxauCEddrlXQNw'
  )
  .then(
    (result)=>{
      toast.success('Your email has been sent, thankyou ^^')
      setValidInfo({
        name: '',
        message: '',
        email: '',
        subject: '',
      })
    },(error)=>{
      toast.error('Something went wrong, please try again')
    }
  )
}
const handleChange =(e)=>{
  const {name, value} = e.target
  setValidInfo((preValue)=>{
    return {...preValue, [name]: value}
  })
}
  return (
    <section className="contact-container">
      <div><Toaster  position="bottom-right" reverseOrder={false} 
      toastOptions={{
        className: 'toast', 
        duration: 5000,
        style: {
          background: '#2a2a2a',
          color: '#dadada',
        },
      }}/></div>

      <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
        <div className="fake-code">&lt;contact&gt;</div>
      </Reveal>
      <div className="content">
        <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
          <div className="fake-code">&lt;h4&gt;</div>
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
          <div className="fake-code">&lt;/h4&gt;</div>
        </Reveal>

        <div className="form-section">
          <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
            <div className="fake-code">&lt;form&gt;</div>
          </Reveal>
          <form action="" className="contact-form" onSubmit={handleSubmit} ref={form}>
                <div className="input-section">
                  <Reveal className='reveal-section' keyframes={bottomFadeIn}>
                    <div className="row1">
                      <input type="text"
                        required
                        name='name'
                        placeholder='Name'
                        value={validInfo.name}
                        autoComplete='false'
                        onChange={handleChange}
                        className='name-input'
                      />
                      <input type="email"
                        required
                        name='email'
                        placeholder='Email'
                        value={validInfo.email}
                        autoComplete='false'
                        onChange={handleChange}
                        className='email-input'
                      />
                    </div>

                    <input type="text"
                      required
                      name='subject'
                      placeholder='Subject'
                      value={validInfo.subject}
                      autoComplete='false'
                      onChange={handleChange}
                      className='row2'
                    />
                    <textarea placeholder='Message'
                      required
                      autoComplete='false'
                      name="message"
                      type='text' value={validInfo.message}
                      onChange={handleChange}
                      className='row3'
                      >
                    </textarea>
                </Reveal>

                </div>
                <Reveal className='reveal-section' keyframes={bottomFadeIn}>
                  <div className="submit-btn">
                    <input value='Send' type="submit" />
                  </div>
                </Reveal>
          </form>
          <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
            <div className="fake-code">&lt;/form&gt;</div>
          </Reveal>
        </div>
        
      </div>
        <div className="google-map">

        </div>
        {/* <footer className="footer">
          <p>Made by Nguyen Thanh Dat 2023</p>
        </footer> */}
        <Reveal className='reveal-section' keyframes={fadeInFromLeft}>
          <div className="fake-code">&lt;/contact&gt;</div>
          <div className="fake-code">&lt;Made by Nguyen Thanh Dat 2023&gt;</div>
        </Reveal>
    </section>
  )
}

export default Contact