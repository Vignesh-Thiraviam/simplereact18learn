import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1" , { id : "heading"}, "Welcome once more 🚀");


const HeadingComponent = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {

    const {resData} = props;

    const {name ,cuisine , rating  } = resData;

    return (
        <div className="res-card">
            <img className= "res-logo" alt="food items"  src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
        </div>
    )
}

const restObj = {
    "restaurants": [
      {
        "restaurantId": 1,
        "name": "Pizza Palace",
        "address": "123 Main St, Springfield",
        "cuisine": "Italian",
        "rating": 4.5,
        "menu": [
          {
            "itemId": 101,
            "itemName": "Margherita Pizza",
            "price": 12.99
          },
          {
            "itemId": 102,
            "itemName": "Caesar Salad",
            "price": 5.99
          }
        ]
      },
      {
        "restaurantId": 2,
        "name": "Burger Haven",
        "address": "456 Elm St, Springfield",
        "cuisine": "American",
        "rating": 4.7,
        "menu": [
          {
            "itemId": 201,
            "itemName": "Cheeseburger",
            "price": 8.99
          },
          {
            "itemId": 202,
            "itemName": "French Fries",
            "price": 2.99
          }
        ]
      },
      {
        "restaurantId": 3,
        "name": "Sasi foods",
        "address": "789 Oak St, Springfield",
        "cuisine": "Japanese",
        "rating": 4.8,
        "menu": [
          {
            "itemId": 301,
            "itemName": "California Roll",
            "price": 10.99
          },
          {
            "itemId": 302,
            "itemName": "Miso Soup",
            "price": 3.99
          }
        ]
      }
    ]
  }
  
const BodyComponent = () =>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    restObj.restaurants.map( restaurant => <RestaurantCard  key = {restaurant.restaurantId} resData = {restaurant}/>)
                }
            </div>

        </div>
    )
}

const FooterComponent = () => {
    return ( <div className="footer">Footer </div>)
}
const Applayout = () => {
    return( 
    <div className= "app">
        <HeadingComponent />      
        <BodyComponent />  
        <FooterComponent />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);