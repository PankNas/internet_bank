import {TimelineItemType} from "../../types";
import {getOperations} from "../../services/requestMock";
import {AppDispatch} from "../store/store";

export const loadOperationsAction = () => ({
  type: 'LOAD_OPERATIONS',
} as const);

export const loadOperationsFailureAction = () => ({
  type: 'LOAD_OPERATIONS_FAILURE',
} as const);

export const loadOperationsSuccess = (payload:TimelineItemType[]) => ({
  type: 'LOAD_OPERATIONS_SUCCESS',
  payload: payload
} as const);

const defaultState = () => ({
  type: 'INIT',
} as const);

export const loadOperations = (id) => async (dispatch: AppDispatch) => {
  dispatch(loadOperationsAction());

  try {
    const resRequest = await getOperations(id);
    dispatch(loadOperationsSuccess(resRequest));
  } catch (_err) {
    dispatch(loadOperationsFailureAction());
  }
};

const actions = {
  loadOperationsAction,
  loadOperationsFailureAction,
  loadOperationsSuccess,
  defaultState
};

export type Action = {
  [Key in keyof typeof actions]: ReturnType<typeof actions[Key]>;
}[keyof typeof actions];
