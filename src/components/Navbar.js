import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'

import building from '../assets/building.png'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
    console.log(isHidden)
  }

  return (
    <div className={styles.navbar_outer_container}>

      <div className={styles.colored_section}></div>


      <div className={styles.nav_content_container}>


        <div className={styles.logo_container}><div><img src={building} className={styles.logo} /></div>HIDDEN HONG KONG</div>
        <div className={styles.logo_container_sm}><div><img src={building} className={styles.logo} /></div>HHK</div>
        
        <div className={styles.hamburger_menu} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={styles.navlinks_container}>
          <div className={styles.navlinks}>EAT</div>
          <div className={styles.navlinks}>TRANSPORT</div>
          <div className={styles.navlinks}>STAY</div>
          <div className={styles.navlinks}><p className={styles.login}>LOGIN</p></div>
        </div>

      </div>

      <div className={`${styles.menu_dropdown} ${isHidden && styles.hide_dropdown}`}>
          <div className={styles.navlinks_dropdown}>EAT</div>
          <div className={styles.navlinks_dropdown}>TRANSPORT</div>
          <div className={styles.navlinks_dropdown}>STAY</div>
          <div className={styles.navlinks_dropdown}><p>LOGIN</p></div>  
      </div>

      <div className={`${styles.colored_section_dropdown} ${isHidden && styles.hide_dropdown}`}></div>
    
    </div>
  )
}
