import AllRecipes from "../components/allrecipes";
import { useEffect } from "react";
import useStore from "../components/store/store";

export default function AllRecipesPage() {
  //console.log(recipes);
  const { recipes, fetchRecipes } = useStore();

  useEffect(() => {
    fetchRecipes();
  }, []);


  return (
    <div>
      <h1 className="text-center fw-bold">All Recipes</h1>
      {recipes.map((recipe) => (
        <AllRecipes key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}
