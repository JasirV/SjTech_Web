import React from "react";
import PageBanner from "../components/sections/pageBanner";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <PageBanner breadcrumbTitle={"404 Error"} />
      <section className="error section-padding">
        <div className="shape1 d-none d-lg-block float-bob-y">
          <img src="/images/shape/shape1.png" alt="shape1" />
        </div>
        <div className="shape2 d-none d-lg-block float-bob-y">
          <img src="/images/shape/shape2.png" alt="shape2" />
        </div>
        <div className="container">
          <h1 className="scale-animation ">
            4<span className="primary-color">0</span>4
          </h1>
          <h2>Oops! Page Not Found.</h2>
          <p>The page you are looking for was never existed.</p>
          <Link to="/" className="btn-one px-5 mt-40">
            <i>
              <FaArrowLeft />
            </i>{" "}
            <span>BACK HOME</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error;
