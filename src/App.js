import React from "react";

import Navbar from "./layout/Navbar";
import PriceCards from "./PriceCards";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <PriceCards />
      <Footer />
    </div>
  );
};

export default App;
