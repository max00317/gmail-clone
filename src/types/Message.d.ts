export interface IFolderMessage {
  key: string
  'message-id': string
  from: string
  subject: string
}

export interface IMessage extends Omit<IFolderMessage, 'message-id'> {
  id: string
  to: string
  date: string
  body: string
}
