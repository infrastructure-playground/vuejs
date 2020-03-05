import InventoryService from "@/services/InventoryService.js";

export const state = () => ({
  books: [],
  book: {}
});
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  ADD_BOOK(state, book) {
    state.books.push(book);
  },
  SET_BOOK(state, book) {
    state.book[book.id] = book;
    const item = state.books.find(item => item.id === book.id);
    Object.assign(item, book);
  }
};
export const actions = {
  createBook({ commit }, book) {
    return InventoryService(this)
      .postBook(book)
      .then(response => {
        commit("ADD_BOOK", response.data);
      })
      .catch(error => {
        for (const key in error.response.data) {
          this.$notify({
            group: "bookForm",
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
  },
  fetchBook({ commit }, id) {
    return InventoryService(this)
      .getBook(id)
      .then(response => {
        return commit("SET_BOOK", response.data);
      });
  },
  updateBook({ commit }, book) {
    return InventoryService(this)
      .putBook(book)
      .then(response => {
        commit("SET_BOOK", response.data);
        this.$notify({
          group: "bookForm",
          type: "success",
          title: "UPDATE SUCCESS!"
        });
      })
      .catch(error => {
        for (const key in error.response.data) {
          this.$notify({
            group: "bookForm",
            type: "error",
            title: `<b class="text-capitalize">${key}<b>: `,
            text: error.response.data[key][0]
          });
        }
      });
  }
};
