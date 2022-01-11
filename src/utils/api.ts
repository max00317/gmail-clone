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
    json = DATA._getFolderMessages
  } else if (url.includes('/messages/')) {
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
