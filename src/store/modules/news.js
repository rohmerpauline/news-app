import NewsService from '@/services/NewsService.js';

export const namespaced = true

export const state = {
    articles: []
}

export const getters = {

}

export const actions = {
    getNews({ commit }){
        return NewsService.getTopNews()
        .then(response => {
            commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    },
    getVueNews({ commit }){
        return NewsService.getVueNews()
        .then(response => {
            commit('GET_NEWS_VUE', response.data);
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    },
}

export const mutations = {
  SET_NEWS(state, articles){
      state.articles = articles;
  },
}