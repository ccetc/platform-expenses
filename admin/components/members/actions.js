import * as actionTypes from './action_types'

export const load = () => ({
  type: 'api/REQUEST',
  method: 'GET',
  endpoint: '/admin/project/unassigned',
  request: actionTypes.LOAD_REQUEST,
  success: actionTypes.LOAD_SUCCESS,
  failure: actionTypes.LOAD_FAILURE
})

export const submit = (endpoint, params) => ({
  type: 'api/REQUEST',
  method: 'GET',
  endpoint,
  params,
  request: actionTypes.SUBMIT_REQUEST,
  success: actionTypes.SUBMIT_SUBMIT,
  failure: actionTypes.SUBMIT_FAILURE
})
