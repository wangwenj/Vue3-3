import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [{
      name:'tangyusen',
      password:'202250915129'
    }],
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user);
    },
    // ...
  },
  actions: {
    register({ commit }, user) {
      // 在这里你可以添加检查用户名是否已存在的逻辑
      const isUserExists = this.state.users.some(u => u.name === user.name)
      if (isUserExists) {
        return Promise.reject('用户已经存在咯~')
      }
      commit('ADD_USER', user)
      return Promise.resolve()
    },
    // ...
  },
  modules: {
    // ...
  }
})

