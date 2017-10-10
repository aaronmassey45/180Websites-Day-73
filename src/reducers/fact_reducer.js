import { SUCCESS, FAILURE } from '../actions';

const INITIAL_STATE = {
  fact: ''
}

export default function date_fact(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, fact: action.payload }
    case FAILURE:
      return { ...state, fact: 'You entered a incorrect date. try a date like 8/8' }
    default:
      return state;
  }
}
