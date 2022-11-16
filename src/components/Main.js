import React from 'react'
import styles from './Main.module.css'
import Card from './Card'
import boat from "../assets/HKBoat.jpg";
import peak from "../assets/HK4.jpg";
import boat2 from "../assets/Boat2.jpg";
import boat3 from "../assets/boat3.jpg";
import boat5 from "../assets/boat5.jpg";
import food from "../assets/dim-sum.jpeg";
import paint2 from "../assets/streak2.png";
import paint3 from "../assets/streak3.png";
import paint5 from "../assets/streak5.png";
import peak2 from "../assets/Peak.jpg";
import train from "../assets/trainstation.jpg";
import train2 from "../assets/train2.jpg";

// const transportText= "It'll be a breeze getting around Hong Kong. Take a ride on the double decker trams...cruise across the harbour on a ferry...or catch a train on our efficient subway network."

const transportText= "It'll be a breeze getting around Hong Kong. Ride the double decker trams...cruise on a harbour ferry...or catch a train on our efficient subway network."

// const foodText= "The cuisine in Hong Kong is to be savoured. Whether you want to eat 'street-food style' or experience find dining, you'll find a culinary delight that is just right for you. Perhaps you just want to experience the 'real-deal' Dim-Sum..."

const foodText= "The cuisine in Hong Kong is to be savoured. Whether you want to eat 'street-food style' or experience find dining, you'll find a culinary delight that is just right for you."

// const hotspotsText= "There's a wonder around every corner in Hong Kong. For a captivating view of the city, take the cable car up to the Peak. Make your way down to the harbour at dusk to witness the famous Hong Kong lights."

const hotspotsText= "There's a wonder around every corner in Hong Kong, from a captivating view at the Peak or watching famous Hong Kong lights at the harbour's edge."



export default function Main() {
  return (
    <div className={styles.main_outer_container}>
    
    <div className={styles.text_container}>
      <h2>Become immersed in what Hong Kong has to offer...</h2>
      <p>Experience Hong Kong from every angle, from stunning skyline and breathtaking landscapes, to authentic local culture and unforgettable foodie encounter. Whether your after a portuguese egg tart, a hike or a captivating view from The Peak, you can find it here in Hong Kong.</p>
    </div>

    <div className={styles.line}></div>

    <div className={styles.card_container}>
      <Card text={"banana"} heading={"HUNGRY?"} paint={paint2}  image={food} bodyText={foodText}/>
      <Card text={"avocado"} heading={"HOP ABOARD!"} image={train2} paint={paint3} bodyText={transportText} />
      <Card text={"avocado"} heading={"HOT SPOTS"} paint={paint2} image={peak2} bodyText={hotspotsText} />
    </div>

    


    
    </div>
  )
}
