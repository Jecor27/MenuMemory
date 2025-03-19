import AllRecipes from "../components/allrecipes";

export default function AllRecipesPage({ recipes }) {
  //console.log(recipes);
  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <AllRecipes key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}
