import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Enquiry from "./pages/Enquiry/Enquiry";
import EnquiryUncontrolled from "./pages/Enquiry/EnquiryUnctontrolled";
import EnquiryControlled from "./pages/Enquiry/EnquiryControlled";
import EnquiryControlledOptimized from "./pages/Enquiry/EnquiryControlledOptimized";
import Layout from "./components/Layout/Layout";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import ArticlesList from "./pages/ArticlesList/ArticlesList";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home"
  },
  {
    path: "/articles",
    element: <ArticlesList />,
    name: "Articles List"
  },
  {
    path: "/articles/:articleId",
    element: <ArticleDetails />,
    name: "Article Details"
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    name: "About Us"
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    name: "Contact Us"
  },
  {
    path: "/enquiry",
    element: <EnquiryControlledOptimized />,
    name: "Enquiry Form"
  }
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
