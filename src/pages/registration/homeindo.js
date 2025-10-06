import React, { useState, useEffect } from "react";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../data/term";
import "../../css/registration.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link);
    setTermsContent(terms);
    setShowModal(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true");
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };

  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true);
    }
  }, []);

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM FOR INDONESIA PARTICIPANTS
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Competition for Registration IRTC 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            {/* <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/indo-online", indonesiaOnlineTerms)
              }
            >
              Online Competition <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/", )
              }
            >
              Close Registration <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/indo-offline", indonesiaOfflineTerms)
              }
            >
              Offline Competition <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/", )
              }
            >
              Close Registration <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Term & Conditions</h2>
            <div>{termsContent}</div>
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms"> I agree to the Term & Conditions</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Accept & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
     <Footer />
    </>
  );
}

export default HomeIndo;
