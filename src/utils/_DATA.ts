import type * as type from '../types/Gmail'

const folders = [
  'Inbox',
  'Trash',
  'Work Emails',
  'Mailing Lists',
  'Sent',
  'Spam',
  'Drafts',
  'Personal',
] as const

export const messages = {
  '098ddd': {
    from: 'Grace Hopper <grace.hopper@example.com>',
    id: '098ddd',
    subject: 'New Compiler Version Available',
    to: 'Coding Test User <foo.bar@example.com>',
    date: 'Sun, 20 Jun 2021 09:45:30 -0600',
    body: 'Version 123 of our compiler is out! Please have a look and let us know any feedback.\n\nGrace',
  },
  '123abc': {
    from: 'Jane Doe <jane.doe@example.com>',
    id: '123abc',
    subject: 'Re: Postgres Meetup Thursday',
    to: 'Coding Test User <foo.bar@example.com>',
    date: 'Mon, 21 Jun 2021 09:03:30 -0700',
    'reply-to': 'Jane Doe <jane.doe@example.com>',
    body: "Thursday's meetup will be held at 6 pm.\nPizza, beer, and soft drinks will be provided.\nI'll be giving a talk on the Postgres disk buffering system, and my colleague Alonzo Church will talk about a lambda calculus based extension language we're building.",
  },
  '456def': {
    from: 'Richard Roe <richard.roe@example.com>',
    id: '456def',
    subject: 'Lunch next week',
    to: 'Coding Test User <foo.bar@example.com>',
    date: 'Mon, 21 Jun 2021 11:33:30 -0500',
    'reply-to': 'Richard Roe <richard.roe@example.com>',
    body: "Hey,\nI'll be in town Monday and Tuesday - want to grab lunch?",
  },
  '789aaa': {
    from: 'Alan Turing <alan@example.com>',
    id: '789aaa',
    subject: 'Emacs Release Update',
    to: 'Coding Test User <foo.bar@example.com>',
    date: 'Mon, 21 Jun 2021 11:33:30 -0500',
    body: 'A new release of my favorite editor, Emacs, is out.\nDetails are at https://www.example.com\nAny feedback is welcome.\n\n-Alan',
  },
  '999999': {
    from: 'Acme Corp <customerservice@example.com>',
    id: '999999',
    subject: 'Package delivered Thursday',
    to: 'Coding Test User <foo.bar@example.com>',
    date: 'Mon, 21 Jun 2021 23:17:30 -0700',
    'reply-to': 'Acme Corp <customerservice@example.com>',
    body: 'Hello\n\nYour widget was delivered last Thursday.\nThe package was left on your front porch.\n\nRegards,\nAcme Corp.',
  },
}

const Inbox = [
  {
    key: '123abc',
    'message-id': '123abc',
    from: 'Jane Doe',
    subject: 'Re: Postgres Meetup Thursday',
  },
  {
    key: '456def',
    'message-id': '456def',
    from: 'Richard Roe',
    subject: 'Lunch Next Week',
  },
  {
    key: '789aaa',
    'message-id': '789aaa',
    from: 'Alan Turing',
    subject: 'Emacs Release Update',
  },
  {
    key: '098ddd',
    'message-id': '098ddd',
    from: 'Grace Hopper',
    subject: 'New Compiler Version Available',
  },
]

const Trash = [
  {
    key: '999999',
    'message-id': '999999',
    from: 'Acme Corp',
    subject: 'Package delivered Thursday',
  },
  {
    key: '88888888',
    'message-id': '88888888',
    from: 'Richard Roe',
    subject: 'Re: Project looks good',
  },
]

const folderMessages: type.FolderMessageKey = {
  Inbox,
  Trash,
  'Work Emails': [] as type.FolderMessage[],
  'Mailing Lists': [] as type.FolderMessage[],
  Sent: [] as type.FolderMessage[],
  Spam: [] as type.FolderMessage[],
  Drafts: [] as type.FolderMessage[],
  Personal: [] as type.FolderMessage[],
}

// const contacts = [
//   {
//     name: 'Grace Hopper',
//     email: 'grace.hopper@example.com',
//     icon: 'https://example.com/~grace/photo.gif',
//   },
//   {
//     name: 'Richard Roe',
//     email: 'richard.roe@example.com',
//     icon: 'https://example.com/users/roe.jpg',
//   },
//   {
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com',
//     icon: 'https://example.com/doe.jpg',
//   },
//   {
//     name: 'Montgomery Burns',
//     email: 'burns@example.com',
//   },
//   {
//     name: 'Alan Turing',
//     email: 'alan@example.com',
//   },
// ]

// const settings = {
//   signature: '--------\nCoding Test User\nFrontend Engineer, Wallaroo',
//   'vacation-autorespond': false,
//   density: 'compact',
//   'inbox-type': 'priority-inbox',
//   'messages-per-page': 50,
//   'reply-mode': 'reply-all',
//   spellcheck: false,
//   autocorrect: false,
//   'desktop-notifications': false,
// }

// const filters = [
//   {
//     'match-field': 'subject',
//     'match-text': 'lotto',
//     action: 'move',
//     target: 'spam',
//   },
//   {
//     'match-field': 'subject',
//     'match-text': 'package',
//     action: 'move',
//     target: 'Personal',
//   },
//   {
//     'match-field': 'from',
//     'match-text': 'Joe',
//     action: 'move',
//     target: 'Personal',
//   },
// ]

// export function _getFolders(): Promise<string[]> {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({ ...folders }), 1000)
//   })
// }
const ERROR_MSG = 'Mock Network Error'

function random1to10(): number {
  return Math.floor(Math.random() * 10) + 1
}

export const _getFolders = (): Promise<typeof folders> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random1to10() < 1) return rej(new Error(ERROR_MSG))
      // return res({ ...folders })
      return res(folders)
    }, 3000)
  })
}

// export const _getInbox = (): Promise<type.FolderMessage[]> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(new Error(ERROR_MSG))
//       // return res({ ...Inbox })
//       return res(Inbox)
//     }, 300)
//   })
// }

// export const _getTrash = (): Promise<type.FolderMessage[]> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(console.error(ERROR_MSG))
//       // return res({ ...Trash })
//       return res(Trash)
//     }, 300)
//   })
// }

// export const _getEmptyFolder = (): Promise<Record<string, never>> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(console.error(ERROR_MSG))
//       return res({})
//     }, 300)
//   })
// }

// export const _098ddd = (): Promise<type.Message> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(console.error(ERROR_MSG))
//       return res(messages['098ddd'])
//     }, 300)
//   })
// }

export function _getFolderMessages(
  folder: typeof folders[number]
): Promise<type.FolderMessage[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random1to10() < 1) return rej(console.error(ERROR_MSG))
      // return res(folderMessages[folder])
      return res(folderMessages[folder])
    }, 300)
  })
}

export function _getMessage(
  messageId: keyof typeof messages
): Promise<type.Message> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random1to10() < 1) return rej(console.error(ERROR_MSG))
      return res(messages[messageId])
    }, 300)
  })
}

// export const _getFolderMessages = (): Promise<Record<string, type.FolderMessage[]>
// export const _getFolderMessages = (): Promise<type.FolderMessageKey> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(console.error(ERROR_MSG))
//       return res({ ...folderMessages })
//     }, 1000)
//   })
// }

// // export const _getMessages = (): Promise<Record<string, type.Message>> => {
// export const _getMessages = (): Promise<type.MessageKey> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (random1to10() < 1) return rej(console.error(ERROR_MSG))
//       return res({ ...messages })
//     }, 1000)
//   })
// }
