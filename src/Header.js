import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon"></SearchIcon>
        {/* Logo */}
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">
              Hello, {!user ? "Sign In" : user?.email}{" "}
            </span>
            <span className="header-optionLineTwo">Account & Lists</span>
          </div>
        </Link>

        <div className="header-option dropdown-menu">
          <span className="header-optionLineTwo">Returns</span>
          <span className="header-optionLineTwo"> & Orders</span>
          <ul className="dropdown">
            <li>Your Account </li>
            <li>Your Subscribe & Save Items</li>
            <li>Your Seller Account</li>
            <li>Your Amazon Business Account</li>
            <li>Your Recommendations</li>
            <li>Your Prime Membership</li>
            <li>Your Apps & Devices</li>
            <li>Your Music Library</li>
            <li>Your Kindle Unlimited</li>
            <li>Switch Accounts</li>
            <li onPress={() => auth.signOut()}>Sign Out</li>
          </ul>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <span className="header-optionLineOne">{basket?.length}</span>
            <span className="header-optionLineTwo header-basketCount">
              <AddShoppingCartIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
