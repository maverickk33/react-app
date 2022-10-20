import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/actions/actions";

function App() {
  // useSelector() Hook is used for fetching app data from the store
  const appState = useSelector((state) => state.cart);

  // useDispatch() method is used to dispatch actions from the view
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="my-3">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
