const RestaurantCard = (props) => {

    const {resData} = props;

    const {locality,name,avgRating } = resData;

    return (
        <div className="res-card">
            <img className= "res-logo" alt="food items"  src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" />
            <h3>{locality}</h3>
            <h4>{name}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;