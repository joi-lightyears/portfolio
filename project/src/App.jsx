import React from 'react'
import {BrowserRouter} from "react-router-dom"
import AnimatedRoutes from './animatedRoutes';
import './style.scss';

function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes/>
    </BrowserRouter>
  )
}

export default App