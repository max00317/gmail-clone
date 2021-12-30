import type * as type from '../types/Message'

export const RECEIVE_FOLDER_MESSAGES = 'RECEIVE_FOLDER_MESSAGES'

export function receiveFolderMessages(
  folderMessages: Record<string, type.FolderMessage[]>
) {
  return {
    type: RECEIVE_FOLDER_MESSAGES,
    folderMessages,
  }
}
