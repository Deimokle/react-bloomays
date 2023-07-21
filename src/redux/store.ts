import { createStore, combineReducers } from 'redux';
import missions from './reducers/missions';

const rootReducer = combineReducers({ 
  missions,
});

const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;
