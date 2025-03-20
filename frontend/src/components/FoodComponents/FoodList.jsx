export default function FoodList({ recipe, onDelete }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button className="delete-btn" onClick={() => onDelete(recipe._id)}>
        Delete recipe
      </button>
    </div>
  );
}
