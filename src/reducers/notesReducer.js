/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import types from '../types/types';

const initialState = {
  notes: [],
  active: null,
};
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) => (note.id === action.payload.id ? action.payload.note : note)),
      };
    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((state) => state.id !== action.payload.id),
      };
    case types.notesLogoutCleaning:
      state = initialState;
      return {
        state,
      };
    default:
      return state;
  }
};
export default noteReducer;
