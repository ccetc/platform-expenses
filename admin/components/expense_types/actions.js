import * as actionTypes from './action_types'

export const load = (project_id) => ({
  type: 'api/REQUEST',
  method: 'GET',
  endpoint: `/admin/expenses/projects/${project_id}/expense_types/all`,
  request: actionTypes.LOAD_REQUEST,
  success: actionTypes.LOAD_SUCCESS,
  failure: actionTypes.LOAD_FAILURE
})

export const toggle = (project_id, id) => ({
  type: 'api/REQUEST',
  method: 'PATCH',
  endpoint: `/admin/expenses/projects/${project_id}/expense_types/${id}/toggle`,
  request: actionTypes.TOGGLE_REQUEST,
  success: actionTypes.TOGGLE_SUCCESS,
  failure: actionTypes.TOGGLE_FAILURE
})
