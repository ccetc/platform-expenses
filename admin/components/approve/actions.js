import * as actionTypes from './action_types'

export const approve = (type, id) => ({
  type: 'api/REQUEST',
  method: 'PATCH',
  endpoint: `/admin/expenses/approvals/${type}/${id}/approve`,
  request: actionTypes.APPROVE_REQUEST,
  success: actionTypes.APPROVE_SUCCESS,
  failure: actionTypes.APPROVE_FAILURE
})

export const reject = (type, id) => ({
  type: 'api/REQUEST',
  method: 'PATCH',
  endpoint: `/admin/expenses/approvals/${type}/${id}/reject`,
  request: actionTypes.REJECT_REQUEST,
  success: actionTypes.REJECT_SUCCESS,
  failure: actionTypes.REJECT_FAILURE
})
