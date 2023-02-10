import React from 'react'
import {BrowserRouter} from "react-router-dom"
import AnimatedRoutes from './animatedRoutes';
import './assets/style/main.scss';

function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes/>
    </BrowserRouter>
  )
}

export default App