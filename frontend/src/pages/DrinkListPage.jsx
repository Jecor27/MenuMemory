import { Link } from "react-router-dom";
import DrinkList from "../components/DrinkComponents/DrinkList";

export default function DrinkListPage({ recipes }) {
  const drinksRecipes = recipes.filter((recipe) => recipe.type === "drink");

  return (
    <div className="page">
      <h1 className="text-center fw-bold">Drinks</h1>
      <div className="section-padding">
        <button className="button">
          <Link to="/drinks/addNewDrink" className="nav__link">
            Add New Recipe
          </Link>
        </button>
      </div>
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
