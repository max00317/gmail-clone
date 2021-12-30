export type Folder = string[]
export type folders = Record<string, string>

export interface FolderMessage {
  key?: string
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
