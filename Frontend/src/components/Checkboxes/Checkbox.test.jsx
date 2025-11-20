// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toBeInTheDocument
import Checkbox from "./Checkbox";

test("Renders checkbox with label text", () => {
  const label = "Book";
  const categoryFilter = [];
  const setCategoryFilter = vi.fn();
  
  render(
    <Checkbox 
      label={label}
      categoryFilter={categoryFilter} 
      setCategoryFilter={setCategoryFilter}
    />
  );
  
  // Look for the button in the DOM
  const checkbox = screen.getByText(/Book/i);
  expect(checkbox).toBeInTheDocument();
});