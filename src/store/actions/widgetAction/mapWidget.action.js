import { API_BASE_URL } from '../../../config';
import { normalizeResponseErrors } from '../utils';
import {normalizeResponseErrors} from '../utils.js'
export const displayMapWidget = id => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/events/${id}/mapWidget`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${getState().auth.authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
};
