import React from "react";
import styles from "./Header.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";
import Hamburger from "./Sidebar/Hamburger";

export default function Header({
  isOpen,
  setIsOpen,
  filters,
  updateFilter
}) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.titleBar}>
          <Hamburger 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <h1>VeloCove Market</h1>
        </div>
        <div className={styles.options}>
          <SearchInput
            filters={filters}
            updateFilter={updateFilter}
          />
          <SortDropdown 
            filters={filters}
            updateFilter={updateFilter}
          />
        </div>
      </div>
    </div>
  )
}
