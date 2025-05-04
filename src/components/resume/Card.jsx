import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <span className={props.icon}></span>
        <span className="timeline_date">{props.year}</span>
        <h3 className="timeline_title">{props.title}</h3>
        <p className="timeline_institute">{props.institute}</p>
        <p className="timeline_desc">{props.desc}</p>
        <p className="timeline_address">{props.address}</p>
    </div>
  )
}

export default Card
