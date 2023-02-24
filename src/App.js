import { React, useState } from "react";
import { Food } from "./Food";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./components/Error";

export function App() {
  const [foodItems, setFoodItems] = useState(Food);
  
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route
        path="menu"
        element={
          <Menu foodItems={foodItems} />
        }
      />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}
