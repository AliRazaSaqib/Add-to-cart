/** @format */

import React from "react";
import "../../App.css";

export default function Checkout() {
  let lis = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        CheckOut Product
      </div>
      {/* Product tabel */}
      <div className="checkout-container">
        <table className="checkout-component">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {lis.map(() => {
              return (
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Price</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="show-total">Pkr.5000</div>
      </div>

      {/* payment section */}
      <form>
        <div className="payment">
          <h3>Payment Information</h3>
          <div className="add-payment-methods">
            <h6>Payment methods:</h6>
            <div>
              <div>
                <input
                  type="radio"
                  id="visa"
                  name="pay-method"
                  value="visacard"
                />
                 <label for="visa">Visa Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="master"
                  name="pay-method"
                  value="mastercard"
                />
                 <label for="master">Master Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="pay-method"
                  value="paypal"
                />
                 <label for="paypal">Paypal</label>
              </div>
              <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
