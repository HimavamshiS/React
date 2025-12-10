import React from "react";
import ReactDOM from "react-dom/client";
import SwiggyComponentBody from "./components/SwiggyComponentBody";
import itemListElement from "./utils/datajson";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

let AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div id="swiggycomponent">
        {/* <SwiggyComponentBody props={itemListElement} /> */}
        <SwiggyComponentBody />
      </div>
      <Footer />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
