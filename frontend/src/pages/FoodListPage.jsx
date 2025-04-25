import { Link } from "react-router-dom";
import FoodList from "../components/FoodComponents/FoodList.jsx";
import { useState, useEffect } from "react";

export default function FoodListPage() {


    const [recipes, setRecipes] = useState([]);
  
    async function getFood() {
      try {
        const response = await fetch("http://localhost:8080/api/foods");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.error(err.message);
      }
    }
  
    useEffect(() => {
      getFood();
    }, []);
  
    async function handleDelete(id) {
      await fetch(`http://localhost:8080/api/foods/${id}`, {
        method: "DELETE",
      });
      getFood();
    }

  return (
    <div className="page">
      <h1 className="text-center fw-bold">Grub</h1>
      <div className="section-padding">
        <button className="button">
          <Link to="/foods/addNewFood" className="nav__link">
            Add New Recipe
          </Link>
        </button>
      </div>
      <ul className="card">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <FoodList recipe={recipe} onDelete={handleDelete}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
