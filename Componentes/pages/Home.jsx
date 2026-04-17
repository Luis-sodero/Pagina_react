import React, { useContext } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PRODUCTS_PER_CATEGORY = 6;

const categoryLabels = {
  hogar: "Hogar",
  oficina: "Oficina",
  videojuegos: "Videojuegos",
  telefonos: "Teléfonos",
  computadoras: "Computadoras"
};

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const categories = ["hogar", "oficina", "videojuegos", "telefonos", "computadoras"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido a TechStore</h1>

      {categories.map((cat) => {
        const filtered = products.filter(p => p.category === cat).slice(0, PRODUCTS_PER_CATEGORY);

        return (
          <div key={cat} style={styles.section}>

            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>{categoryLabels[cat]}</h2>
              <button
                style={styles.verTodosBtn}
                onClick={() => navigate(`/products?category=${cat}`)}
              >
                Ver todos →
              </button>
            </div>

            <div style={styles.grid}>
              {filtered.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>

          </div>
        );
      })}
    </div>
  );
};

const styles = {
  section: {
    marginBottom: "40px"
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px"
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.4rem"
  },
  verTodosBtn: {
    background: "none",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "6px 16px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px"
  }
};

export default Home;