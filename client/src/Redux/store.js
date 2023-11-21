import { createStore, applyMiddleware } from "redux"; //para aplicar middlewares.
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
