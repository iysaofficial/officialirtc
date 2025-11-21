import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import List2025 from "../../components/LoW/2025";

const ListOfWinner2025 = () => {
  return (
    <div className="body_wrapper">
      <Navigation/>
      <br />
      <br />
      <List2025 />
      <Footer />
    </div>
  );
};
export default ListOfWinner2025;