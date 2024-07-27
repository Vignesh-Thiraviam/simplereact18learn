import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
    const [btnName, setBtnName] = useState("LOGIN");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Selector React hook
    // subscribing to the store using a selector
    const cartItems  = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-green-300 shadow-lg mb-2 px-2">
            <div className="logo-container">
                <img className="w-60" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> Online status : { onlineStatus ? "✔️" : "✖️" } </li>
                    <li className="px-4"><Link to="/">Home 🚀</Link></li>
                    <li className="px-4"><Link to="/contactus">Contact</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/grocery" >Grocery</Link> </li>
                    <li className="px-4"><Link to="/cart" >Cart - ({cartItems.length} items)</Link></li>
                    <button className="login" onClick={ () => {
                    btnName == "LOGIN" ? setBtnName('LOGOUT') : setBtnName("LOGIN");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li className="px-4"><Link to="/sprintplanning">Spring planning</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;