import styles from './Tickets.module.css';

const TourDateEvent = (props) => {
  return (
    <>
    <div className={styles.banner}>
      <p className={styles.month}>Month</p>
      <p className={styles.date}>Date</p>
      <p className={styles.year}>Year</p>
    </div>
    <div className={styles.info}>
      <p className={styles.title}>Title</p>
      <p className={styles.location}>Location</p>
      <button className={styles.rsvp}>RSVP</button>
  </div>
  </>
  )
}

export default TourDateEvent;