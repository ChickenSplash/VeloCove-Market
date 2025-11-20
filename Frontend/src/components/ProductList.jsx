import React from "react";
import styles from "./ProductList.module.scss";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar/Overlay";

export default function ProductList({ pagination, filters, updateFilter, products, isLoading }) {
  const isLastPage = Number(filters.page) >= pagination.last;
  const isFirstPage = Number(filters.page) <= 1;
  const isOnlyOnePage = pagination.last <= 1;
  
  const handleNextPage = () => {
    updateFilter("page", Number(filters.page) + 1);
  };

  const handlePrevPage = () => {
    updateFilter("page", Number(filters.page) - 1);
  };

  if (isLoading) {
    return (
      <p className={styles.errorMessage}>Loading...</p>
    );
  }
  
  if (!products || products.length === 0) {
    return (
      <p className={styles.errorMessage}>No products match the search criteria.</p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!isOnlyOnePage && 
        <div className={styles.pagination}>
          <button 
            onClick={handlePrevPage}
            className={isFirstPage ? styles.buttonDisabled : styles.button}
            disabled={isFirstPage}
          >
            Prev
          </button>
          <div className={styles.paginationInfo}>{"Page " + filters.page + " out of " + pagination.last}</div>
          <button 
            onClick={handleNextPage}
            className={isLastPage ? styles.buttonDisabled : styles.button}
            disabled={isLastPage}
          >
            Next
          </button>
        </div>
      }
    </div>
  );
}