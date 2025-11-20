import React from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";

export default function Checkbox({ label, filters, updateFilter }) {
  const safeId = label.toLowerCase().replace(/\s+/g, "-");
  const isChecked = filters.categoryFilter.includes(label.toLowerCase());

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // add to filters
      updateFilter("categoryFilter", [...filters.categoryFilter, value]);
    } else {
      // remove from filters
      updateFilter("categoryFilter", filters.categoryFilter.filter(item => item !== value));
    }
  };

  return (
    <label htmlFor={safeId} className={clsx(styles.checkboxLabel, isChecked && styles.checked)}>
      <input
        id={safeId}
        type="checkbox"
        value={label.toLowerCase()}
        className={styles.checkboxInput}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <span className={styles.checkboxText}>{label}</span>
    </label>
  );
}

