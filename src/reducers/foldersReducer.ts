import * as actions from '../actions/foldersActions'

import type * as type from '../types/Redux'

export const initialState = {
  folders: [],
  loading: false,
  hasErrors: false,
}

export default function foldersReducer(
  state = initialState,
  action: type.Action
) {
  switch (action.type) {
    // case actions.RECEIVE_FOLDERS:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    case actions.GET_FOLDERS:
      return { ...state, loading: true }
    case actions.GET_FOLDERS_SUCCESS:
      return { folders: action.payload, loading: false, hasErrors: false }
    case actions.GET_FOLDERS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
