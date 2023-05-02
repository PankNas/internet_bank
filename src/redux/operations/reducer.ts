import {Action} from "./actions";
import {TimelineItemType} from "../../types";

const initialState: TimelineItemType[] = [];

type State = typeof initialState | null;

export const operationsReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "LOAD_OPERATIONS":
      return initialState;
    case "LOAD_OPERATIONS_FAILURE":
      return null;
    case "LOAD_OPERATIONS_SUCCESS":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
