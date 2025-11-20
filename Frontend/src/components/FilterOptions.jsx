import React from "react";
import styles from "./FilterOptions.module.scss";
import Checkbox from "./Checkboxes/Checkbox";
import InStockCheckbox from "./Checkboxes/InStockCheckbox";
import ResetAllFilters from "./ResetAllFilters";
import RangeSlider from "./RangeSlider";

export default function FilterOptions({
  filters,
  updateFilter
}) {
  return (
    <div className={styles.options}>
      <RangeSlider
        filters={filters}
        updateFilter={updateFilter}
      />
      <h3>Category Filters</h3>
      <Checkbox
        label="Books"
        filters={filters}
        updateFilter={updateFilter}
      />
      <Checkbox
        label="Electronics"
        filters={filters}
        updateFilter={updateFilter}
      />
      <Checkbox 
        label="Clothing"
        filters={filters}
        updateFilter={updateFilter}
      />
      <Checkbox 
        label="Home"
        filters={filters}
        updateFilter={updateFilter}
      />
      <Checkbox 
        label="Toys"
        filters={filters}
        updateFilter={updateFilter}
      />
      <div style={{ marginTop: "15px" }}/>
      <InStockCheckbox
        filters={filters}
        updateFilter={updateFilter}
      />
      <div style={{ marginTop: "15px" }}/>
      <ResetAllFilters
        filters={filters}
        updateFilter={updateFilter}
      />
    </div>
  )
}
