import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import tarefa from './modules/tarefa'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    langs: [
      {key: 'pt-BR', name:'Português'},
      {key: 'en-US', name:'English'},
    ]
  },
  modules: {
    auth,
    tarefa
  },
  getters: {
    langs: state => state.langs
  }
})
