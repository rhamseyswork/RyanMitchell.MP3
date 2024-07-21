import React from 'react'
import styles from './DisplayAlbum.module.css'

function DisplayAlbum() {
  return (
    <div>
      <h2>Destory Of the World (Out Now)</h2>
      <div className={styles.container}>
        <img
          className={styles.img}
          src="/Hero.webp"
          alt="Hero Image"
          width="200px"
          height="200px"
          style={{ objectFit: 'cover' }}
          />
          <h5>Destory Of the World</h5>
          <div className={styles}>
            <p>Stream Now On</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default DisplayAlbum