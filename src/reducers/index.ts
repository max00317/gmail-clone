import { combineReducers } from 'redux'
// import { combineReducers } from '@reduxjs/toolkit'
import foldersReducer from './foldersReducer'
import messages from './messages'
import folderMessagesReducer from './folderMessagesReducer'

const rootReducer = combineReducers({
  folders: foldersReducer,
  folderMessages: folderMessagesReducer,
  messages,
})

export default rootReducer
