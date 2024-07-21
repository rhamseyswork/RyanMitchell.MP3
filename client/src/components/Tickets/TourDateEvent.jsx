
const TourDateEvent = (props) => {
  return (
    <>
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
  </>
  )
}

export default TourDateEvent;