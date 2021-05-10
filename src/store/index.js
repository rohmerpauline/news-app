import Vue from "vue";
import Vuex from "vuex";
/* import * as news from "@/store/modules/news.js"; */

Vue.use(Vuex)

/* export default new Vuex.Store({
  modules: {
    news
  },
}) */

import NewsService from '@/services/NewsService.js';

/* export const namespaced = true */

const state = {
    articles: []
}

const actions = {
    getNews({ commit }){
        return NewsService.getTopNews()
        .then(response => {
            commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    }
}

const mutations = {
  SET_NEWS(state, articles){
      state.articles = articles;
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})