// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import { AppContext } from "../../context/AppContext";

const Header = (props) => {
  // console.log(props);
  // const ctx = useContext(AppContext);
  // console.log(ctx);
  const data = useSelector((state) => state); // state -> Redux state/store
  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
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
          <Link to={"/articles"}>Articles</Link>
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
          {/* <button onClick={() => {
            props.updateLoginStatus(true)
          }}>Login</button> */}
        </li>
      </ul>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
        }}
      >
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        {data.user.isLoggedIn && (
          <li style={{ fontWeight: "bold" }}>{data.user.userDetails.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Header;
