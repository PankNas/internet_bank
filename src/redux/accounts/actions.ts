import {AccountType} from "../../types";
import {getAccounts} from "../../services/requestMock";
import {AppDispatch} from "../store/store";

export const loadAccountsAction = () => ({
  type: 'LOAD_ACCOUNTS'
} as const);

export const loadAccountsFailureAction = () => ({
  type: 'LOAD_ACCOUNTS_FAILURE',
} as const);

export const loadAccountsSuccess = (accountsState: AccountType[]) => ({
  type: 'LOAD_ACCOUNTS_SUCCESS',
  payload: accountsState,
} as const);

type ChangeTitleType = {
  id?: number,
  customTitle: string,
}

export const changeAccountTitle = (payload: ChangeTitleType) => ({
  type: 'CHANGE_ACCOUNT_TITLE',
  payload: payload
} as const);

export const addAccount = (account: AccountType) => ({
  type: 'ADD_ACCOUNT',
  payload: account,
} as const);

export const removeExternalAccount = (account: {id?: number}) => ({
  type: 'REMOVE_EXTERNAL_ACCOUNT',
  payload: account.id,
} as const);

const defaultState = () => ({
  type: 'INIT',
} as const);

export const loadAccounts = () => async (dispatch: AppDispatch) => {
  dispatch(loadAccountsAction());

  try {
    const resRequest = await getAccounts();
    dispatch(loadAccountsSuccess(resRequest));
  } catch (_err) {
    dispatch(loadAccountsFailureAction());
  }
};

const actions = {
  loadAccountsAction,
  loadAccountsFailureAction,
  loadAccountsSuccess,
  changeAccountTitle,
  addAccount,
  removeExternalAccount,

  defaultState,
};

export type Action = {
  [Key in keyof typeof actions]: ReturnType<typeof actions[Key]>;
}[keyof typeof actions];

