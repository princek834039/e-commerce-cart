import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={styles.nav}>
      <h2>E-Commerce Store</h2>
        <Link to="/cart" style={styles.link}>
        🛒 Cart: {cartCount}
        </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#282c34",
    color: "white"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Navbar;
