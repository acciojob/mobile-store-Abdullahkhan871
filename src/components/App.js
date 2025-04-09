import React from "react";
import './../styles/App.css';
import Home from "../components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import NavigationBar from "./NavigationBar";
import ItemsList from "./ProductItem"
import ProductPage from "./ProductPage";
import ProductItem from "./ProductItem";

const App = () => {

  console.log()
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
