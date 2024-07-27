import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestauraunt] = useState(null);


    useEffect(() => {
        fetchmenu();
    },[]);

    fetchmenu = async() =>{

        // https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
        const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId='+resId +'&submitAction=ENTER', {
            headers: {
            'x-cors-api-key': 'temp_8518f8081b5e1938e9d45062b1593e2d'
            }
        })
        const json = await data.json();
        console.log(json.data);
        console.log(json.data.cards[2]?.card?.card?.info)
        setRestauraunt(json.data);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;