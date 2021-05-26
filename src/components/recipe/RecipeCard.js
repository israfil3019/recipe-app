import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="card w-25">
      <img className="card-img-top" src={recipe.recipe.image} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href={recipe.recipe.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Look
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
