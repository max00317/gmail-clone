import { RECEIVE_MESSAGES } from '../actions/messages'

export default function messages(state = {}, action: any) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return {
        ...state,
        ...action.messages,
      }
    default:
      return state
  }
}
