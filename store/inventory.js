import InventoryService from "@/services/InventoryService.js";

export const state = () => ({
  books: []
});
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  }
};
export const actions = {
  fetchBooks({ commit }, user) {
    console.log("fetchBooks");
    return InventoryService(this)
      .getBooks()
      .then(response => {
        return commit("SET_BOOKS", response.data);
      });
  }
};
