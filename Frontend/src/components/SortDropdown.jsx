// resources/js/components/SortDropdown.jsx
import React from "react";
import styles from "./SortDropdown.module.scss";

// Sorting dropdown options, its only job is to tell its parent when it updates, updating sortOrder

export default function SortDropdown({ filters, updateFilter }) {
  return (
    <select
      className={styles.sortDropdown}
      value={filters.sort}
      onChange={(e) => updateFilter("sort", e.target.value)}
    >
      <option value="nameAsc">Sort Alphabetically: A → Z</option>
      <option value="nameDesc">Sort Alphabetically: Z → A</option>
      <option value="priceAsc">Sort by Price: Low → High</option>
      <option value="priceDesc">Sort by Price: High → Low</option>
      <option value="ratingAsc">Sort by Rating: Low → High</option>
      <option value="ratingDesc">Sort by Rating: High → Low</option>
    </select>
  );
}