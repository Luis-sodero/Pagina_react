import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>TechStore</h2>
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/products" style={styles.link}>Productos</Link>
        <Link to="/cart" style={styles.link}>Carrito</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#222",
    color: "#fff"
  },
  link: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none"
  }
};

export default Navbar;