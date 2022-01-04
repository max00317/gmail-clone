import * as DATA from './_DATA'

interface fetchResponse {
  ok: boolean
  status: number
  json: any
}

export const _fetch = async (
  url: string
  // config?: Record<string, string | number>
): Promise<fetchResponse> => {
  const ok = true
  const status = 200
  let json

  if (url === '/folders') {
    json = DATA._getFolders
  } else if (url.includes('/folders/')) {
    // const match = url.match(/^\/folders\/(?<folder>\w+)$/)
    // switch (match?.groups?.folder) {
    //   case 'Inbox':
    //     json = DATA._getInbox
    //     break
    //   case 'Trash':
    //     json = DATA._getTrash
    //     break
    //   default: {
    //     status = 204
    //     json = DATA._getEmptyFolder
    //   }
    // }
    json = DATA._getFolderMessages
  } else if (url.includes('/messages/')) {
    // const match = url.match(/^\/messages\/(?<messageId>\w+)$/)
    // console.log(`match?.groups?.messageId`, match?.groups?.messageId)
    // console.log('in _fetch now')
    json = DATA._getMessage
  } else {
    throw new Error(`Unhandled request: ${url}`)
  }

  return {
    ok,
    status,
    json,
  }
}

// export const useFolders = async () => {
//   const result = await _fetch('/folders')
//   const folders1 = await result.json()
//   return folders1
//   console.log(`folders:`, folders1)
// }

// export function getInitialData() {
//   return Promise.all([
//     DATA._getFolders(),
//     DATA._getMessages(),
//     DATA._getFolderMessages(),
//   ]).then(([folders, messages, folderMessages]) => ({
//     folders,
//     messages,
//     folderMessages,
//   }))
// }
