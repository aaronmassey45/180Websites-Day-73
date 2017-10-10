import { RSAA } from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function fetchDateFact(date) {
  return ({
    [RSAA]: {
      types: [REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.text()
          }
        },
        FAILURE],
      endpoint: `http://numbersapi.com/${date}/date`,
      method: 'GET'
    }
  })
}
