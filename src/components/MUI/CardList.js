import React, { useEffect, useState } from "react";
import MyCard from "./MyCard";
import axios from "axios";
import { Container } from "@mui/material";

const CardList = () => {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProduct(response.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container 
      sx={{ display: "flex", height: "600px", flexDirection: "row", overflowY:'scroll', flexWrap:'wrap', gap:'16px', justifyContent:'center', alignItems:'center' }}
    >
      {product && product.length > 0 ? (
        <>
          {product.map((product) => (
            <MyCard product={product} />
          ))}
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CardList;
