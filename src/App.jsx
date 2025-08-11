import "./App.css";
import { lazy, Suspense, createContext, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import EnquiryControlledOptimized from "./pages/Enquiry/EnquiryControlledOptimized";
// import Layout from "./components/Layout/Layout";
// import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
// import ArticlesList from "./pages/ArticlesList/ArticlesList";
// import Login from "./pages/Login/Login";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import FallbackLoader from "./components/FallbackLoader/FallbackLoader";

const Home = lazy(() => import("./pages/Home/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const EnquiryControlledOptimized = lazy(() =>
  import("./pages/Enquiry/EnquiryControlledOptimized")
);
const Layout = lazy(() => import("./components/Layout/Layout"));
const ArticleDetails = lazy(() =>
  import("./pages/ArticleDetails/ArticleDetails")
);
const ArticlesList = lazy(() => import("./pages/ArticlesList/ArticlesList"));
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ErrorScreen = lazy(() => import("./components/ErrorScreen/ErrorScreen"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "/articles",
    element: <ArticlesList />,
    name: "Articles List",
  },
  {
    path: "/articles/:articleId",
    element: <ArticleDetails />,
    name: "Article Details",
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    name: "About Us",
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    name: "Contact Us",
  },
  {
    path: "/enquiry",
    element: <EnquiryControlledOptimized />,
    name: "Enquiry Form",
  },
  {
    path: "*", // Wildcard character
    element: <ErrorScreen />,
  },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

export const AppCtx = createContext();

const App = () => {
  const [state, setState] = useState({
    articlesList: [],
    userDetails: {
      name: "John",
      email: "john@example.com",
    },
  }); // Application's common state , NOT THE APP COMPONENT'S LOCAL STATE
  return (
    <div>
      <AppCtx.Provider value={{ state, setState }}>
        <Suspense fallback={<FallbackLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppCtx.Provider>
    </div>
  );
};

export default App;
