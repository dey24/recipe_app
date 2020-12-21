import React, {useEffect, useState} from 'react';
import "./App.css"

const App = () => {

  const APP_ID = '11d4be7e';
  const APP_KEY = '964916610369cf5ccdf7165f39eef5d0';
  

  useEffect(() =>{
    getRecipes();
  }, [])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
