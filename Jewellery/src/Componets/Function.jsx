import { useState } from "react";
import Buypage from "./Buy-page";
import { Cart } from "./Cart";

export default function Func() {
  const [CartItem, setItem] = useState([]); // Initialize CartItem as an array

  return (
    <>
      <Buypage setItem={setItem} CartItem={CartItem} />
      <Cart CartItem={CartItem} />
    </>
  );
}
