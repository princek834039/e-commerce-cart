import { useState } from "react";
import Navbar from "./assets/components/Navbar.jsx";
import ProductGrid from "./assets/components/ProductGrid.jsx";
import products from "./assets/components/data/products";
import { Routes, Route } from "react-router-dom";
import CartPage from "./assets/components/CartPage.jsx";

function App() {

  const [cart, setCart] = useState([]);

  function increaseQty(product) {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }
  function decreaseQty(product) {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }
function clearCart() {
  setCart([]);
}
function removeItem(id) {
  setCart(prevCart =>
    prevCart
    .map(item =>
      item.id === id
      ?{...item, quantity: item.quantity - 1}
      : item
    )
    .filter(item => item.quantity > 0)
  );
}

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <div>
      <Navbar cartCount={totalItems} />

      <Routes>
        <Route
          path="/"
          element={
            <ProductGrid
              products={products}
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />

        <Route
          path="/cart"
          element={<CartPage cart={cart} removeItem={removeItem} 
          clearCart={clearCart}
          />
        }
        />
      </Routes>
    </div>
  );
}
export default App;
