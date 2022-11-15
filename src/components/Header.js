import React from "react";
import styles from "./Header.module.css";
import hongKong from "../assets/HK.jpg";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <div className={styles.header_outer_container}>
     
      <div className={styles.background_img}>
        <img src={hongKong} />
      </div>
      <div className={styles.background_img_tone}></div>

      <div className={styles.container}>
        <h1 className={styles.heading}>Hop over to <span>Hong Kong!</span> </h1>

        {/* <Searchbar /> */}

        <div className={styles.search_bar_container}>
          <input
            className={styles.input_field}
            type="text"
            placeholder="What would you like to learn about?..."
          ></input>
          <div className={styles.search_btn}>SEARCH</div>
        </div>

        
      </div>

    </div>
  );
}
