export default function AllRecipes({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      {recipe?.category && <p>Category: {recipe.category}</p>}
      {recipe?.glassType && <p>Glass Type: {recipe.glassType}</p>}
      <p>{recipe.instructions}</p>
    </div>
  );
}
