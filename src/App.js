import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./components/Error";

export function App() {
  
  
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="menu" element={<Menu/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}
