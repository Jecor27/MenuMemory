import FoodList from "../components/FoodComponents/FoodList.jsx";
import { Link } from "react-router-dom";
export default function FoodListPage({ recipes }) {
  const FoodRecipes = recipes.filter((recipe) => recipe.type === "food");

  return (
    <div>
      <h1>Grub</h1>
      <button>
        <Link to="/foods/addNewFood">Add New Recipe</Link>
      </button>
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
