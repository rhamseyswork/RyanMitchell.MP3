import React from 'react'
import styles from './DisplayAlbum.module.css'

function DisplayAlbum() {
  return (
    <div>
    <h3 className={styles.title}>Lastest Release</h3>
    <div className={styles.container}>
      <div className={styles.albumContainer}>
        <img
          className={styles.img}
          src="/Hero.webp"
          alt="Hero Image"
          width="150px"
          height="150px"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.text}>
          <p className={styles.releaseDate}>I AM DEATH. DESTROYER OF WORLDS </p>
          <p className={styles.message}>RYAN MITCHEL</p>
        </div>
      </div>
        <ul className={styles.btn}>
          <li>1 |&nbsp;</li>
          <li>2 |&nbsp;</li>
          <li>3</li>
        </ul>
    </div>
    </div>
  )
}

export default DisplayAlbum