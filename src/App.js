import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './components/Recipe';
import Alert from './components/Alert';


function App() {
  const [query , setQuery] = useState('');
  const [recipes , setRecipes] = useState([]);
  const [alert , setAlert] = useState('');
  const APP_KEY= process.env.REACT_APP_KEY;
  const APP_ID= process.env.REACT_APP_ID;
  const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async ()  => {
    if(query !== ''){
      const res = await Axios.get(url);
      if(!res.data.more){
        return setAlert("No food with such name");
      }
      setRecipes(res.data.hits);
      console.log(res);
      setAlert('');
      setQuery('');
    }else
      setAlert("Please fill the form");
  }
  const onChange = (e) => {
    setQuery(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getData(); 
  }

  return (
    <div className="App">
      <h1> Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== '' && <Alert alert={alert}/>}
        <input 
          onChange={onChange}
          type="text" 
          placeholder="Search Food" 
          autoComplete="off" 
          value={query}
        />
        <input 
          type="submit" 
          value="search" 
        />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe ,i) => 
          <Recipe key={i} recipe={recipe}/>
        )}
      </div>
    </div>
  );
}

export default App;
