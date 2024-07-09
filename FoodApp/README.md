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

# Two approaches for API calls

once page loads --> make API call [500ms] , get the data and render it to the UI

once page loads --> Render the UI ---> API call , once we get the data , now rerender with new data

useEffect(2 arguments )
useEffect(call back function , dependency array )
useEffect ( () => {

} , []) 

call back function --> called after rendering is complete

# Shimmer UI

