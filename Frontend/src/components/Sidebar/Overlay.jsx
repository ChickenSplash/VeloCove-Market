import React from "react";
import styles from "./Sidebar.module.scss"
export default function Sidebar({
  setIsOpen,
  isOpen,
}) {
  const handleOverlayClick = () => {
    setIsOpen(!isOpen); // toggle the state
  };

  return (
    <div 
      className={isOpen ? styles.overlay : "false"}
      onClick={handleOverlayClick}
    />
  )
}