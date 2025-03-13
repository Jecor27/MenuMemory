import react, { useEffect } from "react";
import useStore from "../components/store";

export default function AllRecipesPage() {
  const { recipes, fetchRecipes } = useStore();

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name} - {ingredient.amount}
              </li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}
