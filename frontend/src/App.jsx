import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

//pages
import AllRecipesPage from "./pages/AllRecipesPage.jsx";
import DrinkList from "./pages/DrinkListPage.jsx";
import FoodList from "./pages/FoodListPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddNewFoodPage from "./pages/AddNewFoodPage.jsx";
import AddNewDrinkPage from "./pages/AddNewDrinkPage.jsx";
import DisplayRecipe from "./pages/DisplayRecipe.jsx";
import DisplayDrinkRecipe from "./pages/DisplayDrinkRecipe.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AllRecipes" element={<AllRecipesPage />} />
        <Route path="/foods/:id" element={<DisplayRecipe />} />
        <Route path="/drinks/:id" element={<DisplayDrinkRecipe />} />

        <Route
          path="/drinks/addNewDrink"
          element={
            <ProtectedRoute>
              <AddNewDrinkPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods/addNewFood"
          element={
            <ProtectedRoute>
              <AddNewFoodPage />
            </ProtectedRoute>
          }
        />
        <Route path="/drinks" element={<DrinkList />} />
        <Route path="/foods" element={<FoodList />} />
      </Routes>
    </div>
  );
}

export default App;
