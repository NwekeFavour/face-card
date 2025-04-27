import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route, Link } from 'react-router-dom'

import {Button} from "./components/ui/button"
import Home from './pages/home'
import Header from './components/header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
