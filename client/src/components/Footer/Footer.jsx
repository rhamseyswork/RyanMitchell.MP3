import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.css';

function Footer() {

  return (
    <div className='Footer mb-8'>
      <p className="OC-Pace-Setters" style={{textAlign:"center"}}>All Right Reserved © <Link to="https://www.OCPaceSetters.com" style={{color:"orange"}}>OC Pace Setters</Link> ® Ryan Mitchell<span className="d-block"><Link to="/terms">Terms </Link>|<Link to="/privacy"> Privacy</Link></span></p>
    </div>
  )
}

export default Footer;