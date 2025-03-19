import { Link } from "react-router-dom";
import FoodList from "../components/FoodComponents/FoodList.jsx";

export default function FoodListPage({ recipes }) {
  const FoodRecipes = recipes.filter((recipe) => recipe.type === "food");

  return (
    <div className="page">
      <h1 className="text-center fw-bold">Grub</h1>
      <div className="section-padding">
        <button className="button">
          <Link to="/foods/addNewFood" className="nav__link">
            Add New Recipe
          </Link>
        </button>
      </div>
      <ul>
        {FoodRecipes.map((recipe) => (
          <li key={recipe._id}>
            <FoodList recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
