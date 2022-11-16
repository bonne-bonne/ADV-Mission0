import React from "react";
import styles from "./Card.module.css";
import hongKong4 from "../assets/HK4.jpg";
import paint from "../assets/streak.png";
import paint2 from "../assets/streak2.png";

export default function Card(props) {
  return (
    <div>
      <div className={styles.card_container}>
        {/* <div className={styles.overlay}></div> */}
        <img src={props.image} className={styles.card_image} />
        {/* <p>{props.text}</p> */}
        <div className={styles.card_color}>
          {/* <div className={styles.shadow}></div> */}
          <div className={styles.card_heading_container}>
          <img src={props.paint} className={styles.paint} />
          {/* <div className={styles.line}></div> */}
            <p className={styles.card_heading}>{props.heading}</p>
            {/* <div className={`${styles.line} ${styles.line_right}`}></div> */}
            
          </div>
          <div className={styles.card_body_text}>{props.bodyText}</div>
        </div>
      </div>
    </div>
  );
}
