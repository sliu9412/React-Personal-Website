import React from "react";
import HeaderNavigator from "./Components/HeaderNavigator";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div>
      <HeaderNavigator></HeaderNavigator>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
