import Shimmer from "./Shimmer";

const RestaurantCard = (props) => {

    const {resData} = props;

    if(!resData) {
        return (
            <div>
                <Shimmer />
            </div>
        )
    }

    console.log(resData);

    const {locality,name,avgRating,cloudinaryImageId } = resData;

    return (
        <div className="m-4 p=4 w-[250px] rounded-lg bg-blue-300">
            {/* <img className= "res-logo" alt="food items"  src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" /> */}
            <img className="px-2 py-2 rounded-2xl" alt="food items"  src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3 className="px-4 font-bold py-2">{name}</h3>
            <h4 className="px-4 font-serif">{locality}</h4>
            <h4 className="px-4 pb-2font-semibold">{avgRating} ⭐</h4>
        </div>
    )
}



// higher order component

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <span className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg"> Promoted </span>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;