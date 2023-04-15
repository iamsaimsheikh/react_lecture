import React from "react";
import styles from "./Card.module.css";

const Card = ({ product }) => {
  return <div className={styles.cardContainer}>
    <div className={styles.imageContainer}><img src={product.thumbnail} /></div>
    <h5>{product.title}</h5>
    <p>{product.description}</p>
    <h2>${product.price}</h2>
    </div>;
};

export default Card;
