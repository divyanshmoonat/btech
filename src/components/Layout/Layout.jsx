import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useState } from "react";

const Layout = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  console.log("isLoggedIn", isLoggedIn);
  const updateLoginStatus = (loggedIn) => {
    console.log("Update login status called");
    setLoggedIn(loggedIn);
  };

  return (
    <>
      {/* Header */}
      {/* Content */}
      {/* Footer */}

      <Header updateLoginStatus={updateLoginStatus} />
      <Breadcrumbs />
      <Outlet />
    </>
  );
};

export default Layout;
