import React from "react";

const Cart = ({ cart, removeFromCart, finalizarCompra, mensajeCompra }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de Compras</h2>

      {/* 🟢 Mensaje */}
      {mensajeCompra && (
        <div style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          marginBottom: "10px"
        }}>
          {mensajeCompra}
        </div>
      )}

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={styles.item}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(index)}>
              Eliminar
            </button>
          </div>
        ))
      )}

      <h3>Total: ${total}</h3>

      {/* 🟢 BOTÓN DE COMPRA */}
      <button onClick={finalizarCompra} style={styles.buyButton}>
        Comprar
      </button>
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc"
  },
  buyButton: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Cart;