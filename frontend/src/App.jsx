import react, { useEffect } from "react";
import useStore from "./components/store";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx";

//pages
import AllRecipesPage from "./pages/AllRecipesPage.jsx";
import DrinkList from "./pages/DrinkListPage.jsx";
import FoodList from "./pages/FoodListPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const { recipes, fetchRecipes } = useStore();

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/AllRecipes"
          element={<AllRecipesPage recipes={recipes} />}
        />
        <Route path="/drinks" element={<DrinkList recipes={recipes} />} />
        <Route path="/foods" element={<FoodList recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
