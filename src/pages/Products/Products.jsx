import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar className="ratings-star" />
              <FaStar className="ratings-star" />
              <FaStar className="ratings-star" />
              <FaStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>
                <span>200</span>
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>{" "}
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>{" "}
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>{" "}
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>
                <span>200</span>
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
