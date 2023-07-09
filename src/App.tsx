import React from "react";
import HeaderNavigator from "./Components/HeaderNavigator";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ArticlePage from "./Pages/ArticlePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div>
      <HeaderNavigator />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Articles" element={<ArticlePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
