export default function FoodList({ recipes }) {
  const FoodRecipes = recipes.filter((recipe) => recipe.type === "food");

  return (
    <div>
      <h1>Grub</h1>
      <ul>
        {FoodRecipes.map((recipe) => (
          <li key={recipe._id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
