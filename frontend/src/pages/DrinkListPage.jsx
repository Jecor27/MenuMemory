import { Link } from "react-router-dom";
import DrinkList from "../components/DrinkComponents/DrinkList";
import { useState, useEffect } from "react";

export default function DrinkListPage() {

  const [recipes, setRecipes] = useState([]);

  async function getDrink() {
    try {
      const response = await fetch("http://localhost:8080/drinks");
      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getDrink();
  }, []);

  async function handleDelete(id) {
    await fetch(`http://localhost:8080/drinks/${id}`, {
      method: "DELETE",
    });
    getDrink();
  }

  return (
    <div className="page">
      <h1 className="text-center fw-bold">Drinks</h1>
      <div className="section-padding">
        <button className="button">
          <Link to="/drinks/addNewDrink" className="nav__link">
            Add New Recipe
          </Link>
        </button>
      </div>
      <ul className="card">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <DrinkList recipe={recipe} onDelete={handleDelete}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
