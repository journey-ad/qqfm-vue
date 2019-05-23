export default {
  prev({ commit, state }) {
    let index = state.player.index - 1

    if (index === -1) index = state.player.playlist.length - 1

    commit('SETINDEX', index)
    commit('SENDSHOW', state.player.playlist[index])
  },
  next({ commit, state }) {
    let index = state.player.index + 1

    if (index === state.player.playlist.length) index = 0

    commit('SETINDEX', index)
    commit('SENDSHOW', state.player.playlist[index])
  },
  backward({ commit, state }) {
    commit('SETPROGRESS', Math.max(0, state.player.current - 15))
  },
  forward({ commit, state }) {
    commit('SETPROGRESS', Math.min(state.player.duration, state.player.current + 15))
  },
  toggle({ commit }) {
    commit('TOGGLE')
  },
  getAudio({ commit }, el) {
    commit('GETAUDIO', el)
  },
  play({ commit }, { list, index }) {
    commit('SETSEQUENCELIST', list)
    commit('SETPLAYLIST', list)
    commit('SETINDEX', index)
    commit('SENDSHOW', list[index])
  },
  getCurrentTime({ state }) {
    state.player.current = state.audioElement.currentTime
  },
  getDuration({ state }) {
    state.player.duration = state.audioElement.duration;
  },
  setProgress({ commit }, time) {
    commit('SETPROGRESS', time)
  },
  setAlbumList({ commit }, list) {
    commit('SETALBUMLIST', list)
  },
  setAlbumIndex({ commit }, index) {
    commit('SETALBUMINDEX', index)
  },
  setShowList({ commit }, list) {
    commit('SETSHOWLIST', list)
  },
  setShowIndex({ commit }, index) {
    commit('SETSHOWINDEX', index)
  }
}