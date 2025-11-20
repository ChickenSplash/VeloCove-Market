import React from "react";
import styles from "./ResetAllFilters.module.scss"
import clsx from "clsx";

export default function ResetAllFilters({ 
  filters,
  updateFilter
}) {
  function resetAll() {
    updateFilter("search", "");
    updateFilter("sort", "");
    updateFilter("categoryFilter", []);
    updateFilter("priceMin", null);
    updateFilter("priceMax", null);
    updateFilter("inStockOnly", false);
  }

  const isDefaultState = 
    filters.search === "" &&
    filters.sort === "" &&
    filters.categoryFilter.length === 0 &&
    filters.priceMin === null &&
    filters.priceMax === null &&
    filters.inStockOnly === false;

  return (
    <button 
      onClick={resetAll}
      data-testid="reset-button"
      className={isDefaultState ? styles.buttonDisabled : styles.button}
      disabled={isDefaultState}
    >
      Reset All
    </button>
  )
}