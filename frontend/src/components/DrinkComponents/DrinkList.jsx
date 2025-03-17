export default function DrinkList({ recipe }) {
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
      <p>Category: {recipe.category}</p>
      <p>Glass Type: {recipe.glassType}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}
