import react from 'react'
import styles from './YTvideos.module.css'
import { FaPlayCircle } from 'react-icons/fa';

const YTvideos = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>Canes (Official Video)</h2>
      </div>
      <div className={styles.videoContainer}>
        <div className={styles.innerContainer}>
        <div style={{ position: 'relative', width: '320px', height: '180px' }}>
        <iframe
          width="320"
          height="180"
          src="https://www.youtube.com/embed/RFXCWWVZcXM?si=1S5XWg7yNiY7KYiI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
        
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={() => {
            // You can add your custom play logic here
            // For example, you might want to play the video programmatically
            // using the YouTube iframe API.
            // Example: document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          }}
        >
          {/* <FaPlayCircle /> */}
      </div>
    </div>

        </div>
      </div>
    </>
  )
}

export default YTvideos
