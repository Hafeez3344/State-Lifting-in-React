import React from 'react'
import "./Card.css";

const Card = (props) => {
  return (
    <div>
    <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
    <p>Name State variable ki value inside Card: {props.name}</p>
    </div>
  )
}

export default Card