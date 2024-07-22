import React from 'react'
import sytles from './Tickets.module.css'
import TourDateEvent from './TourDateEvent.jsx'
import Loader from '../Loader/Loader'
import Message from '../Message/Message.jsx'
import { useGetTourDatesQuery } from '../../slices/tourDatesApiSlice.js'

const Tickets = () => {
  const { data, isLoading, error } = useGetTourDatesQuery()
  return (
    <>
      {isLoading ? (<Loader />) 
      : error ? (<Message variant={'danger'}>{error?.data?.message || error.error}</Message>) 
      : (<div className={sytles.conatiner}>{
        data.tourDates.map(tourDateEvent => (
          <TourDateEvent key={tourDateEvent._id} tourDate={tourDateEvent} style={{display: 'content'}}/>
        ))}</div>)}
    </>
  )
}

export default Tickets
