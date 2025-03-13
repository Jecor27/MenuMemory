import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import AllPostsPage from "./pages/AllRecipesPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
