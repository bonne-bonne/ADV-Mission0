import React from 'react'
import styles from './Footer_animation.module.css'
import junk from "../assets/junk.png";
import junkPink from "../assets/junk_pink.png";
import junkWhite from "../assets/junk_white.png";
import hills from "../assets/hills.png";
import skylinePink from "../assets/skylinePink.png";
import wheel from "../assets/wheel.png";
import stand from "../assets/stand.png";

export default function Footer_animation() {
  return (
    <div className={styles.footer_animation_outer_container}>
        <div className={`${styles.test} ${styles.moving}`}><img src={junkPink} className={styles.junk} /></div>
        <div className={styles.test}><img src={hills} className={styles.hills} /></div>
        <div className={styles.test}><img src={skylinePink} className={styles.skyline} /></div>
        {/* <div className={`${styles.test} ${styles.wheelset}`}><img src={wheel} className={styles.wheel} /><img src={stand} className={styles.stand} /></div> */}
    
        {/* <div className={styles.test}></div> */}
        {/* <div className={styles.test}></div> */}
        
    </div>
  )
}
