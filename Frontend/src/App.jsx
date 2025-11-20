import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import FilterOptions from "./components/FilterOptions";
import styles from "./App.module.scss";
import { useSearchParams } from "react-router-dom";

import axios from "axios";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import FilterDropdown from "./components/FilterDropdown";
import { buildQuery } from "./utilities/helpers";

export default function App() {  
  const [products, setProducts] = useState([]); // products data
  const [pagination, setPagination] = useState({}); // pagination data
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [isOpen, setIsOpen] = useState(false); // functionality for sidebar
  
  const [searchParams, setSearchParams] = useSearchParams(); // reads URL query parameters and gives methods to update them
  
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "",
    categoryFilter: searchParams.getAll("categoryFilter") || [],
    priceMin: searchParams.get("priceMin") || null,
    priceMax: searchParams.get("priceMax") || null,
    inStockOnly: searchParams.get("inStockOnly") === "true" || false,
    page: searchParams.get("page") || 1,
  });
  const updateFilter = (name, value) => { // update only what needs to be updated, preserving the rest of the filters' state
    setFilters(prev => ({ ...prev, [name]: value }));

    if (name !== "page" && name !== "sort") {
      setFilters(prev => ({ ...prev, page: 1 })); // reset to page 1 on filter change
    }
  };
  
  const debounceTimerRef = useRef(null);
  
  useEffect(() => { // whenever searchParams changes, fetch products with those query params, take the parameters and make api call with them
    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer for debounced API call
    debounceTimerRef.current = setTimeout(() => {
      setIsLoading(true);
      
      const params = buildQuery(filters);
      setSearchParams(params);

      const url = `http://localhost:8000/api/products?` + new URLSearchParams(params);

      axios
        .get(url)
        .then((response) => {
          setProducts(response.data.data);
          setPagination({
            current: response.data.current_page,
            last: response.data.last_page,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch products:", error);
        })
        .finally(() => setIsLoading(false));
    }, 300); // 300ms delay

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [filters]);

  return (
    <div className={styles.layout}>
      {/* <Sidebar /> */}
      <Header 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filters={filters}
        updateFilter={updateFilter}
      />
      <div className={styles.main}>
        <div className="container">
          <FilterDropdown
            filters={filters}
            updateFilter={updateFilter}
          />
          <div className={styles.mainContentWrapper}>
            <FilterOptions
              filters={filters}
              updateFilter={updateFilter}
            />
            <ProductList
              pagination={pagination}
              filters={filters}
              updateFilter={updateFilter}
              products={products}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}