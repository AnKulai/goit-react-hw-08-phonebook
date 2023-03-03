import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer/contactsSlice';
import filterReducer from './filterReducer/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
