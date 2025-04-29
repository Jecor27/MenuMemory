import { Link } from "react-router-dom";
import FoodList from "../components/FoodComponents/FoodList.jsx";
import { useEffect } from "react";
import useRecipeStore from "../components/store/recipeStore.js";
import useAuthStore from "../components/store/authStore";

export default function FoodListPage() {
  const { foodRecipes, getFoodRecipes, deleteRecipe, isLoading, error } =
    useRecipeStore();
  const { user } = useAuthStore();

  useEffect(() => {
    getFoodRecipes();
  }, [getFoodRecipes]);

  const handleDelete = async (id) => {
    await deleteRecipe(id, "food");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="page">
      <h1 className="text-center fw-bold">Grub</h1>
      {user && (
        <div className="section-padding">
          <button className="button">
            <Link to="/foods/addNewFood" className="nav__link">
              Add New Recipe
            </Link>
          </button>
        </div>
      )}
      <ul className="card">
        {foodRecipes.map((recipe) => (
          <li key={recipe._id}>
            <FoodList recipe={recipe} onDelete={user ? handleDelete : null} />
          </li>
        ))}
      </ul>
    </div>
  );
}
