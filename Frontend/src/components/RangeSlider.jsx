import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./RangeSlider.module.scss"
import RangeInput from "./Inputs/RangeInput";

export default function PriceSlider({
    filters,
    updateFilter
}) {

  const handleChange = (values) => {
    updateFilter("priceMin", values[0]);
    updateFilter("priceMax", values[1]);
  };

  return (
    <div>
      <h3 className={styles.heading}>Price Range</h3>
      <RangeInput 
        filters={filters}
        updateFilter={updateFilter}
      />
      <div className={styles.rangeSlider}>
        <Slider
          range
          min={0}
          max={1000}
          value={[filters.priceMin || 0, filters.priceMax || 1000]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}