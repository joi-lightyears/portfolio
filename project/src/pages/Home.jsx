import React from 'react'
import Header from '../components/Header'
import About from './About'
import ProjectsPage from './ProjectsPage'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Header/>
      <About/>
      <ProjectsPage/>
      <Contact/>
    </>
  )
}

export default Home