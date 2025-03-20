import React from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
        />
      </div>
      <div className="profile-container">
        <a href="#" className="nav-icons">
          <FaRegHeart />
        </a>
        <a href="#" className="nav-icons">
          <FiShoppingCart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
