import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1" , { id : "heading"}, "Welcome once more 🚀");

// JSX => Babel transpiles it to React Element JS object
// React element
const Title = () => (<h1>
    Welcome from jsx 🚀</h1>);

// React component
// 2 ways to create
// class based components - OLD
// functional components - NEW

const block2 = (<h3> A code from a block </h3>);
// Diff between element and component

// Function that returns a jsx or react element is a functional component
const HeadingComponent2 = () =>{
    return <h1 className="heading">Sasikala heading component 🚀</h1>
}

const num = 101;

// cross site attacts will be prevented by JSX {}

// React element , component can go inside each other in different ways like here
const HeadingComponent = () => (
    <div id="container">
        <Title />
        { Title()}
        {num}
        {block2}
        <h1 className="heading">Sasikala heading component 🚀</h1>
    </div>
     
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);