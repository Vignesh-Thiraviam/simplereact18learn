import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetail = () => {
    const {resId} = useParams();

    const restaurantInfo = useRestaurantMenu(resId);
    // console.log(restaurantInfo);
    // console.log(JSON.stringify(restaurantInfo));

    const [showIndex , setShowIndex] = useState(0);

    if(restaurantInfo === null) return <div> <Shimmer /> </div>;

    const {name, cuisines , costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;

    const cards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(cards);
    const categories = cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    console.log(JSON.stringify(categories.length));

    return  (
       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 px-6 py-8 rounded-lg">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h1>
                <section className="text-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h2>
                <p className="leading-relaxed mb-4">
                    Welcome to {name}, where we serve a variety of mouth-watering
                    dishes made from the freshest ingredients. Join us for an
                    unforgettable dining experience.
                </p>
                <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                    Cost for Two: <span className="text-gray-700">{costForTwoMessage}</span>
                    </h4>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">Cuisines:</h4>
                    <p className="text-gray-700">{cuisines.join(", ")}</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">Categories:</h4>
                    <div className="gap-2">
                    {categories.map((category, index) => (
                        <RestaurantCategory key={index} 
                        data={category?.card?.card} 
                        showItems={index === showIndex ? true:false}
                        setShowIndex={() => setShowIndex(index)} />
                    ))}
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
};

export default RestaurantDetail;