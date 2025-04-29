import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "../components/store/recipeStore";

export default function DisplayRecipe() {
  const params = useParams();
  const { currentRecipe, getFoodRecipe, isLoading, error } = useRecipeStore();

  useEffect(() => {
    getFoodRecipe(params.id);
  }, [params.id, getFoodRecipe]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentRecipe) return <div>Recipe not found</div>;

  return (
    <div className="page">
      <h2 className="text-center fw-bold">{currentRecipe.name}</h2>
      <h3 className="fw-bold">Ingredients:</h3>
      <ul className="flow">
        {currentRecipe.ingredients?.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount} {ingredient.unit}
          </li>
        ))}
      </ul>
      <h3 className="fw-bold">Instructions:</h3>
      <p>{currentRecipe.instructions}</p>
    </div>
  );
}
