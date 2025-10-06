import React from "react";
import "../../css/registration.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const RegistHome = () => {
  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration IRTC 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            {/* <a
              href="/homeindo"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a
              href="/"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Close Registration{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a
              href="/homeinter"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegistHome;
