export default {
  prev({ commit }) {
    commit('PREV')
  },
  next({ commit }) {
    commit('NEXT')
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
  sendShow({ commit }, show) {
    commit('SENDSHOW', show)
  },
  getCurrentTime({ state }) {
    state.player.current = state.audioElement.currentTime
  },
  getDuration({ state }) {
    state.player.duration = state.audioElement.duration;
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