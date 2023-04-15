import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import styles from "./Header.module.css";
import SubComponent from "./SubComponet";
import axios from "axios";

const Header = ({ name, exp, position }) => {
  const [number, setNumber] = useState(0);
  const [numberGreaterThanTen, setNumberGreaterThanTen] = useState(false);
  const [listOfNumbers, setListOfNumbers] = useState([]);
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products)
        setProduct(response.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addNumber = () => {
    setNumber(number + 1);
    if (number > 10) {
      setNumberGreaterThanTen(true);
    }
    console.log(number);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <SubComponent product={product} />
    </div>
  );
};

export default Header;
