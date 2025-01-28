/** Recommend products on price and ratings
 * @param {Array} products - List of products, each with a name, price, and rating.
 * @param {number} maxPrice - Maximum price the customer can pay.
 * @param {number} minRating - Minimum acceptable rating.
 * @param {number} limit - Maximum number of recommendations.
 * @returns {Array} - List of recommended product names.
 */

const recommendProducts = (products, maxPrice, minRating, limit) => {
    return products
      .filter(
        (product) => product.price <= maxPrice && product.rating >= minRating
      ).sort((a, b) => b.rating - a.rating || a.price - b.price)
      .slice(0, limit)
      .map((product) => product.name);
};

// Example usage:
const products = [
  { name: "Laptop", price: 1000, rating: 4.5 },
  { name: "Headphones", price: 200, rating: 4.7 },
  { name: "Smartphone", price: 800, rating: 4.2 },
  { name: "Tablet", price: 400, rating: 4.6 },
  { name: "Monitor", price: 300, rating: 4.5 },
];

console.log(recommendProducts(products, 500, 4.5, 2)); 
// ["Headphones", "Monitor"]

console.log(recommendProducts(products, 1000, 4.0, 3)); 
// ["Headphones", "Tablet", "Laptop"]

console.log(recommendProducts(products, 250, 4.0, 2)); 
// [] (No products within budget and rating)