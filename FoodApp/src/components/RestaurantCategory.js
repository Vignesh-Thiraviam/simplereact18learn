import { useState } from "react";
import { ItemList } from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    // console.log(data);
    handleClick = () => {
        setShowIndex();
    }

    return <div>
        {/* Header*/}
        <div className="w-50 mx-auto my-4 border-spacing-x-5 bg-green-100 shadow-3xl p-4 rounded-lg">
            <div className="flex justify-between cursor-pointer  hover:ring-green-700" onClick={handleClick}>
                <span className="font-bold text-lg ">{data.title}</span>
                <span>⤵️</span>
            </div>
            { showItems && <ItemList key={1} items={data.categories}/>}
        </div>
    </div>
}

export default RestaurantCategory;