import React from "react";
import LandingPageLogic from "./LandingPageLogic";

import "../Styles/LandingPage.css";
import Navbar from "../Navbar/LandingPageNavbar";

const CustomerPage = () => {
  const { redirectToClinicPage, redirectToCustomerPage } = LandingPageLogic();

  return (
    <div>
      <Navbar />
      <section>
        <div className="circle" style={{ background: "orange" }}></div>
        <div className="content">
          <div className="textBox">
            <h2>
              Welcome to{" "}
              <span style={{ color: "orange" }}>Petbox for customers</span>
            </h2>
            <p>
              Petbox for customers allows you to stay up to date with your
              favorite clinic, to make online appointments, to ask questions and
              to see your pet information.
            </p>
            <a
              href="http://localhost:3001/login"
              style={{ background: "orange" }}
            >
              Login into your customer account
            </a>
          </div>
          <a href="/clinicPage">
            <div className="imgBox">
              <img
                src="https://cdn.shopify.com/s/files/1/0040/5317/2339/products/printypet9_900x.png?v=1548857905"
                alt="pet"
                className="petImage"
                style={{ marginTop: "-110px", width: "700px" }}
              />
            </div>
          </a>
        </div>
        <ul className="thumb">
          <li>
            <img
              src="https://cdn2.iconfinder.com/data/icons/general-health-1/24/clinic2-512.png"
              alt="clinicSide"
              onClick={redirectToClinicPage}
            />
          </li>
          <li>
            <img
              src="https://static.thenounproject.com/png/2404351-200.png"
              alt="clientSide"
              onClick={redirectToCustomerPage}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CustomerPage;
