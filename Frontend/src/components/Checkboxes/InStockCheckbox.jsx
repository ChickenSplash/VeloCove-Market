import React from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";

export default function Checkbox({ filters, updateFilter }) {
  return (
    <label htmlFor="showInStock" className={clsx(styles.checkboxLabel, filters.inStockOnly && styles.checked)}>
      <input
        id="showInStock"
        type="checkbox"
        value="in stock"
        className={styles.checkboxInput}
        onChange={(e) => updateFilter("inStockOnly", e.target.checked)}
        checked={filters.inStockOnly}
      />
      <span className={styles.checkboxText}>In Stock</span>
    </label>
  );
}
