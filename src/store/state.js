import { playMode } from 'assets/js/config.js'
import { loadPlay, loadFav } from 'assets/js/cache.js'

export default {
  audioElement: null,
  vkey: '',
  player: {
    show: {
      id: null,
      title: 'QQFM-Vue',
      album: 'journey-ad',
      cover: ''
    },
    current: 0,
    duration: 0,
    playing: false,
    mode: playMode.sequence,
    index: -1,
    playlist: [],
    sequencelist: [],
  },
  albumList: { list: [], total: 0 },
  albumIndex: 0,
  showList: [],
  showIndex: 0,
  historyList: loadPlay(),
  favList: loadFav()
}