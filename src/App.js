import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Routing/Routing";

function App() {

  return (
      <div className="app">
        <Navbar />
        <Routing />
        <Footer />
      </div>
  );
}

export default App;
