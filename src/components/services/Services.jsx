import React from 'react'
import './services.css'
import Image1 from "../../assets/ui.jpg"
import Image2 from "../../assets/develop.png"
import Image3 from "../../assets/model.png"

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description: "Hello, I am a UI designer from Nepal aiming to become a front-end developer."
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description: "Passionate about building responsive and interactive websites using modern tech."
  },
  {
    id: 3,
    image: Image3,
    title: "Model Prediction",
    description: "I’m exploring machine learning models and integrating simple predictions in web apps."
  }
]

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => (
          <div className="services_card" key={id}>
            <img src={image} alt={title} className="service_img" />
            <h3 className="service_title">{title}</h3>
            <p className="service_description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
