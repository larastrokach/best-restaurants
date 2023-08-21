
import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [restaurant, setRestaurant] = useState (0);
  const {id, name, description, address, image} = data[restaurant];

 
   


  const previousRestaurant = () => {
    setRestaurant ((restaurant => {
      restaurant --;
      if (restaurant < 0) {
        restaurant = data.length-1;
      }
      return restaurant;
    }))
  }
  

  const nextRestaurant = () => {
    setRestaurant ((restaurant => {
      restaurant ++;
      if (restaurant > data.length-1) {
        restaurant =0;
      }
      return restaurant;
    }))
  }

  

     return ( <div>
 <div className="container" >
      <h1>5 of the Best Restaurants in Prague</h1>
    </div>

      <div className="container" >
        <img src={image} width = "400px" alt="restaurant" />
        </div>
      <div className="container" >
      <h2>{id}. {name}</h2>
    </div>
    <div className="container" >
      <p>{description}</p>
    </div>
    <div className="container" >
      <p>{address}</p>
    </div>

    <div className="btn container">
      <button onClick ={previousRestaurant}>Previous</button>
      <button onClick ={nextRestaurant}>Next</button>
    </div>
    </div>)
}

export default App;
