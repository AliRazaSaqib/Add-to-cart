/** @format */

import { useState, useEffect } from "react";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const [items, setSeletectItems] = useState([
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
  ]);
  const [selected, setSelected] = useState([]);
  const handleSelected = (id, data) => {
    console.log(id);
    // setSelected([...items, { data }]);
    setSelected([...selected, { data }]);
  };
  const uniqueItems = [];
  uniqueItems.push(selected);
  console.log("Unique Items", uniqueItems);
  console.log(uniqueItems[0].data.name);

  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        Add To List
      </div>

      <div className="add-list-container">
        {items.map((elem, id) => {
          return (
            <div key={id} className="d-flex align-items-center items">
              <div>{elem.name}</div>
              <img src={elem.image} />
              <div>Pkr.{elem.price}</div>
              <button className="mt-3" onClick={() => handleSelected(id, elem)}>
                Add to list
              </button>
            </div>
          );
        })}
      </div>

      <div className="view-added-items">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {uniqueItems.map((id) => {
              return (
                <tr key={id}>
                  <td>{selected.name}</td>
                  <td>{selected.price}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    // {arr.map(() => {
    //     return (
    //       <tr key={uuidv4()}>
    //         <td>Shirt</td>
    //         <td>$10</td>
    //         <td>
    //           <button>Delete</button>
    //         </td>
    //       </tr>
    //     );
    //   })}
  );
}
