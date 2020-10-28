import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { markersSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, composeWithDevTools({})(
    applyMiddleware(sagaMiddleware),
  ));
sagaMiddleware.run(markersSaga);

export default store;
