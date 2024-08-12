
import React from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Clothing");
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    try {
      const product = await axios.get("http://localhost:8000/api/products");
      console.log(product.data);
      setProduct(product.data);


    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <section className="  mt-20 w-full  max-md:max-w-full  ">
      <h2 className="text-lg font-bold leading-6 text-stone-900 mb-6">
        Featured Products
      </h2>
      <div className="flex flex-wrap gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
