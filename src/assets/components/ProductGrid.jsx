import ProductCard from "./ProductCard";

function ProductGrid({ products, cart, increaseQty, decreaseQty }) {
  return (
    <div style={styles.grid}>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "40px",
    padding: "20px"
  }
};

export default ProductGrid;
