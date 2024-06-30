import React from 'react'
import styles from './Home.module.css'; 

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <p>img</p>
      </div>
      <div>
        <h2>Ryan Mitchell - I AM DEATH. DESTROYER OF WORLDS</h2>
        <p>Choose your preferred music service</p>
        <div className={styles.containerBtn}>
        <button>
          Pre-Save
        </button>
        <button>
          Pre-Add
        </button>
        <button>
          Pre-Save
        </button>
        <button>
          Pre-Save
        </button>
        </div>
      </div>
    </div>
  )
}

export default Home