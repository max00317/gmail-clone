import * as actions from '../actions/messageActions'

import type * as type from '../types/Redux'

export const initialState = {
  message: {},
  loading: false,
  hasErrors: false,
}

export default function message(state = initialState, action: type.Action) {
  switch (action.type) {
    case actions.GET_MESSAGE:
      return { ...state, loading: true }
    case actions.GET_MESSAGE_SUCCESS:
      return { message: action.payload, loading: false, hasErrors: false }
    case actions.GET_MESSAGE_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
