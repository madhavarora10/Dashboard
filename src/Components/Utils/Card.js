import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
   {props.img && 
      <img className='icon' src={require(`../../images/${props.img}.png`)} alt=''></img>
   }
      <div className='textArea'>
        <p>{props.subHeading}</p>
      <div className='bottomText'>
      <h3 className='prices'>{props.price}</h3>
      <span className={props.loss?'spanGreen':'spanRed'}>{props.percentage}</span>
      </div>
      </div>
    </div>
  )
}

export default Card
