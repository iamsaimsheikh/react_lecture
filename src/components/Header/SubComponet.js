import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./SubComponent.module.css";

const SubComponent = ({ product }) => {
  //   const [product, setProduct] = useState(product);

  //   const getProducts = async () => {
  //     const response = await axios
  //       .get("https://dummyjson.com/products")
  //       .then((response) => {
  //         setProduct(response.data.products);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  useEffect(() => {
    // getProducts();
  }, [product]);

  return (
    <div className={styles.cardList}>
      {product != null ? (
        <>
          {product.map((product , key) => (
            <Card product={product} />
          ))}
        </>
      ) : (
        <>
          <p>No Products</p>
        </>
      )}
      
    </div>
  );
};

export default SubComponent;
