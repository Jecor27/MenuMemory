import useAddNewFoodStore from "../store/addNewFoodStore";
import { useNavigate } from "react-router-dom";

export default function NewFoodForm() {
  // Destructure the state and functions from the Zustand store
  const {
    newFoodRecipe, // The current state of the new food recipe
    handleAddIngredient, // Function to add a new ingredient to the recipe
    handleRemoveIngredient, // Function to remove an ingredient from the recipe
    handleUpdateIngredient, // Function to update an ingredient's details
    handleUpdateRecipe, // Function to update the recipe's details
    handleSubmit, // Function to handle form submission
  } = useAddNewFoodStore();

  const navigate = useNavigate();

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRecipeId = await handleSubmit(e); // Submit the form and get the new recipe ID
    if (newRecipeId) {
      navigate(`/foods/${newRecipeId}`); // Navigate to the new recipe's page
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
            value={newFoodRecipe.name} // Bind the input value to the recipe name
            onChange={(e) => handleUpdateRecipe("name", e.target.value)} // Update the recipe name on change
            className="input"
          />
        </label>
        <h2 className="fw-bold">Ingredients:</h2>
        {newFoodRecipe.ingredients.map((ingredient, index) => (
          <div key={ingredient._id} className="ingredient flow">
            <input
              type="text"
              value={ingredient.name} // Bind the input value to the ingredient name
              onChange={
                (e) => handleUpdateIngredient(index, "name", e.target.value) // Update the ingredient name on change
              }
              placeholder="Ingredient name"
              className="input"
            />
            <input
              type="text"
              value={ingredient.amount} // Bind the input value to the ingredient amount
              onChange={
                (e) => handleUpdateIngredient(index, "amount", e.target.value) // Update the ingredient amount on change
              }
              placeholder="Amount"
              className="input"
            />
            <input
              type="text"
              value={ingredient.unit} // Bind the input value to the ingredient unit
              onChange={
                (e) => handleUpdateIngredient(index, "unit", e.target.value) // Update the ingredient unit on change
              }
              placeholder="Unit"
              className="input"
            />
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)} // Remove the ingredient on click
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
            value={newFoodRecipe.instructions} // Bind the textarea value to the recipe instructions
            onChange={(e) => handleUpdateRecipe("instructions", e.target.value)} // Update the recipe instructions on change
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
