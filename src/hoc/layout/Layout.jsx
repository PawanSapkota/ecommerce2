import React from "react";
import Toolbar from "../../components/navigation/Toolbar";
import { Outlet } from "react-router-dom";

const Layout = ({  }) => {
  return (
    <div>     
        <Toolbar />      
          <div className="bg-gray-100">
        {<Outlet/>}
        </div>
    </div>
  );
};

export default Layout;
