import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import NoPage from './Component/NoPage'


function App() {
  
  return (<>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />\
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
