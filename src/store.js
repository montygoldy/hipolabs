import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import persistState from "redux-localstorage";

//Array of all the middlewares
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  compose(
    persistState(),
    applyMiddleware(...middleWare),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;