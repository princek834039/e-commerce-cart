import { Link } from "react-router-dom";
function CartPage({ cart, removeItem, clearCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div style={{ padding: "20px", marginTop: 0 }}>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          display: "inline-block",
          marginBottom: "10px"
        }}
      >
        ← Back
      </Link>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map(item => {
            const itemTotal = item.price * item.quantity;

            return (
              <div key={item.id} style={{ marginBottom: "15px " }}>
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Subtotal: ₹{itemTotal}</strong></p>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: "5px 10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "5px"
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <hr />
          <h2>Grand Total: ₹{totalPrice}</h2>
          <button
            onClick={clearCart}
            style={{
              padding: "8px 15px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Clear Cart
          </button>

        </>
      )}
    </div>
  );
}

export default CartPage;
