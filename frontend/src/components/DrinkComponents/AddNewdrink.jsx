import useAddNewDrinkStore from "../store/addNewDrinkStore";
import { useNavigate } from "react-router-dom";

export default function NewDrinkForm() {
  const {
    newDrinkRecipe,
    handleAddIngredient,
    handleRemoveIngredient,
    handleUpdateIngredient,
    handleUpdateRecipe,
    handleSubmit,
  } = useAddNewDrinkStore();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    const newRecipeId = await handleSubmit(e);
    if (newRecipeId) {
      navigate(`/drinks/${newRecipeId}`);
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
            value={newDrinkRecipe.name}
            onChange={(e) => handleUpdateRecipe("name", e.target.value)}
          />
        </label>
        <br />
        <label>
          Alcohol Content:
          <select
            value={newDrinkRecipe.alcoholContent ? "true" : "false"}
            onChange={(e) =>
              handleUpdateRecipe("alcoholContent", e.target.value === "true")
            }
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <h2>Ingredients:</h2>
        {newDrinkRecipe.ingredients.map((ingredient, index) => (
          <div key={ingredient._id}>
            <input
              type="text"
              value={ingredient.name}
              onChange={(e) =>
                handleUpdateIngredient(index, "name", e.target.value)
              }
              placeholder="Ingredient name"
            />
            <input
              type="text"
              value={ingredient.amount}
              onChange={(e) =>
                handleUpdateIngredient(index, "amount", e.target.value)
              }
              placeholder="Amount"
            />
            <input
              type="text"
              value={ingredient.unit}
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
        <br />
        <label>
          Category:
          <select
            value={newDrinkRecipe.category}
            onChange={(e) => handleUpdateRecipe("category", e.target.value)}
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
        <br />
        <label>
          Glass type:
          <select
            value={newDrinkRecipe.glassType}
            onChange={(e) => handleUpdateRecipe("glassType", e.target.value)}
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
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
