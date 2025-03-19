import NewFoodForm from "../components/FoodComponents/AddNewFood.jsx";

export default function AddNewFoodPage() {
  // const [ingredients, setIngredients] = useState([
  //   { name: "", amount: "", unit: "" },
  // ]);

  // const handleAddIngredient = () => {
  //   setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  // };

  // const handleRemoveIngredient = (index) => {
  //   setIngredients(ingredients.filter((_, i) => i !== index));
  // };

  // const handleUpdateIngredient = (index, field, value) => {
  //   setIngredients(
  //     ingredients.map((ingredient, i) =>
  //       i === index ? { ...ingredient, [field]: value } : ingredient
  //     )
  //   );
  // };

  // const handleUpdateRecipe = (field, value) => {
  //   // console.log(field, value);
  //   updateNewFoodRecipe(field, value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const recipe = { ...newFoodRecipe, ingredients };
  //   const newRecipeId = await addRecipe(recipe);
  //   navigate(`/foods/${newRecipeId}`);
  // };

  return (
    <div>
      <NewFoodForm />
    </div>
  );
}
