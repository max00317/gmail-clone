// import { _getFolders } from '../utils/_DATA'
import { fetch } from '../utils/api'

import type * as type from '../types/Message'

// export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS'

export const GET_FOLDERS = 'GET_FOLDERS'
export const GET_FOLDERS_SUCCESS = 'GET_FOLDERS_SUCCESS'
export const GET_FOLDERS_FAILURE = 'GET_FOLDERS_FAILURE'

// export function receiveFolders(folders: type.Folder) {
//   return {
//     type: RECEIVE_FOLDERS,
//     folders,
//   }
// }

// Create Redux action creators that return an action
export const getFolders = () => ({
  type: GET_FOLDERS,
})

export const getFoldersSuccess = (folders: any) => ({
  type: GET_FOLDERS_SUCCESS,
  payload: folders,
})

export const getFoldersFailure = () => ({
  type: GET_FOLDERS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchFolders() {
  return async (dispatch: any) => {
    dispatch(getFolders())

    try {
      const response = await fetch('/folders')
      const data: type.Folder = await response.json()

      dispatch(getFoldersSuccess(data))
    } catch (error) {
      dispatch(getFoldersFailure())
    }
  }
}
