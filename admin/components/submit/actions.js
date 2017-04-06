import * as actionTypes from './action_types'

export const submit = (type, id) => ({
  type: 'api/REQUEST',
  method: 'PACTH',
  endpoint: `/admin/expenses/${type}/${id}/submit`,
  request: actionTypes.SUBMIT_REQUEST,
  success: actionTypes.SUBMIT_SUCCESS,
  failure: actionTypes.SUBMIT_FAILURE
})
