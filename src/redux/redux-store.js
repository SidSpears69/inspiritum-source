import { applyMiddleware, combineReducers, createStore } from "redux";
import formReducer from "./form-reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
    form: formReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;