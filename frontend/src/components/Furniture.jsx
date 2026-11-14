import { useEffect, useState } from "react";

function Furniture() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFurniture = async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/furniture"
      );

      const data = await res.json();
      setProducts(data.products);
    };

    fetchFurniture();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} width="150" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Furniture;