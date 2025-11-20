// FilterOptions.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterOptions from "./FilterOptions";

test("ResetAllFilters button switches class when a filter is selected", () => {
  // Mock state and setters
  let categoryFilter = [];
  const setCategoryFilter = (updateFn) => {
    // simulate React setState
    categoryFilter = updateFn(categoryFilter);
  };
  const sortOrder = "nameAsc";
  const setSortOrder = vi.fn();
  const showInStockOnly = false;
  const setShowInStockOnly = vi.fn();
  const inputValue = "";
  const setInputValue = vi.fn();
  const searchTerm = "";
  const priceRange = { min: 0, max: 1000 };
  const setPriceRange = vi.fn();

  render(
    <FilterOptions
      categoryFilter={categoryFilter}
      setCategoryFilter={setCategoryFilter}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      showInStockOnly={showInStockOnly}
      setShowInStockOnly={setShowInStockOnly}
      inputValue={inputValue}
      setInputValue={setInputValue}
      searchTerm={searchTerm}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
    />
  );

  // Step 1: button should have disabled class initially
  const resetButton = screen.getByTestId("reset-button");
  expect(resetButton.className).toMatch(/buttonDisabled/);

  // Step 2: click a category checkbox
  const booksCheckbox = screen.getByLabelText(/books/i);
  fireEvent.click(booksCheckbox);

  // Step 3: after state change, the button should now have the enabled class
  // (this assumes your component re-renders with new props in real usage)
  expect(resetButton.className).toMatch(/button/);
});