import { AppAction } from '../../../rootAction';
import * as actions from '../actions/noteActions';
import { Note } from '../models/todoModel';

export interface TodoState {
  isLoading: boolean;
  notes: Note[];
}

const initialState: TodoState = {
  isLoading: false,
  notes: []
};

export const TodoReducer = (
  state: TodoState = initialState,
  action: AppAction
) => {
  switch (action.type) {
    case actions.FETCH_NOTES_REQUESTED:
    case actions.CREATE_NOTE_REQUESTED:
      return { ...state, isLoading: true };
    case actions.FETCH_NOTES_SUCCEEDED:
      return { ...state, isLoading: false, notes: action.payload };
    case actions.CREATE_NOTE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        notes: [...state.notes, action.payload]
      };
    case actions.FETCH_NOTES_FAILED:
    case actions.CREATE_NOTE_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
