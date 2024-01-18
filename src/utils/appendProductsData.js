// append additional properties to product data
// testing date sorting by adding + idx to date
// testing featured by hard coding element index=0 to be featured
export const appendProductsData = (products) => {
  return products.map((product, idx) => ({
    ...product,
    date: new Date(Date.now() + idx).toISOString(),
    featured: idx === 0 ? true : false
  }));
};
