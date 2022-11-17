import React from 'react'
import styles from './Footer_animation.module.css'

// ========== IMAGE IMPORTS ========== //
// import junk from "../assets/junk.png";
// import junkWhite from "../assets/junk_white.png";
// import wheel from "../assets/wheel.png";
// import stand from "../assets/stand.png";
import skylinePink from "../assets/skylinePink.png";
import junkPink from "../assets/junk_pink.png";
import hills from "../assets/hills.png";



export default function Footer_animation() {
  return (
    <div className={styles.footer_animation_outer_container}>
        <div className={`${styles.animation_item} ${styles.moving}`}><img src={junkPink} className={styles.junk} /></div>
        <div className={styles.animation_item}><img src={hills} className={styles.hills} /></div>
        {/* <div className={styles.animation_item}><img src={skylinePink} className={styles.skyline} /></div> */}
        {/* <div className={`${styles.animation_item} ${styles.wheelset}`}><img src={wheel} className={styles.wheel} /><img src={stand} className={styles.stand} /></div> */}
    
    </div>
  )
}
