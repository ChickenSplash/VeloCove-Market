import React from 'react'
import styles from "./RangeInput.module.scss";

export default function RangeInput({ filters, updateFilter }) {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    updateFilter(name, value ? Number(value) : null);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="number"
        name="priceMin"
        placeholder="Min"
        value={filters["priceMin"] || 0}
        onChange={handlePriceChange}
        className={styles.input}
      />
      <input
        type="number"
        name="priceMax"
        placeholder="Max"
        value={filters["priceMax"] || 1000}
        onChange={handlePriceChange}
        className={styles.input}
      />
    </div>
  )
}