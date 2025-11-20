import React from "react";
import styles from "./Sidebar.module.scss"
import Checkbox from "../Checkboxes/Checkbox";
import InStockCheckbox from "../Checkboxes/InStockCheckbox";
import RangeSlider from "../RangeSlider";
import ResetAllFilters from "../ResetAllFilters";
import Overlay from "./Overlay";
import clsx from "clsx";

export default function Sidebar({
  categoryFilter, 
  setCategoryFilter, 
  sortOrder, 
  setSortOrder, 
  showInStockOnly, 
  setShowInStockOnly,
  inputValue,
  setInputValue,
  searchTerm,
  priceRange,
  setPriceRange,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      <div className={isOpen ? clsx(styles.sidebar, styles.open) : styles.sidebar}>
        <RangeSlider 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <h3>Category Filters</h3>
        <Checkbox 
          label="Books"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Electronics"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Clothing"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Home"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Toys"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <div style={{ marginTop: "15px" }}/>
        <InStockCheckbox
          showInStockOnly={showInStockOnly}
          setShowInStockOnly={setShowInStockOnly}
        />
        <div style={{ marginTop: "15px" }}/>
        <ResetAllFilters
          setCategoryFilter={setCategoryFilter}
          categoryFilter={categoryFilter}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          setShowInStockOnly={setShowInStockOnly}
          showInStockOnly={showInStockOnly}
          setInputValue={setInputValue}
          searchTerm={searchTerm}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
      <Overlay 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
}