import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css';
import { FaSpotify, FaGooglePlay } from 'react-icons/fa';
import { SiApplemusic, SiAmazonmusic, SiTidal, SiAudiomack } from "react-icons/si";


const iconComponents = {
  FaSpotify,
  SiApplemusic,
  SiAmazonmusic,
  SiTidal,
  FaGooglePlay,
  SiAudiomack
};

const ButtonLink = ({ target = "_blank", rel = "noopener noreferrer", alt, color="grey", to, img, children }) => {
  // Dynamically determine the icon component
  const IconComponent = img && iconComponents[img.replace(/<\/?([a-zA-Z]+).*?>/g, '$1')];

  return (
    <button className={styles.button} style={{ backgroundColor: color, }}>
      <Link target={target} rel={rel} to={to}>
        {IconComponent ? (
          // Render the icon component if IconComponent is defined
          <span className={styles.icon} style={{color: 'white' }}>
            <IconComponent className={styles.image} alt={alt} style={{paddingBottom: "2px", marginRight: "5px"}}/>
          </span> 
        ) : (
          // Otherwise, img is assumed to be a URL string for an image
          <img src={img} alt={alt} className={styles.image} />
        )}
        <span style={{color: 'white' }}> {children }</span>
      </Link>
    </button>
  );
};

export default ButtonLink;
