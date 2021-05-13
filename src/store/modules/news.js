import NewsService from '@/services/NewsService.js';

export const namespaced = true

export const state = {
    articles: []
}

export const getters = {

}

export const actions = {
    getNews({ commit }, category){
        return NewsService.getTopNews(category)
        .then(response => {
            commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    },
}

export const mutations = {
  SET_NEWS(state, articles){
      return state.articles = articles;
  },
}