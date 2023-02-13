import React from 'react'
import {AnimatePresence} from "framer-motion"
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'

import {Routes, Route} from "react-router-dom"

function AnimatedRoutes() {
  return (
    <AnimatePresence>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='projects' element={<ProjectsPage/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes