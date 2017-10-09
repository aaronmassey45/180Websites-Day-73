import { CALL_API } from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function fetchDateFact(date) {
  return ({
    [CALL_API]: {
      types: [REQUEST,
        {
        type: SUCCESS,
        payload: (action, state, response) => {
          console.log(response);
          return response
        }
      },
        FAILURE],
      endpoint: `http://numbersapi.com/${date}/date`,
      method: 'GET'
    }
  })
}
