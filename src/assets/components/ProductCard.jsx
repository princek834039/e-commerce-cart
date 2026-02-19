function ProductCard({ product, cart, increaseQty, decreaseQty }) {

  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "180",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      {quantity === 0 ? (
        <button
          style={addBtn}
          onClick={() => increaseQty(product)}
        >
          Add to Cart
        </button>
      ) : (
        <div style={counterContainer}>
          <button
            style={btnStyle}
            onClick={() => decreaseQty(product)}
          >
            -
          </button>

          <span style={qtyStyle}>{quantity}</span>

          <button
            style={btnStyle}
            onClick={() => increaseQty(product)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "5px",
  textAlign: "center",
  width: "200px",
  margin: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const counterContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px"
};

const btnStyle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  background: "#f5f5f5",
  fontSize: "18px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  transition: "0.3s"
};

const qtyStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  minWidth: "20px",
  transition: "0.3s"
};

const addBtn = {
  padding: "8px 12px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "0.3s"
};




export default ProductCard;
