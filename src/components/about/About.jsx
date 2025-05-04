import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
import Skills from './Skills'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
      <img src={Image} alt="" className="about_img" />

      <div className="about_data grid">
        <div className="about_info">
          <p className="about_description">I am Pukar Hirachan, Front End Developer
            from Kathmandu, Nepal. I have good experience in web-designing, building and customization.
          </p>
          <a href="/CV.pdf" className="btn" download>Download CV</a>

        </div>

        <div className="about_skills grid">

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">Development</h3>
              <span className="skills_number ">70%</span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage development"></span>
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">UI/UX Design</h3>
              <span className="skills_number">60%</span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage ui_design"></span>
            </div>
          </div><div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">Model Prediction</h3>
              <span className="skills_number">20%</span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage prediction"></span>
            </div>
          </div>

        </div>
      </div>
     
      </div>
        <Skills />
    </section>
  )
}

export default About