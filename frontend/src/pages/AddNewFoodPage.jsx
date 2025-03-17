import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../components/store";
export default function AddNewFoodPage() {
  const navigate = useNavigate();
  const { addRecipe } = useStore();

  const [ingredients, setIngredients] = useState([
    { name: "", amount: "", unit: "" },
  ]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleUpdateIngredient = (index, field, value) => {
    setIngredients(
      ingredients.map((ingredient, i) =>
        i === index ? { ...ingredient, [field]: value } : ingredient
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = {
      name: "",
      ingredients,
      instructions: "",
    };
    const newRecipeId = await addRecipe(recipe);
    navigate(`/foods/${newRecipeId}`);
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
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
              placeholder="Unit (optional)"
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
          <input type="text" />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
