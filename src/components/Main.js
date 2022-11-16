import React from 'react'
import styles from './Main.module.css'
import Card from './Card'
import boat from "../assets/HKBoat.jpg";
import boat2 from "../assets/Boat2.jpg";



export default function Main() {
  return (
    <div className={styles.main_outer_container}>
    
    <div className={styles.text_container}>
      <h2>Become immersed in what Hong Kong has to offer...</h2>
      <p>Experience Hong Kong from every angle, from stunning skyline and breathtaking landscapes, to authentic local culture and unforgettable foodie encounter. Whether your after a portuguese egg tart, a hike or a captivating view from The Peak, you can find it here in Hong Kong.  </p>
    </div>

    <div className={styles.line}></div>

    <div className={styles.card_container}>
      <Card text={"banana"} heading={"HUNGRY?"}/>
      <Card text={"avocado"} heading={"HOP ABOARD!"} image={boat2} />
      <Card text={"avocado"} heading={"HOT SPOTS"} />
    </div>

    


    
    </div>
  )
}
