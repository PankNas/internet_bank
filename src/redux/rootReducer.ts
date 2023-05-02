import {combineReducers} from 'redux';

import {accountsReducer as accounts} from './accounts/reducer';
import {operationsReducer as operations} from './operations/reducer';

const reducers = combineReducers({
  accounts,
  operations,
});

export default reducers;
