import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div" , { id : "parent"}, React.createElement("div" , { id : "child"},
[React.createElement("h1" , {}, "Hello world form react child"),React.createElement("h2" , {}, "Hello world form react child 2")]));


const heading = React.createElement("h1" , { id : "heading"}, "Hello world form react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
