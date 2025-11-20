import React from "react";
import styles from "./ProductCard.module.scss";
import clsx from "clsx";
import placeholder from "../assets/images/products-placeholder.png";
import { capitalizeFirstLetter } from "../utilities/helpers";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl ? product.imageUrl : placeholder} alt={product.name} />
      <div>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>£{product.price.toFixed(2)}</div>
        <div className={styles.productMeta}>Category: {capitalizeFirstLetter(product.category)}</div>
        <div className={styles.productMeta}>{product.rating} ⭐</div>
        <div
          className={clsx(styles.availability, {
            [styles.inStock]: product.stock_amount,
            [styles.outStock]: !product.stock_amount,
          })}
        >{product.stock_amount ? "In Stock" : "Out of Stock"}</div>
      </div>
    </div>
  );
}