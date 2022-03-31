import React from "react";
//we will replace second namespace with third from React v18
//import ReactDOM from "react-dom"; //interact with DOM 
import * as ReactDomClient from "react-dom/client"; //interact with DOM

/**
 * this code will be replaced by the code below
 * 
 * ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById("root")
)
**/

const rootContainer = document.getElementById("root");
const root  = ReactDomClient.createRoot(rootContainer);
root.render(<h1>I ❤️ Chicken</h1>);


