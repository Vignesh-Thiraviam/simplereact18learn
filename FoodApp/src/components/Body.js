import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestaurant, setListOfRestaurants] = useState([
        {
            "restaurantId": 1,
            "name": "Pizza Palace",
            "address": "123 Main St, Springfield",
            "cuisine": "Italian",
            "rating": 4.5
        },
        {
            "restaurantId": 2,
            "name": "KFC",
            "address": "123 Main St, Springfield",
            "cuisine": "Italian",
            "rating": 3.5
        },
        {
            "restaurantId": 3,
            "name": "Dominos",
            "address": "123 Main St, Springfield",
            "cuisine": "Italian",
            "rating": 4.2
        }
    
    ]);

    const [searchRestaurant,setSearchRestaurant] = useState("");

    const apiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING';

    useEffect(() => {
        console.log("Use effect called");
        // setListOfRestaurants([]);
    }, []);

    // Conditional rendering
    if(listOfRestaurant.length === 0){
        return (<div>
            <Shimmer />
            </div>
        )
    }
    return (
        <div className="body">
            <div className="topBody">
            <div className="filter">
                <button className="filter-btn" 
                onClick={ () => { 
                    const filteredRest = listOfRestaurant.filter(
                        (res) => res.rating > 4
                     );
                    console.log(filteredRest);
                    setListOfRestaurants(filteredRest);
                }}
                >Top rated restaurants</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Enter your restaurant" value={searchRestaurant} onChange={ (event) => {
                    console.log("Event getting changed");
                    console.log(event.target.value);
                    setSearchRestaurant(event.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                                        const filteredRest = listOfRestaurant.filter(
                                            (res) => res.name.includes(searchRestaurant)
                                         );
                                        console.log(filteredRest);
                                        setListOfRestaurants(filteredRest);
                }}>find</button>
            </div>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map( restaurant => <RestaurantCard  key = {restaurant.restaurantId} resData = {restaurant}/>)
                }
            </div>

        </div>
    )
}

export default Body;