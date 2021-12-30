import React from 'react'

export type Folder = string[]
export type folders = Record<string, string>

export interface FolderMessage {
  key: React.Key
  'message-id': string
  from: string
  subject: string
}

export interface Message extends Omit<FolderMessage, 'message-id'> {
  id: string
  to: string
  date: string
  body: string
  'reply-to'?: string
}

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

export interface ReduxFCProps<T> {
  dispatch: any
  loading: boolean
  payload: T
  hasErrors: boolean
}
