import React from 'react';
import logo from '../images/logo.png';
import styles from '../stylesheets/Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
return (
  <header>
    <ul>
      <li><Link to="/"><img src={logo} className={styles.logo} alt="Home"/> </Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/badnews">Bad News</Link></li>
      <li><Link to="/goodnews">Good News</Link></li>
      <li><Link to="/really">Me? Really?</Link></li>
      <li><Link to="/exercises">Exercises</Link></li>
      <li><Link to="/aboutme">About Me</Link></li>
    </ul>
  </header>
);
}

export default Header;  