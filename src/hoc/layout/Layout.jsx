import React from "react";
import Toolbar from "../../components/navigation/Toolbar";
import CartContextApi from "../context/CartContext";

const Layout = ({ children }) => {
  return (
    <div>
      <CartContextApi>
        <Toolbar />
      </CartContextApi>
      <div className="bg-gray-100">{children}</div>
    </div>
  );
};

export default Layout;
