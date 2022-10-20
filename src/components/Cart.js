import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAsync,
  incrementByOdd,
} from "../redux/actions/actions";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="logo192.png"
          alt="Card image cap"
          height={250}
        />
        <div className="card-body">
          <h5 className="card-title">React js </h5>
          <p className="card-text">Front End Library</p>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                setTimeout(() => {
                  dispatch(incrementByAsync());
                }, 2000);
              }}
            >
              Async
            </button>
            <button
              className="btn btn-success"
              onClick={() => dispatch(incrementByOdd())}
            >
              Odd
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
