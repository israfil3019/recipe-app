import "./App.scss";
import Form from "./components/header/Form";
import RecipeCard from "./components/recipe/RecipeCard";
import loadingGif from "./assets/loading.gif";
import notFound from "./assets/404.png";
import axios from "axios";
import { useState } from "react";
import Login from "./components/login/Login";

function App() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState();

  const myQuery = (search) => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.edamam.com/search?q=${search}&app_id=29c86000&app_key=
      c2fef008c438b5be9b169e880322ef25`,
    })
      .then((res) => {
        console.log(res.data.hits);
        setRecipes(res.data.hits);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <Login />
      <Form myQuery={myQuery} />
      {recipes?.length === 0 ? (
        <img className="notfound" src={notFound} alt="not found" />
      ) : null}
      {loading ? (
        <img className="loading" src={loadingGif} alt="loading" />
      ) : null}
      {recipes?.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  );
}

export default App;
