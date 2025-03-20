import useAddNewDrinkStore from "../store/addNewDrinkStore";
import { useNavigate } from "react-router-dom";

export default function NewDrinkForm() {
  const {newDrinkRecipe, handleAddIngredient, handleRemoveIngredient, handleUpdateIngredient, handleUpdateRecipe, handleSubmit,} = useAddNewDrinkStore();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRecipeId = await handleSubmit(e);
    if (newRecipeId) {
      navigate(`/drinks/${newRecipeId}`);
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
            value={newDrinkRecipe.name}
            onChange={(e) => handleUpdateRecipe("name", e.target.value)}
            className="input"
          />
        </label>
        <label>
          Alcohol Content:
          <select
            value={newDrinkRecipe.alcoholContent ? "true" : "false"}
            onChange={(e) =>
              handleUpdateRecipe("alcoholContent", e.target.value === "true")
            }
            className="input"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <h2 className="fw-bold">Ingredients:</h2>
        {newDrinkRecipe.ingredients.map((ingredient, index) => (
          <div key={ingredient.id} className="ingredient flow">
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
          Category:
          <select
            value={newDrinkRecipe.category}
            onChange={(e) => handleUpdateRecipe("category", e.target.value)}
            className="input"
          >
            <option value="Cocktail">Cocktail</option>
            <option value="Mocktail">Mocktail</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
            <option value="Juice">Juice</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Glass type:
          <select
            value={newDrinkRecipe.glassType}
            onChange={(e) => handleUpdateRecipe("glassType", e.target.value)}
            className="input"
          >
            <option value="Highball">Highball</option>
            <option value="Martini">Martini</option>
            <option value="Mug">Mug</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Instructions:
          <textarea
            value={newDrinkRecipe.instructions}
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
