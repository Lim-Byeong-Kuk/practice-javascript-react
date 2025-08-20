import React, { useEffect } from "react";

const ProductListPage = () => {
  useEffect(() => {
    fetch("http://loacalhost:8080/product")
      .then((i) => i.json())
      .then((i) => {
        console.log(i);
      });
  });

  return <div>ProductListPage</div>;
};

export default ProductListPage;
