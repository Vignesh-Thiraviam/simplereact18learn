Types of EXPORT, IMPORT

Default export 
export default Component
import Component from


Named import / export

expost const Component
import {Component} from


#React hooks
useState() --> super powerful state variables
useEffect

# React fibre [ Reconcillation algorithm ]
Read from website

# Two approaches for API calls

once page loads --> make API call [500ms] , get the data and render it to the UI

once page loads --> Render the UI ---> API call , once we get the data , now rerender with new data

useEffect(2 arguments )
useEffect(call back function , dependency array )
useEffect ( () => {

} , []) 

call back function --> called after rendering is complete

# Shimmer UI
Blank cards to make the UI cleaner , when there is no data , instead of loading spin

# State change
Once a state is changed for a variable , React will rerender the whole component

const [btnName, setBtnName] = useState("LOGIN");

if the btnName is constant how when we update the state is getting modified ? 
Basically rerendering the whole header component with new values . rerendering with new values.

React re-renders but updates the div that vary it keeps the rest as same 

#

useEffect(call back function , dependency array )
useEffect ( () => {

} , []) 
the dependency array is optional. 
If the dependency array is not present use effect is called on every render 

if dependency array is empty [] --> use effect is called on initial render , just once. 

if dependency array is filled with some dependency , everytime the dependency changes useEffect is called

# Never make the use state variable outside of body of functional component

It is used for local state variables inside your components

Always call this useState at the beginning of your component // Code convention , react understands this better
Dont use usestate in for loops , if statements , separate functions.

#Router
ReactBrowserRouter is recommended by react for most of scenarios

#Children routes

the header will stay constant.
And the body alone will be updates. 
to make that functionality create children routes

Implemented by Outlet , child routes 
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
            path : "/restaurants/:resId",
            element : <RestaurantDetail/>
        }
    ]
}])


# Never use a href tag in react. 
When I go to about us page or any route the whole page gets refreshed. Which is not we want in SPA

Two types of routing in a web application.
1.Client side routing 
here that stuff doesnt happen. All components are always available

2.Server side routing
Old way. Where if we request a url like /about , /contact it makes a network call server returns a new html page for each request

# Dynamic routing
/restaurant/hotel-empire
/restaurant/kfc
/restaurant/dominos

achieved by /restaurant/:resId

To retrieve the param value inside component use the below hook
 const {resId} = useParams();

#Error page to be configured for react router error
     errorElement : <Error />,

import { useRouteError } from "react-router-dom";
const err = useRouteError();

use the useRouteError hook to gather the error details from router errors



# Class based components

Create by extending  React.Component

class user extends React.Component 

has a render method that returns the jsx returns()

access props by using constructor. Constructor receives props , you set it to super(props) then then use it. 
Setting to super(props) is a must

Inside the constructor do state creation operation if any by this.state = {
    .. list of state variables
}

call the setstate on any action , and pass the state eg: this.setState({va1 : this.state.va1+1 })

always first constructor is called then render is called

componentDidMount() --> called after component is mounted
used to make API calls .

Why ? because it is called after the component is properly mounted

# React lifecycle
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


Has 2 phases Render phase , Commit phase
Render phase , constructor , render
Commit phase , DOM updates , componentDidMount

React batches multiple render method if present consequitively

'this' is shared across the lifecycle methods

componentWillUnmount --> before the component is unmounted. Before the page is gone. 

# Never compare lifecycle methods to React hooks 

Similar to useEffect in functional component

useEffect if not having a dependency array , will be called after each render 
This is not same as class based components . [ componentDidMount , componentDidUpdate , componentWillUnmount ]

empty dependency array [] , will be called once in initial render

Multiple useEffect hooks can be added to a react functional component. Making it clean , handy.

componentWillUnmount --> Call for clean up . But for what clean up 

componentDidMount --> has a setInterval/timer method that prints a console log every second
you need to do a clear interval in willUnmount method

Same scenario , if you do a setInterval in useEffect , if you go to some other page it is not stopped. 

Where to do clean up stuff in react hooks / functional components 
useEffect has a optional return argument. You can return a function , 
this function will be called when the component is unmounted    

# Research topics why super(props) , async componentDidMount , why no async in useEffect

#Custom hooks 

import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

    }, []);


    return onlineStatus;
}

export default useOnlineStatus;

use this in any component . 

# CSS
SCSS
SASS
Styled components
Material UI

# Higher order component
A function that takes a component and returns a component.
Takes a component adds extra feature and returns it back.

Swiggy / Amazon has some cards where some products/hotels are promoted


#Controlled , Uncontrolled components
Lifting the state up --> Read about it

# Prop drilling
Passing data from parent to child as props

# Context
create context , user context 

Class based components cannot have react hooks

<Context.Consumer /> , if you want to use in class based components