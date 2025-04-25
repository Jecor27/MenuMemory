import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function DisplayRecipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  async function getRecipe() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/drinks/${params.id}`
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
    <div className="page">
      <h2 className="text-center fw-bold">{recipe.name}</h2>
      <h3 className="fw-bold">Ingredients:</h3>
      <ul className="flow">
        {recipe.ingredients?.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} - {ingredient.amount} {ingredient.unit}
          </li>
        ))}
      </ul>
      <p>Category: {recipe.category}</p>
      <p>Glass Type: {recipe.glassType}</p>
      <h3 className="fw-bold">Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
