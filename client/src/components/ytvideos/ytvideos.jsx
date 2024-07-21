import react from "react";
import styles from "./YTvideos.module.css";

const YTvideos=()=>{
    return(
        <>
            <div className={styles.title}>
                <h2>Canes & Ruin My Life (Official Video)</h2>
            </div>
            <div className={styles.videoContainer}>
            <div className={styles.innerContainer}>
            <iframe
                width="320"  // Adjusted width to make videos smaller
                height="180" // Adjusted height to maintain aspect ratio
                src="https://www.youtube.com/embed/RFXCWWVZcXM?si=1S5XWg7yNiY7KYiI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            </div>
            <div className={styles.innerContainer}>
            <iframe
                width="320"  // Adjusted width to make videos smaller
                height="180" // Adjusted height to maintain aspect ratio
                src="https://www.youtube.com/embed/hdqT53yPsTU?si=9IN5p6y2Zm0b5GB_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
      </div>
    </div>
        </>
        
    );
};

export default YTvideos;