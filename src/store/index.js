import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { rootReducer } from './root-reducer';
import * as api from '../config'; //Импортируй всё как api из config

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api: api,
      })
    )
  )
);

export { store };
