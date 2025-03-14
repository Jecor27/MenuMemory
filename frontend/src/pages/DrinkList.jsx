export default function DrinkList({ recipes }) {
  const drinksRecipes = recipes.filter((recipe) => recipe.type === "drink");

  return (
    <div>
      <h1>Drinks Recipes</h1>
      <ul>
        {drinksRecipes.map((recipe) => (
          <li key={recipe._id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
