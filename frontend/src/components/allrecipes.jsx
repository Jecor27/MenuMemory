export default function AllRecipes({ recipe }) {
  return (
    <div className="card">
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      {/* Conditionally render the category if it exists */}
      {recipe?.category && <p>Category: {recipe.category}</p>}
      {recipe?.glassType && <p>Glass Type: {recipe.glassType}</p>}
      <p>{recipe.instructions}</p>
    </div>
  );
}
