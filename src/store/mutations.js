import * as types from './types'

export default {
  GETAUDIO(state, el) {
    state.audioElement = el
  },
  SENDSHOW(state, show) {
    state.player.playing = true
    state.player.show.id = show.id
    state.player.show.title = show.name
    state.player.show.album = show.album
    state.player.show.cover = show.cover
    state.player.show.url = show.audioUrl[0].url
    state.historyList.push(show)
    state.audioElement.src = show.audioUrl[0].url
    state.audioElement.playbackRate = state.player.playbackRate || 1
  },
  GETDURATION(state) {
    return state.audioElement.duration
  },
  SETPROGRESS(state, time) {
    state.audioElement.currentTime = time
  },
  PLAY(state) {
    state.player.playing = true
    state.audioElement.play()
  },
  PAUSE(state) {
    state.player.playing = false
    state.audioElement.pause()
  },
  TOGGLE(state) {
    state.player.playing = !state.player.playing
    if (state.player.playing) {
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
  },
  SETPLAYLIST(state, list) {
    state.player.playlist = list
  },
  SETSEQUENCELIST(state, list) {
    state.player.sequencelist = list
  },
  SETINDEX(state, index) {
    state.player.index = index
  },
  SHOWPLAYLIST(state) {
    state.player.isPlaylistShow = true;
  },
  HIDEPLAYLIST(state) {
    state.player.isPlaylistShow = false;
  },
  SETPLAYBACKRATE(state, rate) {
    state.player.playbackRate = rate
    state.audioElement.playbackRate = state.player.playbackRate || 1
  },
  SETVOLUME(state, volume) {
    state.audioElement.volume = volume || 1
  }
}