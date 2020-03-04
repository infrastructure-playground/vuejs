import InventoryService from "@/services/InventoryService.js";

export const state = () => ({
  books: []
});
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  ADD_BOOK(state, book) {
    state.books.push(book);
  }
};
export const actions = {
  createBook({ commit }, book) {
    console.log("createBook: " + book);
    return InventoryService(this)
      .postBook(book)
      .then(response => {
        return commit("ADD_BOOK", response.data);
      })
      .catch(error => {
        for (const key in error.response.data) {
          this.$notify({
            group: "createBook",
            type: "error",
            title: `<b class="text-capitalize">${key}<b>: `,
            text: error.response.data[key][0]
          });
        }
      });
  },
  fetchBooks({ commit }) {
    return InventoryService(this)
      .getBooks()
      .then(response => {
        return commit("SET_BOOKS", response.data);
      });
  }
};
