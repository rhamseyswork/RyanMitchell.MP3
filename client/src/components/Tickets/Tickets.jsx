import React from 'react';
import styles from './Tickets.module.css';
import TourDateEvent from './TourDateEvent.jsx';
import Loader from '../Loader/Loader';
import Message from '../Message/Message.jsx';
import { useGetTourDatesQuery } from '../../slices/tourDatesApiSlice.js';

const Tickets = () => {
  const { data, isLoading, error } = useGetTourDatesQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className={styles.ticketContainer}>
          {data.tourDates.map((tourDateEvent, index) => (
            <TourDateEvent
              key={tourDateEvent._id}
              tourDate={tourDateEvent}
              style={{
                gridRow: index % 2 === 0 ? '1' : '2', /* Alternate rows */
                gridColumn: index % 2 === 0 ? '1' : '2' /* Alternate columns */
              }}
              />
          ))}
        </div>
      )}
    </>
  );
};

export default Tickets;
