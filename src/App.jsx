import './App.css'
import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Enquiry from './pages/Enquiry/Enquiry';
import EnquiryUncontrolled from './pages/Enquiry/EnquiryUnctontrolled';

const App = () => {

  return (
    <div>
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs email="contact-us@xyz.com" mobNo="9999999999" /> */}
      <Enquiry />
      <EnquiryUncontrolled />
    </div>
  )
}

export default App;
