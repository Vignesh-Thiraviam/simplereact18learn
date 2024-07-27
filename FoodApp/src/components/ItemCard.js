import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({card}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    console.log("Print cards");
    console.log(card);
return (
    <div className="flex border-b-4 justify-between" >
    <div className="w-9/12">
        <span className="font-bold">{card.card.info.name}</span>
        <span> - £{card.card.info.price ? card.card.info.price/100 : card.card.info.defaultPrice / 100}</span>
        <p className="text-xs">{card.card.info.description}</p>
    </div>
    <div className="w=3/12 p-4">
        <div className="absolute">
            <button className="p-2 mx-10 
            rounded-lg bg-black text-white 
            shadow-lg"
        // check what is different between onClick={handleAddItem(item)}
        // calling a function vs call back function
            onClick={ () => handleAddItem(card)}
            >Add +
            </button>
        </div>
        <img className="max-w-30 max-h-20"  src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + card.card.info.imageId} />
    </div>
</div> 
)
}

export default ItemCard;