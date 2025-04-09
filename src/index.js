import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider"


ReactDOM.render(
<ProductContextProvider>
    <App />
</ProductContextProvider>
    , document.getElementById("root"));
