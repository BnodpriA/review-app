import React, { StrictMode } from "react";
import * as ReactDomClient from "react-dom/client"; //interact with DOM
import App from "./App"; //import App.js component
import './index.css'; //import css file

const rootContainer = document.getElementById("root");
const root  = ReactDomClient.createRoot(rootContainer);
root.render(
    <React.StrictMode> //StrictMode is a React feature that helps with debugging
        <App />
    </React.StrictMode>
);


