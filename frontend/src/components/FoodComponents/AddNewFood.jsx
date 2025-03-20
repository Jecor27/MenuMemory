import useAddNewFoodStore from "../store/addNewFoodStore";
import { useNavigate } from "react-router-dom";

export default function NewFoodForm() {
  const {newFoodRecipe, handleAddIngredient, handleRemoveIngredient, handleUpdateIngredient, handleUpdateRecipe, handleSubmit} = useAddNewFoodStore();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRecipeId = await handleSubmit(e);
    if (newRecipeId) {
      navigate(`/foods/${newRecipeId}`);
    }
  };

  return (
    <div className="form-container page">
      <h1 className="text-center fw-bold">Add Recipe</h1>
      <form onSubmit={handleFormSubmit} className="form flow">
        <label>
          Name:
          <input
            type="text"
            value={newFoodRecipe.name}
            onChange={(e) => handleUpdateRecipe("name", e.target.value)}
            className="input"
          />
        </label>
        <h2 className="fw-bold">Ingredients:</h2>
        {newFoodRecipe.ingredients.map((ingredient, index) => (
          <div key={ingredient._id} className="ingredient flow">
            <input
              type="text"
              value={ingredient.name}
              onChange={(e) =>
                handleUpdateIngredient(index, "name", e.target.value)
              }
              placeholder="Ingredient name"
              className="input"
            />
            <input
              type="text"
              value={ingredient.amount}
              onChange={(e) =>
                handleUpdateIngredient(index, "amount", e.target.value)
              }
              placeholder="Amount"
              className="input"
            />
            <input
              type="text"
              value={ingredient.unit}
              onChange={(e) =>
                handleUpdateIngredient(index, "unit", e.target.value)
              }
              placeholder="Unit"
              className="input"
            />
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              className="button"
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient} className="button">
          Add Ingredient
        </button>
        <label>
          Instructions:
          <textarea
            value={newFoodRecipe.instructions}
            onChange={(e) => handleUpdateRecipe("instructions", e.target.value)}
            className="textarea"
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
