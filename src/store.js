import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducers";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
    ((history) => combineReducers({
        router: connectRouter(history),
        reducer
    }))(history)
    , 
    applyMiddleware(
        routerMiddleware(history),
        createLogger()
    )
);

export default store;