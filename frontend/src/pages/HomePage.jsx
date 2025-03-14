import { Link } from "react-router-dom";
import AllRecipes from "./allRecipesPage";

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Whisk & Pour</h1>
      </header>
      <div>
        <button>
          <Link to="/AllRecipes">All Recipes</Link>
        </button>
      </div>
    </div>
  );
}
