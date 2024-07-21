import React from 'react'
import styles from './DisplayAlbum.module.css'

function DisplayAlbum() {
  return (
    <diV className={styles.container}>
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
          <h2 className={styles.title}>Destory Of the World (Out Now)</h2>
          <h5 className={styles.albumName}>Destory Of the World</h5>
        </div>
      </div>
        <ul className={styles.btn}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
    </diV>
  )
}

export default DisplayAlbum