import React from 'react'
import './resume.css'
import Data from './Data'
import Card from './Card'

const Resume = () => {
  return (
   <section className="resume container section" id="resume">
    <h2 className="section_title">Education</h2>

    <div className="resume_container grid">

      <div className="timeline grid">
        {
          Data.map((val,id)=>{
            if(val.category==='education'){
              return(
                <Card key={id} icon={val.icon} title={val.title} 
                year={val.year} institute={val.institute} address={val.address} />
              )
            }
          })
        }
      </div>

  

    </div>
   </section>
    
  )
}

export default Resume