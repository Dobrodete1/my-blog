import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogEndries from "./components/BlogEndries";
import IntrodactionMenu from "./components/IntroductionMenu/IntrodactionMenu";

const App = () => {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: 1400 }}>
        <Header />
        <div className="w3-row">
          <BlogEndries />
          <IntrodactionMenu />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
