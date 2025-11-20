import React from 'react'
import styles from "./SearchInput.module.scss";

export default function SearchInput({ filters, updateFilter }) {

  return (
    <input 
      type="text"
      placeholder="Search..."
      value={filters.search}
      onChange={e => updateFilter("search", e.target.value)}
      className={styles.input}
    />
  )
}