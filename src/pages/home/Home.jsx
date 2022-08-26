import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from '../../components/header/Header'
const Home = () => {
  const mealType = ['Breakfast' , 'Lunch' , 'Dinner', 'Snack' , 'Teatime']
  const [query, setQuery] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [recipes, setRecipes] = useState("")

  const APP_ID="e4feea44";
  const APP_KEY="7b8e8ffe84ef720248665bf5349e043b"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  
  
  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal}/>
    </div>
  )
}

export default Home