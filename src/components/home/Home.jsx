import React from 'react'
import './home.css'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Me from '../../assets/logo.png'
import Pukar from '../../assets/pukar.jpg'
import { useState, useRef, useEffect } from 'react';


const Home = () => {
  const images = [Me, Pukar];
  const [current, setCurrent] = useState(0);
  const profileRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (profileRef.current) {
        profileRef.current.style.transition = 'transform 0.25s ease';
        profileRef.current.style.transform = 'rotateY(90deg)';
        
        setTimeout(() => {
          setCurrent(prev => (prev + 1) % images.length);
          profileRef.current.style.transform = 'rotateY(0deg)';
        }, 250);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="home container"
      initial={{ y: '100vh', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="intro">
      <div className="img_wrapper">
        <img src={images[current]} alt="Avatar of Pukar Hirachan" className="home_img" ref={profileRef} />
      </div>
        <p>Hi, It's Me</p>
        <h1 className="home_name">Pukar Hirachan</h1>
        <span className="home_education">
          I'm currently pursuing a BCS.Hons at IIMS College with the goal of
          becoming a skilled Front End Developer. My dream is not only to be a
          good son, but also to grow into the best developer I can be.
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Connect With Me
        </a>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
