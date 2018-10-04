//store includes middleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import { logger } from 'redux-logger';

//question we need a check on the actions how reducer?
const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
};


export default configureStore;
