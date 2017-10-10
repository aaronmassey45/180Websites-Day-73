import { SUCCESS } from '../actions';

const INITIAL_STATE = {
  fact: ''
}

export default function date_fact(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, fact: action.payload }
    default:
      return state;
  }
}
