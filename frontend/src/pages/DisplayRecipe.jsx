import AllRecipes from "../components/allrecipes";

export default function DisplayRecipe({ recipe }) {
  return (
    <div>
      <AllRecipes recipe={recipe} />
    </div>
  );
}
