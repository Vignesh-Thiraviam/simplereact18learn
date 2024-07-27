import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestaurant, setListOfRestaurants] = useState([]);
    const [searchRestaurant,setSearchRestaurant] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // called after a component is rendered
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING', {
            headers: {
            'x-cors-api-key': 'temp_8518f8081b5e1938e9d45062b1593e2d'
            }
        })

        // const data = await fetch('https://corsproxy.io/?'+ encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'));
        const json = await data.json();
        // console.log(json);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(JSON.stringify(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]));
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false){
        return <h1> Looks like you are offline </h1>
    }

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    return (filteredRestaurants.length === 0) ? (<div>
    <Shimmer />
    </div>) : (
        <div className="body">
            <div className="bg-green-300 flex items-center">
                <div className="">
                    <button className="px-4 py-4 bg-green-400 m-2 rounded-lg" 
                    onClick={ () => { 
                        const filteredRest = listOfRestaurant.filter(
                            (res) => res.rating > 4
                        );
                        console.log(filteredRest);
                        setFilteredRestaurants(filteredRest);
                    }}
                    >Top rated restaurants</button>
                </div>
                <div className="m-4 p-4">
                    <input className="border border-solid border-black bg-blue-300" type="text" placeholder="Enter your restaurant" value={searchRestaurant} onChange={ (event) => {
                        setSearchRestaurant(event.target.value);
                    }} />
                    <button className="btn px-4 bg-green-400 m-4 rounded-lg" onClick={() => {
                                            const filteredRest = listOfRestaurant.filter((res) => {
                                                return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                                            }
                                            );
                                            console.log(filteredRest);
                                            setFilteredRestaurants(filteredRest);
                    }}>Search</button>
                </div>
            </div>
            <div className="flex flex-wrap bg-green-300">
                {
                    listOfRestaurant.map( restaurant => <Link key = {restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                        {restaurant.info.avgRating > 4.2 ? <RestaurantCardPromoted resData = {restaurant.info}/> : <RestaurantCard  resData = {restaurant.info}/>}
                        </Link>)
                }
            </div>

        </div>
    )
}

export default Body;