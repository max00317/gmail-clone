import { combineReducers } from 'redux'
// import { combineReducers } from '@reduxjs/toolkit'
import foldersReducer from './foldersReducer'
import message from './messageReducer'
import folderMessagesReducer from './folderMessagesReducer'

const rootReducer = combineReducers({
  folders: foldersReducer,
  folderMessages: folderMessagesReducer,
  message,
})

export default rootReducer
