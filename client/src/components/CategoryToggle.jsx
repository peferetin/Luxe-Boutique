
import React, { useState } from "react";

const CategoryToggle = () => {
  const [activeCategory, setActiveCategory] = useState("Clothing");

  return (
    <div className="flex gap-5 justify-center py-1 mt-7 w-full text-sm font-medium leading-5 bg-green-200 rounded-xl max-md:flex-wrap max-md:max-w-full">
      <button
        onClick={() => setActiveCategory("Clothing")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Clothing"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Clothing
      </button>
      <button
        onClick={() => setActiveCategory("Accessories")}
        className={`my-auto ${activeCategory === "Accessories"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          }`}
      >
        Accessories
      </button>
    </div>
  );
};

export default CategoryToggle;
