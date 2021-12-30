import { combineReducers } from 'redux'
// import { combineReducers } from '@reduxjs/toolkit'
import foldersReducer from './foldersReducer'
import messages from './messages'
import folderMessages from './folderMessages'

const rootReducer = combineReducers({
  folders: foldersReducer,
  messages,
  folderMessages,
})

export default rootReducer
