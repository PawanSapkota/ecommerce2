import React from "react";
import Toolbar from "../../components/navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <div>
     
        <Toolbar />
      
      <div className="bg-gray-100">{children}</div>
    </div>
  );
};

export default Layout;
