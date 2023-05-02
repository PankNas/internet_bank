import {createStore, applyMiddleware} from "redux";
import reducers from "../rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;

export default store;
