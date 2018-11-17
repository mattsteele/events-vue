import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Matt Steele' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {},
  actions: {},
  // This getter will grab the categories length once, and allow me to use it thoughout the application
  getters: {
    catLength: state => {
      return state.categories.length
    }
  }
})
