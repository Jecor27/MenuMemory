import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DisplayRecipe({ recipes }) {
  const params = useParams();
  //console.log(params.id);

  const [recipe, setRecipe] = useState({});

  async function getRecipe() {
    try {
      const response = await axios.get(
        `http://localhost:8080/foods/${params.id}`
      );
      setRecipe(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getRecipe();
  }, [params]);

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients?.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
