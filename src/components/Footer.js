import React from 'react'
import styles from './Footer.module.css'
import Searchbar from './Searchbar'

export default function Footer() {
  return (
    <div className={styles.footer_outer_container}>Footer
    <Searchbar />
    </div>
  )
}
