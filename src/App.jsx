import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'

const App = () => {
  return (
    <>
    <Sidebar />
    <main className="main">
      <div className="section-wrapper"> 
      <Home />
      </div>
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
    </>
  )
}

export default App
