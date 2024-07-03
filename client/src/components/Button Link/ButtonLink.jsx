import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa'


const ButtonLink = ({ target="_blank", rel="noopener noreferrer", alt, to, img, children}) => {
  return (
    <button>
        <Link target={target} rel={rel} to={to}>
          <img src={img} alt={alt} />
          {img}
          <FaSpotify />
          {children}
        </Link>
    </button>
  )
}

export default ButtonLink