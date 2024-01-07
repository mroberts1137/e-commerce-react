const url = 'https://fakestoreapi.com/products';

export async function getAllProducts() {
  try {
    let response = await fetch(url);
    let products = await response.json();
    console.log('Data fetched from fakestoreapi.com');
    return products;
  } catch (error) {
    console.error('There was an error: ', error);
  }
}
