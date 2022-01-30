import React, {useState} from 'react'

export default function Animal(props) {

  return (
    <div className="animal-container">
      <div className="animal-name">{props.name}</div>
      <div className="animal-info">
        <div className="section-title">Type: <span className="section-data">{props.type}</span></div>
        <div className="section-title">Diet: <span className="section-data">{props.diet}</span></div>
        <div className="section-title">Location: <span className="section-data">{props.range}</span></div>
      </div>
      <img className="animal-pic" src={props.image} alt="animal"/>
    </div>
  )
};