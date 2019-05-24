import moment from 'moment'

export default {
  player(state) {
    return state.player
  },
  playlist(state) {
    return state.playlist
  },
  sequencelist(state) {
    return state.sequencelist
  },
  playBtnClass(state) {
    return !state.player.playing ? 'iconfont icon-play' : 'iconfont icon-pause'
  },
  currentTime(state) {
    let seconds = state.player.current
    return moment.utc(seconds * 1000).format('HH:mm:ss')
  },
  durationTime(state) {
    let seconds = state.player.duration
    return moment.utc(seconds * 1000).format('HH:mm:ss')
  },
  progress(state) {
    let { current, duration } = state.player
    return current / duration * 100
  },
  cover(state) {
    return state.player.show.cover ? state.player.show.cover : ''
  }
}