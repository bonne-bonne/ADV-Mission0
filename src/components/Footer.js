import React from 'react'
import styles from './Footer.module.css'
import Searchbar from './Searchbar'

export default function Footer() {
  return (
    <div className={styles.footer_outer_container}>
    
    <div className={styles.column_container}>
      <div className={styles.text_column}>
        <h3>ABOUT THIS SITE</h3>
        <p>Terms of use</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>

      <div className={styles.text_column}>
        <h3>RELATED SITES</h3>
        <p>Discover Macao</p>
        <p>Greater Bay Area</p>
        <p>Hong Kong WinterFest</p>
      </div>

      <div className={styles.text_column}>
        <h3>HELP</h3>
        <p>Contact us</p>
        <p>FAQ</p>
        <p>Newsletter signup</p>
      </div>


    </div>

    <div className={styles.base_footer}>Copyright © 2022 Hong Kong Department of Tourism and Recreation. All rights reserved.</div>


    </div>
  )
}
