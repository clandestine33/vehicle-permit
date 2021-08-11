import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ui from './reducers/ui';
import user from './reducers/user';
import auth from './reducers/auth';
import courses from './reducers/courses';
import lecturers from './reducers/lecturers';
import ranks from './reducers/ranks';
import specializations from './reducers/specializations';
import departments from './reducers/departments';

const appReducer = combineReducers({
  ui,
  user,
  auth,
  courses,
  lecturers,
  ranks,
  specializations,
  departments,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
      state = undefined;
  }
  return appReducer(state, action);
};

let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, {}, middleware);

export default store;
