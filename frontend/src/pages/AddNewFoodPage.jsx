import { store } from "../components/store";
export default function AddNewFoodPage() {
  const [newFoodRecipe, updateNewFoodRecipe, addNewFoodRecipe] = store();
  return (
    <div>
      <h1>Add New Recipe</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={newFoodRecipe.name}
            onChange={(e) => updateNewFoodRecipe("name", e.target.value)}
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            value={newFoodRecipe.ingredients}
            onChange={(e) => updateNewFoodRecipe("ingredients", e.target.value)}
          />
        </label>
        <label>
          Instructions:
          <input
            type="text"
            value={newFoodRecipe.instructions}
            onChange={(e) =>
              updateNewFoodRecipe("instructions", e.target.value)
            }
          />
        </label>
        <button type="button" onClick={addNewFoodRecipe}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}
