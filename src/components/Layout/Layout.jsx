import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Layout = () => {
  return (
    <>
      {/* Header */}
      {/* Content */}
      {/* Footer */}

      <Header />
      <Breadcrumbs />
      <Outlet />
    </>
  );
};

export default Layout;
