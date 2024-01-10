import { useState } from "react";
import { PRODUCTS } from "../../app/shared/PRODUCTS"; // Importing your data array

const ProductsFilter = () => {
  const [filter, setFilter] = useState("all"); // Setting the initial state of the filter to "all"

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="featured">Featured</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
