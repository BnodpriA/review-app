import React, { StrictMode } from "react";
import * as ReactDomClient from "react-dom/client"; //interact with DOM
import App from "./App"; //import App.js component
import './index.css'; //import css file

const rootContainer = document.getElementById("root");
const root  = ReactDomClient.createRoot(rootContainer);
//StrictMode is a wrapper that allows you to perform a few extra checks on your React code.
root.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>
);


