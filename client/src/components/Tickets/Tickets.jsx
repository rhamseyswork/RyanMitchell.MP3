import React from 'react'
import sytles from './Tickets.module.css';

const Tickets = () => {
  return (
    <div className={sytles.conatiner}>
      <div className={sytles.banner}>
        <p className={sytles.month}>Month</p>
        <p className={sytles.date}>Date</p>
        <p className={sytles.year}>Year</p>
      </div>
      <div className={sytles.info}>
        <p className={sytles.title}>Title</p>
        <p className={sytles.location}>Location</p>
        <button className={sytles.rsvp}>RSVP</button>
      </div>
    </div>
  )
}

export default Tickets