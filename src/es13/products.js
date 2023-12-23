import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };



// FORMA DE HACER EL MISMO PROCESO PERO DE FORMA ASYNCRONA

// // Define una función asíncrona para obtener los productos
// async function getProducts() {
//   const response = await fetch('https://api.escuelajs.co/api/v1/products');
//   const products = await response.json();
//   return products;
// }

// // Exporta la función getProducts en lugar de los productos directamente
// export { getProducts };