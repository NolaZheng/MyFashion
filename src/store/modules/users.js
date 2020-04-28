import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router/index'

const state = {
  idToken: null,
  userId: null,
  user: null
}

// getters
const getters = {
  user (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.idToken !== null
  }
}

// mutations
const mutations = {
  authUser (state, userData) {
    state.idToken = userData.idToken
    state.userId = userData.userId
  },

  storeUser (state, user) {
    state.user = user
  },

  clearAuthData (state) {
    state.idToken = null
    state.userId = null
    state.user = null
  }
}

// actions
const actions = {
  signup ({ commit, dispatch }, authData) {
    axios
      .post(
        '/accounts:signUp?key=AIzaSyDbSlPHSzcv49d3dtzZPR1Ld90_GaqMJ1Q',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then((res) => {
        console.log(res)
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('storeUser', authData)
      })
      .catch((err) => console.log(err))
  },

  login ({ commit }, authData) {
    axios
      .post(
        '/accounts:signInWithPassword?key=AIzaSyDbSlPHSzcv49d3dtzZPR1Ld90_GaqMJ1Q',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then((res) => {
        console.log(res)
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        })
      })
      .catch((err) => console.log(err))
  },

  logout ({ commit }) {
    commit('clearAuthData')
    router.replace('/signin')
  },

  // store in /users in firebase
  storeUser ({ commit, state }, userData) {
    if (!state.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch((err) => console.log(err))
  },

  fetchUser ({ commit, state }) {
    if (!state.idToken) {
      return
    }
    globalAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
