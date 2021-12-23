/** @format */

import React from "react";
import "../../App.css";

export default function Checkout(props) {
  console.log("props", props.items);
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
            <label for="cardHolderName">Credit Card Name</label>
            <input
              type="text"
              id="cardHolderName"
              placeholder="Card Holder Name"
              className="card-holder-name mt-1"
            />
            <label for="cardnumber" className="mt-3">
              Credit Card Name
            </label>
            <input
              type="text"
              id="cardnumber"
              placeholder="Card Number"
              className="card-holder-name mt-1"
            />

            <label for="date" className="mt-3">
              Expiry Date
            </label>
            <div className="d-flex gap-2">
              <input
                type="text"
                id="date"
                placeholder="02"
                className="card-holder-name mt-1"
              />
              <input
                type="text"
                id="year"
                placeholder="2022"
                className="card-holder-name mt-1"
              />
              <input
                type="text"
                id="cvc"
                placeholder="CVC"
                className="card-holder-name mt-1"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-4 checkout-button"
            data-bs-toggle="modal"
            data-bs-target="#successMessage"
          >
            Checkout
          </button>
        </div>
      </form>
      {/* Confermation PopUp */}
      <div
        class="modal fade"
        id="successMessage"
        tabindex="-1"
        aria-labelledby="successMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Thank you for using our services</div>
          </div>
        </div>
      </div>
    </div>
  );
}
