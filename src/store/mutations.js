export default {
  GETAUDIO(state, el) {
    state.audioElement = el
  },
  SENDSHOW(state, show) {
    state.player.state = true
    state.player.title = show.name
    state.player.album = show.album
    state.player.cover = show.cover
    state.player.historyList.push(show)
    state.audioElement.src = show.audioUrl[0].url
  },
  GETDURATION(state) {
    return state.audioElement.duration
  },
  SETPROGRESS(state, time) {
    state.audioElement.currentTime = time
  },
  PREV(state) {

  },
  NEXT(state) {

  },
  PLAY(state) {
    state.player.state = true
    state.audioElement.play()
  },
  PAUSE(state) {
    state.player.state = false
    state.audioElement.pause()
  },
  TOGGLE(state) {
    state.player.state = !state.player.state
    if (state.player.state) {
      state.audioElement.play()
    } else {
      state.audioElement.pause()
    }
  },
  SETALBUMLIST(state, list) {
    state.albumList = list
  },
  SETALBUMINDEX(state, index) {
    state.albumIndex = index
  },
  SETSHOWLIST(state, list) {
    state.showList = list
  },
  SETSHOWINDEX(state, index) {
    state.showIndex = index
  }
}