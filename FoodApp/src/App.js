import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { About } from "./components/About";
import { ContactUs,Error } from "./components/ContactUs";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import GamePage from "./components/sprintplanner/GamePage";
// import Grocery from "./components/Grocery";

// const heading = React.createElement("h1" , { id : "heading"}, "Welcome once more 🚀");

const Grocery = lazy(() => import("./components/Grocery"));
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

// authenticating



const Applayout = () => {
    const [userName , setUserName] = useState("Default user");
    useEffect(() => {
        const data = { name : "Vignesh T"}
        setUserName(data.name);
    }, []);

    return( 
        <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
    <div className= "app">
        <Header />      
        <Outlet />
        <Footer />
    </div>
    </UserContext.Provider>
    </Provider>)
}

const appRouter = createBrowserRouter([{
    path : "/",
    element : <Applayout />,
    errorElement : <Error />,
    children: [
        {
            path : "/",
            element : <Body />
        },
        {
            path : "/about",
            element : <About />
        },
        {
            path : "/contactus",
            element : <ContactUs />
        },
        {
            path : "/cart",
            element : <Cart />
        },        
        {
            path : "/restaurants/:resId",
            element : <RestaurantDetail/>
        },
        {
            path : "/grocery",
            element : <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
        },
        {
            path : "/sprintplanning",
            element : <Suspense fallback={<Shimmer />}><GamePage /></Suspense>
        }
    ]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


// Import Provider from react redux.
//  configuring store is a redux job
// Providing it is react redux job 