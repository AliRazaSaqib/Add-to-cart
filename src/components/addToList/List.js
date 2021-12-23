/** @format */

import { useState } from "react";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function List() {
  const [items, setSeletectItems] = useState([]);

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

  // add item to cart
  const handleSelected = (el) => {
    setSeletectItems([...items, el]);
    console.log(el.id);
  };

  // remove item from card
  const handleRemote = (el) => {
    let del = items.filter((elem) => elem.id != el.id);
    setSeletectItems(del);
    console.log(el.id);
  };

  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        Add To List
      </div>

      <div className="add-list-container">
        {list.map((el) => {
          return (
            <div key={el.id} className="d-flex align-items-center items">
              <div>{el.name}</div>
              <img src={el.image} />
              <div>Pkr.{el.price}</div>
              <button className="mt-3" onClick={() => handleSelected(el)}>
                Add to list
              </button>
            </div>
          );
        })}
      </div>

      {items.length > 0 ? (
        <div className="view-added-items">
          <div className="app-header d-flex align-items-center justify-content-center">
            Product List
          </div>
          <table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((el) => (
                <tr key={el.id}>
                  <td>
                    <img
                      src={el.image}
                      style={{ height: "260px", width: "260px" }}
                    />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>
                    <button className="delete" onClick={() => handleRemote(el)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex align-items-end justify-content-end">
            <Link to="/checkout">
              <button className="checkout">Checkout</button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
