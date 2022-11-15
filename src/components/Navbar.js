import React from 'react'
import styles from './Navbar.module.css'

export default function navbar() {
  return (
    <div className={styles.navbar_outer_container}>

      <div className={styles.colored_section}></div>


      <div className={styles.nav_content_container}>
        <div className={styles.logo_container}>HIDDEN HONG KONG</div>
        <div className={styles.logo_container_sm}>HHK</div>
        
        <div className={styles.navlinks_container}>
          <div className={styles.navlinks}>EAT</div>
          <div className={styles.navlinks}>TRANSPORT</div>
          <div className={styles.navlinks}>STAY</div>
        </div>
      </div>
    
    
    </div>
  )
}
