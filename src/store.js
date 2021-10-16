import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import reducers from "./reducers/reducer";

//--middleware
const middleware = composeWithDevTools(applyMiddleware(thunk));
//---store
const store = createStore(reducers, middleware);
export default store;
