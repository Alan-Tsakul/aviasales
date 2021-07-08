import { combineReducers } from 'redux';
import filterReducer from './filter-reducer';
import sortTicketsReducer from './sort-ticket-reducer';
import  loadTicketsReducer   from './load-tickets-reducer';

const rootReducer = combineReducers({
  sort: sortTicketsReducer,
  filter: filterReducer,
  load: loadTicketsReducer
});

export default rootReducer;
