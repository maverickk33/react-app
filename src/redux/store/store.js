import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { counterReducer } from "../reducers/reducers";
export const store = createStore(counterReducer, composeWithDevTools());
