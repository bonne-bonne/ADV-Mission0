import React from "react";
import styles from './Searchbar.module.css'

export default function Searchbar() {
  return (
    <div>

      <div className={styles.search_bar_container}>
        <input className={styles.input_field} type="text"></input>
        <div className={styles.search_btn}>SEARCH</div>
      </div>

    </div>
  );
}
