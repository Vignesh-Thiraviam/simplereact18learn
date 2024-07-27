import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemCard from "./ItemCard";

export const ItemList = ({items}) => {
    console.log("Items for printing");
    console.log(items)
    return (
        <div>
            {
                items.map((item,index) => (
                    <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                       {
                        item.itemCards.map((card) => <ItemCard card={card}/> )
                       }
                    </div>
                ))

            }
        </div>
    )
}


{/* <div>
<span>{item.title}</span>
<span> -£ {cat.card.info.price ? cat.card.info.price/100 : cat.card.info.defaultPrice / 100}</span>
<p className="text-xs">{item.card.info.description}</p>
</div> */}