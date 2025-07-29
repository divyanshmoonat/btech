import './App.css'
import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Enquiry from './pages/Enquiry/Enquiry';
import EnquiryUncontrolled from './pages/Enquiry/EnquiryUnctontrolled';
import EnquiryControlled from './pages/Enquiry/EnquiryControlled';
import EnquiryControlledOptimized from './pages/Enquiry/EnquiryControlledOptimized';

const App = () => {

  return (
    <div>
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs email="contact-us@xyz.com" mobNo="9999999999" /> */}
      {/* <Enquiry />
      <EnquiryUncontrolled /> */}
      {/* <EnquiryControlled /> */}
      <EnquiryControlledOptimized />
    </div>
  )
}

export default App;
