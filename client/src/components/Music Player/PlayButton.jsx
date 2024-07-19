import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './PlayButton.module.css'; // Adjust based on your CSS module setup

const PlayButton = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Example progress percentage
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio(audioSrc)); // Create audio element with given src
  const [duration, setDuration] = useState(0); // Duration of the audio file in seconds
  const [currentTime, setCurrentTime] = useState(0); // Current playback time in seconds

  useEffect(() => {
    const updateDuration = () => {
      setDuration(Math.floor(audioRef.current.duration));
    };
    audioRef.current.addEventListener('loadedmetadata', updateDuration);
    return () => {
      audioRef.current.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioSrc]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    };
    audioRef.current.addEventListener('timeupdate', updateTime);
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateTime);
    };
  }, [audioSrc]);

  const handlePlay = () => {
    setIsPlaying((prevState) => !prevState); // Toggle play/pause state
    if (!isPlaying) {
      audioRef.current.play(); // Start playing audio
      // Start or resume timer
      timerRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = (currentTime / duration) * 100; // Calculate progress percentage
          if (newProgress >= 100) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
          }
          return newProgress;
        });
      }, 1000); // Update interval to match your needs
    } else {
      audioRef.current.pause(); // Pause audio
      // Pause timer
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className={styles.playButton} onClick={handlePlay}>
      <div className={styles.progressBarWrapper}>
        <svg className={styles.progressBar} viewBox="0 0 100 100">
          <circle className={styles.progressBackground} cx="50" cy="50" r="45" />
          <circle
            className={styles.progress}
            cx="50"
            cy="50"
            r="45"
            style={{ strokeDasharray: `${progress} 283` }}
          />
        </svg>
        <div className={styles.iconWrapper}>
          {isPlaying ? (
            <FaPause className={styles.playIcon} />
          ) : (
            <FaPlay className={styles.playIcon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
