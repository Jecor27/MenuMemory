import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="page text-center">
      <header>
        <h1 className="fw-bold">Whisk & Pour</h1>
      </header>
      <div className="section-padding">
        <button className="button">
          <Link to="/AllRecipes" className="nav__link">
            All Recipes
          </Link>
        </button>
      </div>
    </div>
  );
}
