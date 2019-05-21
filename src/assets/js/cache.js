import { LocalStorage } from 'assets/js/storage.js'

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

const FAV_KEY = '__fav__'
const FAV_MAX_LEN = 200

const insertArray = (arr, val, compare, max) => {
  const index = arr.findIndex(compare)

  if (index === 0) {
    return
  }

  if (index > 0) {
    arr.splice(index, 1)
  }

  arr.unshift(val)

  if (max && arr.length > max) {
    arr.pop()
  }
}

const deleteFromArray = (arr, compare) => {
  const index = arr.findIndex(compare)

  if (index > -1) {
    arr.splice(index, 1)
  }
}

export const savePlay = show => {
  let shows = LocalStorage.get(PLAY_KEY, [])

  insertArray(shows, show, item => {
    return show.id === item.id
  }, PLAY_MAX_LEN)

  return LocalStorage.set(PLAY_KEY, shows)
}

export const loadPlay = () => {
  return LocalStorage.get(PLAY_KEY, [])
}

export const saveFav = show => {
  let shows = LocalStorage.get(FAV_KEY, [])

  insertArray(shows, show, item => {
    return show.id === item.id
  }, FAV_MAX_LEN)

  return LocalStorage.set(FAV_KEY, shows)
}

export const deleteFav = show => {
  let shows = LocalStorage.get(FAV_KEY, [])

  deleteFromArray(shows, item => {
    return item.id === show.id
  })

  return LocalStorage.set(FAV_KEY, shows)
}

export const loadFav = () => {
  return LocalStorage.get(FAV_KEY, [])
}