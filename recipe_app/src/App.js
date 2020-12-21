import React, {useEffect, useState} from 'react';
import "./App.css"

const App = () => {

  const APP_ID = '11d4be7e';
  const APP_KEY = '964916610369cf5ccdf7165f39eef5d0';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    console.log('Effect is running');
  })



  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}

export default App;
