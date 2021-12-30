import * as data from './_DATA'
// import * as users from './users'

// export function getFolders(): Promise<string[]> {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({ ...folders }), 1000)
//   })
// }

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
    // case '/login': {
    //   const user = await users.login(JSON.parse(config.body))
    //   return {
    //     ok: true,
    //     status: 200,
    //     json: async () => ({user}),
    //   }
    // }
    case '/folders': {
      // const folder = await users.login(JSON.parse(config.body))
      // const foldersObj = await _getFolders()
      // console.log(`foldersObj`, foldersObj)
      // console.log(`Object.values(foldersObj)`, Object.values(foldersObj))
      return {
        ok: true,
        status: 200,
        // json: async () => folders,
        json: data._getFolders,
      }
      // return new Promise((res, rej) => {
      //   setTimeout(
      //     () =>
      //       res({
      //         ok: true,
      //         status: 200,
      //         json: async () => folders,
      //       }),
      //     500
      //   )
      // })
      return new Promise((res, rej) => {
        setTimeout(
          () =>
            res({
              ok: true,
              status: 200,
              json: async () => data.folders,
              // json: async () => Object.values(_getFolders()),
            }),
          3000
        )
      })
    }

    // case '/checkout': {
    //   const isAuthorized = user.authorize(config.headers.Authorization)
    //   if (!isAuthorized) {
    //     return Promise.reject({
    //       ok: false,
    //       status: 401,
    //       json: async () => ({ message: 'Not authorized' }),
    //     })
    //   }
    //   const shoppingCart = JSON.parse(config.body)
    //   // do whatever other things you need to do with this shopping cart
    //   return {
    //     ok: true,
    //     status: 200,
    //     json: async () => ({ success: true }),
    //   }
    // }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}

export const useFolders = async () => {
  const result = await fetch('/folders')
  const folders1 = await result.json()
  return folders1
  console.log(`folders:`, folders1)
}
