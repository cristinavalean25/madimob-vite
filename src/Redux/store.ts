import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cryptoPricesReducer from "./cryptoPricesReducer";

const store = createStore(cryptoPricesReducer, applyMiddleware(thunk));

export default store;
