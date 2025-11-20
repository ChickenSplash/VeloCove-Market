import React, { useState } from "react";
import styles from "./Hamburger.module.scss";

export default function Hamburger({ 
  isOpen,
  setIsOpen
 }) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={styles.hamburger}
      onClick={handleClick}
      aria-label="Menu"
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
}