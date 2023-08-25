import { createStore } from "redux";
import reducer from "../reducers";

const storeApp = createStore(reducer);

export default storeApp;

