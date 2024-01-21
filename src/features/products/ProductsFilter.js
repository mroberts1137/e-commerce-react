const ProductsFilter = ({ sortBy, handleSortChange }) => {
  return (
    <div>
      <label htmlFor='sortOptions' style={{ marginRight: '5px' }}>
        Sort By:
      </label>
      <select id='sortOptions' onChange={handleSortChange} value={sortBy}>
        <option value='All'>All</option>
        <option value='Featured'>Featured</option>
        <option value='Mens'>Men's Clothing</option>
        <option value='Womens'>Womens's Clothing</option>
        <option value='Jewelery'>Jewelery</option>
        <option value='Electronics'>Electronics</option>
        <option value='AZ'>Alphabetically, A-Z</option>
        <option value='ZA'>Alphabetically, Z-A</option>
        <option value='LowToHigh'>Price, Low to High</option>
        <option value='HighToLow'>Price, High to Low</option>
        <option value='OldToNew'>Date, Old to New</option>
        <option value='NewToOld'>Date, New to Old</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
