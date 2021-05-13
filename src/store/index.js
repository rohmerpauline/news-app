import Vue from "vue";
import Vuex from "vuex";
import * as news from "./modules/news.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news
  }
})