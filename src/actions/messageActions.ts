import { _fetch } from '../utils/api'

import type * as type from '../types/Gmail'

export const GET_MESSAGE = 'GET_MESSAGE'
export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS'
export const GET_MESSAGE_FAILURE = 'GET_MESSAGE_FAILURE'

// Create Redux action creators that return an action
export const getMessage = () => ({
  type: GET_MESSAGE,
})

export const getMessageSuccess = (message: type.Message) => ({
  type: GET_MESSAGE_SUCCESS,
  payload: message,
})

export const getMessageFailure = () => ({
  type: GET_MESSAGE_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchMessage(messageId: string) {
  return async (dispatch: any) => {
    dispatch(getMessage())

    // console.log(`messageId in _fetch`, messageId)
    try {
      const response = await _fetch(`/messages/${messageId}`)
      const data: type.Message = await response.json(messageId)
      // console.log(`data of fetchMessage`, data)

      dispatch(getMessageSuccess(data))
    } catch (error) {
      console.error(error)
      dispatch(getMessageFailure())
    }
  }
}
