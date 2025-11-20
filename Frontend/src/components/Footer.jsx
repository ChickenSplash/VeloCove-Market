import React from 'react'
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <div className={styles.footer}>
        <div className='container'>
            Product Catalogue<br/>
            Made by Emanuel Correia<br/> 
            2025
        </div>
    </div>
  )
}

export default Footer