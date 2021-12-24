/** @format */

import "../../App.css";
import { Link } from "react-router-dom";
import { ListContext } from "./ContextProvider";
import { useContext, useEffect } from "react";

export default function List() {
  // get context api data
  const [list, items, setSeletectItems, cartTotal, setCartTotal] =
    useContext(ListContext);

  // use for get total price of selected items
  useEffect(() => {
    total();
  }, [items]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < items.length; i++) {
      totalVal += items[i].price;
    }
    setCartTotal(totalVal);
  };
  console.log("total", cartTotal);

  // add item to cart
  const handleSelected = (el) => {
    setSeletectItems([...items, el]);
  };

  // remove item from card
  const handleRemote = (el) => {
    let del = items.filter((elem) => elem.id != el.id);
    setSeletectItems(del);
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
