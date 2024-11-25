import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Testgrid.io</p>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#f1f1f1",
  textAlign: "center",
  padding: "10px 0",
  fontSize: "14px",
  color: "#333",
  borderTop: "1px solid #ddd",
};

export default Footer;
