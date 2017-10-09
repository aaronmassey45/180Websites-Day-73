import { REQUEST, SUCCESS, FAILURE } from '../actions';

const INITIAL_STATE = {
  fact: ''
}

export default function date_fact(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SUCCESS:
    console.log(action);
      return (
        { fact: action.payload }
      )
    case REQUEST:
      console.log(action);
      return state;
    case FAILURE:
      console.log(action);
      return state;
    default:
      return state;
  }
}
