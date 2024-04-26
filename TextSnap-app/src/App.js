import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [active, activePage] = useState("home");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const pageToActive = (pageToActive) => {
    activePage(pageToActive);
    console.log(pageToActive);
  }

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "dark" ? "black" : "white";
    document.body.style.color = newMode === "dark" ? "white" : "black";
    showAlert(`${newMode === "dark" ? "Dark" : "Light"} mode has been enabled`, "success");
  };

  return (
    <>
      <Navbar title="TextSnap" modePage={mode} toggleMode={toggleMode} activePage={pageToActive} page={active} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="Try TextSnap - Word Counter, Character Counter" mode={mode} />} />
        <Route path="about" element={ <About/> } />
      </Routes>
    </>
  );
}

export default App;
