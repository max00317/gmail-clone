import { _fetch } from '../utils/api'

import type * as type from '../types/Gmail'

export const GET_FOLDER_MESSAGES = 'GET_FOLDER_MESSAGES'
export const GET_FOLDER_MESSAGES_SUCCESS = 'GET_FOLDER_MESSAGES_SUCCESS'
export const GET_FOLDER_MESSAGES_FAILURE = 'GET_FOLDER_MESSAGES_FAILURE'

// Create Redux action creators that return an action
export const getFolderMessages = () => ({
  type: GET_FOLDER_MESSAGES,
})

export const getFolderMessagesSuccess = (
  folderMessages: type.FolderMessage[]
) => ({
  type: GET_FOLDER_MESSAGES_SUCCESS,
  payload: folderMessages,
})

export const getFolderMessagesFailure = () => ({
  type: GET_FOLDER_MESSAGES_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchFolderMessages(folder: string) {
  return async (dispatch: any) => {
    dispatch(getFolderMessages())

    try {
      const response = await _fetch(`/folders/${folder}`)
      const data: type.FolderMessage[] = await response.json(folder)

      dispatch(getFolderMessagesSuccess(data))
    } catch (error) {
      console.error(error)
      dispatch(getFolderMessagesFailure())
    }
  }
}
