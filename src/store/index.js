import { createStore } from "vuex";

export default createStore({
  state: {
    galleryList: [],
  },
  getters: {
    getGalleryList: (state) => {
      return state.galleryList;
    },
  },
  mutations: {
    updateGalleryList(state, payload) {
      state.galleryList = [...payload];
    },
    addGallery(state, payload) {
      state.galleryList = [...state.galleryList, payload];
    },
    deleteGallery(state, payload) {
      console.log("why you not deleting");
      state.galleryList = [
        ...state.galleryList.filter((gallery) => gallery.id !== payload),
      ];
    },
  },
  actions: {
    processAddGallery(context, payload) {
      context.commit("addGallery", payload);
    },
  },
  modules: {},
});
