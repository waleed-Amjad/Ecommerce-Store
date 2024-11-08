import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {
  const { products } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = () => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  };

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>

          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-5">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded ${selectedCategory === "All" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("men's clothing")}
              className={`px-4 py-2 rounded ${selectedCategory === "men's clothing" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Men
            </button>
            <button
              onClick={() => setSelectedCategory("women's clothing")}
              className={`px-4 py-2 rounded ${selectedCategory === "women's clothing" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Women
            </button>
            <button
              onClick={() => setSelectedCategory("jewelery")}
              className={`px-4 py-2 rounded ${selectedCategory === "jewelery" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Jewelery
            </button>
            <button
              onClick={() => setSelectedCategory("electronics")}
              className={`px-4 py-2 rounded ${selectedCategory === "electronics" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Electronic
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filterProducts().map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
