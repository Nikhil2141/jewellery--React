import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router";

import { Cart } from "./Componets/Cart";
import Home from "./Componets/Homepage";
import { useState } from "react";

function App() {
  const [CartItems, setItems] = useState([]);
  return (
    <>
     

     
     
      <Router>
        <Routes>
        <Route path="/" element={<Home CartItems={CartItems} setItems={setItems} />}/>
        <Route path="/cart" element={<Cart CartItems={CartItems} />} /> 
        </Routes>
         </Router>
     
    </>
  );
}

export default App;
