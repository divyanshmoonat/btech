import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Enquiry from './pages/Enquiry/Enquiry';
import EnquiryUncontrolled from './pages/Enquiry/EnquiryUnctontrolled';
import EnquiryControlled from './pages/Enquiry/EnquiryControlled';
import EnquiryControlledOptimized from './pages/Enquiry/EnquiryControlledOptimized';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/enquiry",
    element: <EnquiryControlledOptimized />
  }
]);

const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
