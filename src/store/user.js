import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import messages from '../config/messages'

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
          commit('setError', messages[error.code] || 'Тодорхойгүй алдаа')
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
          commit('setError', messages[error.code] || 'Тодорхойгүй алдаа')
        });
    },
    SignOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log('Sign-out successful.')
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
        // An error happened.
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