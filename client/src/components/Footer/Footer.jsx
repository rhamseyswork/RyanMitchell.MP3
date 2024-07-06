import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={`${styles.Footer} Footer-container mb-8`}>
      <div className={styles.OC_Pace_Setters} style={{ textAlign: "center" }}>
        All Right Reserved
        ® Ryan Mitchell © &nbsp;
        <Link to="https://www.OCPaceSetters.com" target="_blank" style={{ color: "orange" }}>
          OC Pace Setters
        </Link>
        <p className={styles.d_block}>
          <Link to="/terms">Terms </Link>|<Link to="/privacy"> Privacy</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;