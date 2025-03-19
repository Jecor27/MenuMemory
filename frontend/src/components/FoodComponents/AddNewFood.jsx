// import { useNavigate } from "react-router-dom";
// import useAddNewFoodStore from "../store/addNewFoodStore";
// import { useEffect } from "react";
import useAddNewFoodStore from "../store/addNewFoodStore";
import { useNavigate } from "react-router-dom";

export default function NewFoodForm() {
  const {
    newFoodRecipe,
    handleAddIngredient,
    handleRemoveIngredient,
    handleUpdateIngredient,
    handleUpdateRecipe,
    handleSubmit,
  } = useAddNewFoodStore();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    const newRecipeId = await handleSubmit(e);
    if (newRecipeId) {
      navigate(`/foods/${newRecipeId}`);
    }
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newFoodRecipe.name}
            onChange={(e) => handleUpdateRecipe("name", e.target.value)}
          />
        </label>
        <br />
        <h2>Ingredients:</h2>
        {newFoodRecipe.ingredients.map((newFoodRecipe, index) => (
          <div key={index}>
            <input
              type="text"
              value={newFoodRecipe.name}
              onChange={(e) =>
                handleUpdateIngredient(index, "name", e.target.value)
              }
              placeholder="Ingredient name"
            />
            <input
              type="text"
              value={newFoodRecipe.amount}
              onChange={(e) =>
                handleUpdateIngredient(index, "amount", e.target.value)
              }
              placeholder="Amount"
            />
            <input
              type="text"
              value={newFoodRecipe.unit}
              onChange={(e) =>
                handleUpdateIngredient(index, "unit", e.target.value)
              }
              placeholder="Unit"
            />
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <label>
          Instructions:
          <textarea
            value={newFoodRecipe.instructions}
            onChange={(e) => handleUpdateRecipe("instructions", e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
