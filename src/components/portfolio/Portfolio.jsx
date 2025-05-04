import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu'

const Portfolio = () => {
  const[items, setItems] = useState(Menu);
  const filterItem = (categoryItem)=>{
    const updatedItems = Menu.filter((curEle)=>{
      return curEle.category === categoryItem;
    });
    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={()=>setItems(Menu)} >All</span>
        <span className="work_item" onClick={()=>filterItem('Development')}>Development</span>
        <span className="work_item" onClick={()=>filterItem('UI/UX')}>UI/UX</span>
        <span className="work_item" onClick={()=>filterItem('Model')}>Model</span>

      </div>

      <div className="work_container grid">
        {items.map((ele)=>{
          const{id, image, title, category, link} = ele;
          return(
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                <span className="icon-link"></span>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio