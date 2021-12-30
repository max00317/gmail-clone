import thunk from 'redux-thunk'
import { applyMiddleware } from '@reduxjs/toolkit'
import logger from './logger'

export default applyMiddleware(thunk, logger)
