import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    dados: []
  },
  getters: {
  },
  mutations: {
    storeDados (state, payload) {
      state.dados = payload
    },
    storeDado (state, payload) {
      state.dados.push(payload)
    },

    deleteDado (state, id) {
      const index = state.dados.findIndex(dado => dado.id === id)

      if (index >= 0) {
        state.dados.splice(index, 1)
      }
    }
  },
  actions: {
    getDados ({ commit }) {
      return axios.get('http://localhost:3000/dados')
        .then((response) => {
          commit('storeDados', response.data)
        })
    },
    addDado ({ commit }, data) {
      return axios.post('http://localhost:3000/dados', data).then((response) => {
        commit('storeDado', response.data)
      })
    },
    editarDado (context, { id, data }) {
      return axios.put(`http://localhost:3000/dados/${id}`, data)
    },
    deleteDado ({ commit }, id) {
      return axios.delete(`http://localhost:3000/dados/${id}`)
        .then(() => commit('deleteDado', id))
    }
  },
  modules: {
  }
})
