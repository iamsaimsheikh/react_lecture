import React, { useEffect, useState } from "react";
import axios from "axios";

const SubComponent = ({product}) => {
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
    <div>
      {product != null ? (
        <>
          {product.map((product) => (
            <p>{product.title}</p>
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
