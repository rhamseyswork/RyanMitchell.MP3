import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css';
import { FaSpotify, FaGooglePlay } from 'react-icons/fa';
import { SiApplemusic, SiAmazonmusic, SiTidal, SiAudiomack, SiPandora } from "react-icons/si"
import { TbDeviceImacDown } from "react-icons/tb";


const iconComponents = {
  FaSpotify,
  SiApplemusic,
  SiAmazonmusic,
  SiTidal,
  FaGooglePlay,
  SiAudiomack,
  SiPandora,
  TbDeviceImacDown
};

const ButtonLink = ({ target = "_blank", rel = "noreferrer", alt, colorBG = 'darkred' , to, img, children }) => {
  // Dynamically determine the icon component
  const IconComponent = img && iconComponents[img.replace(/<\/?([a-zA-Z]+).*?>/g, '$1')];

  if (colorBG === '')colorBG = 'darkred';

  return (
    <button className={styles.button} style={{ backgroundColor: colorBG, }}>
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
