import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ target="_blank", rel="noopener noreferrer", alt, to, img, children}) => {
  return (
    <button>
        <Link target={target} rel={rel} to={to}>
          <img src={img} alt={alt} />
          {children}
        </Link>
    </button>
  )
}

export default ButtonLink