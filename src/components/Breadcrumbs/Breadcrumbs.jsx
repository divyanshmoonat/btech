import { Link, useLocation, matchPath } from "react-router-dom";

import { routes } from "../../App";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const paths = pathname.split("/").filter((p) => p); // Filter out empty paths
//   console.log(paths);
  /**
     * 
pathname:"/articles/1"
/ => Home
/articles => Article List
/articles/1 => Article Detail
/articles/1/SOMETING => XYZ

     */
  // console.log(routes);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {paths.map((path, index) => {
          const route = `/${paths.slice(0, index + 1).join("/")}`;
          const routeName = routes.find((x) => matchPath(x.path, route))?.name;
        //   console.log("ROUTE", route);
          return (
            <>
              /<Link to={route}>{routeName}</Link>
            </>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumbs;
