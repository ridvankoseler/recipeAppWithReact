import React, { useState } from "react";
import axios from "axios";
import homeSvg from "../../assets/a.png";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.styled";
const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  //query sayfadaki search arama kısmına yazdığımız değerdir.
  //SelectedMeal sayfadaki türlerdir.

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Enter your meal");
    }
  };
  // console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg style={{ width: "200px" }} src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (<HeaderText>The Food can not be found</HeaderText>)}
      {/*  ? recipe varsa length e bak demiş oluyoruz. */}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
