import styles from './Tickets.module.css';

const TourDateEvent = (props) => {
  const { month, date, year, title, location } = props;

  return (
    <div className={styles.event}>
      <div className={styles.banner}>
        <p className={styles.month}>{month}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.year}>{year}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>{location}</p>
        <button className={styles.rsvp}>RSVP</button>
      </div>
    </div>
  );
};

export default TourDateEvent;
