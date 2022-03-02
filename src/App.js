import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <TextForm heading="Enter the text to Analyse: " />
    </>
  );
}

export default App;
