import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
// import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootSaga from "./root-saga";

// --- middleware saga ----
const SagaMiddleware = createSagaMiddleware();
const middlewares = [SagaMiddleware];

// --- middleware thunk ----
// const middlewares = [thunk];

// --- middleware ----
// const middlewares = [logger];

// after heroku app deployed
// const middlewares = [];

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

//------
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// SagaMiddleware.run(fetchCollectionsStart)
SagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };