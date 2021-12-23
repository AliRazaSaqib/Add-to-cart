/** @format */

import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ListContext = createContext();
export default function ContextProvider(props) {
  const [items, setSeletectItems] = useState([]);
  console.log(items);

  // list of items
  const list = [
    {
      id: uuidv4(),
      name: "Shirt",
      image: "/img.jpg",
      price: 229,
    },
    {
      id: uuidv4(),
      name: "Pant",
      image: "/pant.jpg",
      price: 350,
    },
    {
      id: uuidv4(),
      name: "Jacket",
      image: "/jacket.jpg",
      price: 1000,
    },
  ];

  return (
    <div>
      <ListContext.Provider value={[list, items, setSeletectItems]}>
        {props.children}
      </ListContext.Provider>
    </div>
  );
}
