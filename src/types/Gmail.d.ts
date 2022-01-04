import React from 'react'
import { messages } from '../utils/_DATA'

export type Folders = Record<string, string>

export interface FolderMessage {
  key: React.Key
  'message-id': string
  from: string
  subject: string
}

export interface FolderMessageKey {
  [index: string]: FolderMessage[]
}

export interface Message extends Omit<FolderMessage, key, 'message-id'> {
  id: string
  // id: React.Key
  to: string
  date: string
  body: string
  'reply-to'?: string
  from: string
  subject: string
}

export interface MessageKey {
  [key: keyof typeof messages]: Message
}

// Redux Props
export interface foldersState {
  folders: {
    loading: boolean
    folders: folders
    hasErrors: boolean
  }
}

export interface folderMessagesState {
  folderMessages: {
    loading: boolean
    folderMessages: folderMessage[]
    hasErrors: boolean
  }
}

export interface messageState {
  message: {
    loading: boolean
    message: Message
    hasErrors: boolean
  }
}

export interface ReduxFCProps<T> {
  dispatch: any
  loading: boolean
  payload: T
  hasErrors: boolean
}
