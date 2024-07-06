import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from 'react-router-dom';
import styles from './Links.module.css'

const Links = () => {
  return (
    <>
      <span className={styles.linksContainer}>
        <Link to='https://www.Tiktok.com' className={styles.link} target="_blank" rel="noopener noreferrer">
          <AiFillTikTok className={styles.icon} />
        </Link>
        <Link to='https://www.Instagram.com' className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className={styles.icon} />
        </Link>
        <Link to='https://www.Youtube.com' className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaYoutubeSquare className={styles.icon} />
        </Link>
        <Link to='https://www.Twitter.com' className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className={styles.icon} />
        </Link>
        <Link to='https://www.Facebook.com' className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className={styles.icon} />
        </Link>
      </span>
    </>
  );
};

export default Links;