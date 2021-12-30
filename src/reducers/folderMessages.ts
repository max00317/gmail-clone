import { RECEIVE_FOLDER_MESSAGES } from '../actions/folderMessages'

export default function folderMessages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FOLDER_MESSAGES:
      return {
        ...state,
        ...action.folderMessages,
      }
    default:
      return state
  }
}
