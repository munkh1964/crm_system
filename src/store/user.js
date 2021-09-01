import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user.isAuthenticated = true
      state.user.uid = payload
    },
    unsetUser(state) {
      state.user = {
        isAuthenticated: false,
        uid: null
      }
    }
  },
  actions: {
    SignUp({ commit }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then(() => {
          commit('setProcessing', false)
        })
        .catch((error) => {
          commit('setProcessing', false)
          commit('setError', error.message)
        });
    },
    SignIn({ commit }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then(() => {
          commit('setProcessing', false)
        })
        .catch((error) => {
          commit('setProcessing', false)
          commit('setError', error.message)
        });
    },
    StateChanged({ commit }, payload) {
      if (payload) {
        commit('setUser', payload.uid)
      } else {
        commit('unsetUser')
      }
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated
  }
}