import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Electronicos Raul - Todos los derechos reservados</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "20px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#222",
    color: "#fff"
  }
};

export default Footer;