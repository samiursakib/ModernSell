import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { tokenReducer, appReducer } from "./store/reducers/reducers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const rootReducer = combineReducers({
  app: appReducer,
  token: tokenReducer
})

// Sweet Alert 2

const MySwal = withReactContent(Swal);
export default MySwal;

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
