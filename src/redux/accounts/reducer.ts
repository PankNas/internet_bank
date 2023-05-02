import {AccountType, AccountTypeEnum} from "../../types";
import {Action} from './actions';

const initialState: AccountType[] = [];

type State = typeof initialState | null;

export const accountsReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'LOAD_ACCOUNTS':
      return initialState;
    case 'LOAD_ACCOUNTS_FAILURE':
      return null;
    case 'LOAD_ACCOUNTS_SUCCESS':
      return [...state, ...action.payload];
    case 'CHANGE_ACCOUNT_TITLE':
      return state.map((obj: AccountType) =>
        obj.id === action.payload.id ?
          {...obj, customTitle: action.payload.customTitle} : obj
      );
    case 'ADD_ACCOUNT':
      return [...state, action.payload];
    case 'REMOVE_EXTERNAL_ACCOUNT':
      return state.filter((obj: AccountType) => {
          if (obj.id === action.payload)
            return obj.type !== AccountTypeEnum.EXTERNAL && obj;
          else return obj;
        }
      );
    default:
      return state;
  }
};
