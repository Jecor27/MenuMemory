import { Link } from "react-router-dom";
import DrinkList from "../components/DrinkComponents/DrinkList";

export default function DrinkListPage({ recipes }) {
  const drinksRecipes = recipes.filter((recipe) => recipe.type === "drink");

  return (
    <div>
      <h1>Drinks</h1>
      <button>
        <Link to="/drinks/addNewDrink">Add New Recipe</Link>
      </button>
      <ul>
        {drinksRecipes.map((recipe) => (
          <li key={recipe._id}>
            <DrinkList recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
