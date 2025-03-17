import FoodList from "../components/FoodComponents/FoodList.jsx";
export default function FoodListPage({ recipes }) {
  const FoodRecipes = recipes.filter((recipe) => recipe.type === "food");

  return (
    <div>
      <h1>Grub</h1>
      <ul>
        {FoodRecipes.map((recipe) => (
          <li key={recipe._id}>
            <FoodList recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
