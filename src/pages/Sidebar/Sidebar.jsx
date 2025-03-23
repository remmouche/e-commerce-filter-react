import React from "react";
import "./Sidebar.css";
import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title"><TiShoppingCart/></h1>
        </div>
        <Category />
        <Colors />
        <Price />
      </section>
    </>
  );
}

export default Sidebar;
