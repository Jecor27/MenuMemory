
// import handleDeleteStore from "../store/handleDeleteStore";


export default function DrinkList({ recipe, onDelete }) {


  return (
    <div>
      <h2>{recipe.name} </h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      <br></br>
      <p>Category: {recipe.category}</p>
      <p>Glass Type: {recipe.glassType}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button className="delete-btn" onClick={() => onDelete(recipe._id)}>Delete recipe</button>
    </div>
  );
}
