import type * as type from '../types/Gmail'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'

export function receiveMessages(messages: Record<string, type.Message>) {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}
