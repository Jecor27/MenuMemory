export default function NewFoodForm({
  ingredients,
  handleAddIngredient,
  handleRemoveIngredient,
  handleUpdateIngredient,
  newFoodRecipe,
  handleUpdateRecipe,
  handleSubmit,
}) {
  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newFoodRecipe.name}
            onChange={(e) => handleUpdateRecipe("name", e.target.value)}
          />
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
          <input
            type="text"
            value={newFoodRecipe.instructions}
            onChange={(e) => handleUpdateRecipe("instructions", e.target.value)}
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
