import React from "react";
import Swal from "sweetalert2";

const ProductCard = ({ product, addToCart }) => {

  const handleAdd = () => {
    addToCart(product);

    Swal.fire({
      title: "Producto agregado 🛒",
      text: `${product.name} se agregó al carrito`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <h3>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>

      <button style={styles.button} onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0"
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;