import React from 'react'
import './ActivityCard.css'
function ActivityCard(props) {
  return (
    <div className='ActivityCard'>
      <span className='DateSpan'>
        <p>{props.date}</p>
        <p>Sep</p>
      </span>
      <p className='Activitytext'>{props.title}</p>
    </div>
  )
}

export default ActivityCard
