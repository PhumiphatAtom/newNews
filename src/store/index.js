import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsData: [],
    panorama: [],
    loading: false,
  },
  mutations: {
    setNewsData(state, payload) {
      // console.log(payload)
      state.newsData = payload;
    },
    setPanorama(state, payload) {
      state.panorama = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchNewsData(state, category) {
      state.commit("setLoading", true);
      axios
        .get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "th",
            apiKey: "135d7f537cfc409b9731b569ebd66529",
            category,
          },
        })
        .then((res) => {
          state.commit("setPanorama", res.data.articles.slice(0, 10));
          state.commit("setNewsData", res.data.articles);
          state.commit("setLoading", false);
        });
    },
  },
  modules: {},
  getters: {
    getNewsData: (state) => state.newsData,
    getPanoramaData: (state) => state.panorama,
    getLoading: (state) => state.loading,
  },
});
