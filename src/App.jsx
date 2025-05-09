import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route, Link } from 'react-router-dom'
import {Button} from "./components/ui/button"
import Home from './pages/home'
import Templates from './pages/templates'
import Login from './pages/login'
import * as motion from "motion/react-client"
import { useScroll } from 'motion/react'


function App() {
    const { scrollYProgress } = useScroll()

  return (
    <>            
      <motion.div
          id="scroll-indicator"
          style={{
              scaleX: scrollYProgress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              originX: 0,
              backgroundColor: "#2C4BFF",
          }}
      />    
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/resume-templates"} element={<Templates/>}/>
        <Route path={"/dashboard/app/account/login"} element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
