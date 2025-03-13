import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllPostsPage from "./pages/AllRecipesPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
