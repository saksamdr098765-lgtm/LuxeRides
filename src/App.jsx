import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home/Home'
import Navbar from './Components/Navbar'
import { Routes,Route, Navigate } from 'react-router-dom'
import Fleet from './Fleet'
import About from './About'
import Contact from './Conatct'

function App() {


  return (
<>
<Navbar></Navbar>
<Routes>
<Route path='/' element={<Home></Home>}/>
<Route path='/fleet' element={<Fleet></Fleet>}/>
<Route path='/about' element={<About></About>}/>
<Route path='/contact' element={<Contact></Contact>}/>
<Route path='*' element={<Navigate to="/" replace></Navigate>}/>

</Routes>

</>
  )
}

export default App
