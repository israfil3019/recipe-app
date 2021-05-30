import React, { useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./homeStyle";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

// const APP_KEY = process.env.REACT_APP_API_KEY;
// const APP_ID = process.env.REACT_APP_API_ID;

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "29c86000";
const APP_KEY = "c2fef008c438b5be9b169e880322ef25";
console.log(APP_KEY, APP_ID);

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.status === 200) {
        setRecipes(result.data.hits);
      }
    } else {
      alert("Please fill the form!");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
