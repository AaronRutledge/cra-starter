import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
// import sagas from './sagas/';
import rootSaga from './sagas/index';

export default function configureStore(apiUrl) {
    let myState;
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMiddleware);
    const enhancer = compose(middleware);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, myState, composeEnhancers(enhancer));

    // run sagas
    sagaMiddleware.run(rootSaga(apiUrl));

    return store;
}