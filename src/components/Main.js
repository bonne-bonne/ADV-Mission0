import React from 'react'
import styles from './Main.module.css'


export default function Main() {
  return (
    <div className={styles.main_outer_container}>Main
    
    <div className={styles.search_bar_container}>
          <input className={styles.input_field} type="text"></input>
          <div className={styles.search_btn}>SEARCH</div>
        </div>
        </div>
  )
}
