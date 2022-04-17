import React from "react";
import "./style.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import data from "./data/data.json";
const App = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  );
};

export default App;
