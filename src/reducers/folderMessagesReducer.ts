import * as actions from '../actions/folderMessagesActions'

import type * as type from '../types/Redux'

export const initialState = {
  folderMessages: [],
  loading: false,
  hasErrors: false,
}

export default function folderMessagesReducer(
  state = initialState,
  action: type.Action
) {
  switch (action.type) {
    case actions.GET_FOLDER_MESSAGES:
      return { ...state, loading: true }
    case actions.GET_FOLDER_MESSAGES_SUCCESS:
      return {
        folderMessages: action.payload,
        loading: false,
        hasErrors: false,
      }
    case actions.GET_FOLDER_MESSAGES_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
