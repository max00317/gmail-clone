import * as DATA from './_DATA'

interface fetchResponse {
  ok: boolean
  status: number
  json: any
}

export const fetch = async (
  url: string
  // config?: Record<string, string | number>
): Promise<fetchResponse> => {
  switch (url) {
    case '/folders': {
      return {
        ok: true,
        status: 200,
        json: DATA._getFolders,
      }
    }
    case '/folders/inbox': {
      return {
        ok: true,
        status: 200,
        json: DATA._getInbox,
      }
    }
    case '/folders/trash': {
      return {
        ok: true,
        status: 200,
        json: DATA._getTrash,
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}

// export const useFolders = async () => {
//   const result = await fetch('/folders')
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
