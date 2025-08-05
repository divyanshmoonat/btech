import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <li>
          {/* <a href="/">Home</a> */}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {/* <a href="/about-us">About Us</a> */}
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>
          {/* <a href="/contact-us">Contact Us</a> */}
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
        <li>
          {/* <a href="/enquiry">Enquiry</a> */}
          <Link to={"/enquiry"}>Enquiry</Link>
        </li>
      </ul>
      <ul></ul>
    </div>
  );
};

export default Header;
