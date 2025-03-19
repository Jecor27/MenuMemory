import { useEffect } from "react";
import useStore from "./components/store/store.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx";

//pages
import AllRecipesPage from "./pages/AllRecipesPage.jsx";
import DrinkList from "./pages/DrinkListPage.jsx";
import FoodList from "./pages/FoodListPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddNewFoodPage from "./pages/AddNewFoodPage.jsx";
import DisplayRecipe from "./pages/DisplayRecipe.jsx";

function App() {
  const { recipes, fetchRecipes } = useStore();

  useEffect(() => {
    fetchRecipes();
  }, []);
  //console.log(recipes);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/AllRecipes"
          element={<AllRecipesPage recipes={recipes} />}
        />
        <Route
          path="/foods/:id"
          element={<DisplayRecipe recipes={recipes} />}
        />
        <Route path="/foods/addNewFood" element={<AddNewFoodPage />} />
        <Route path="/drinks" element={<DrinkList recipes={recipes} />} />
        <Route path="/foods" element={<FoodList recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
