import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ListLow from "../../components/LoW/listlowcomponent";

const ListOfWinner = () => {
  return (
    <div className="body_wrapper">
      <Navigation />
      <br />
      <br />
      <ListLow />
      <Footer />
    </div>
  );
};
export default ListOfWinner;
