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
    state.books.unshift(book);
  },
  SET_BOOK(state, book) {
    state.book[book.id] = book;
    const item = state.books.find(item => item.id === book.id);
    Object.assign(item, book);
  },
  REMOVE_BOOK(state, id) {
    delete state.book[id];
    state.books = state.books.filter(item => item.id !== id);
  }
};
export const actions = {
  createBook({ commit }, book) {
    return InventoryService(this)
      .postBook(book)
      .then(response => {
        commit("ADD_BOOK", response.data);
        return response.data;
      })
      .catch(error => {
        for (const key in error.response.data) {
          this.$notify({
            group: "books",
            type: "error",
            title: `<b class="text-capitalize">${key}<b>: `,
            text: error.response.data[key][0]
          });
        }
      });
  },
  fetchBooks({ commit, getters }) {
    const books = getters.getBooks;
    if (books.length) {
      return books;
    }
    return InventoryService(this)
      .getBooks()
      .then(response => {
        return commit("SET_BOOKS", response.data);
      });
  },
  fetchBook({ commit, getters }, id) {
    const book = getters.getBookById(id);
    if (book) {
      commit("SET_BOOK", book);
      return book;
    }
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
          group: "books",
          type: "success",
          title: "UPDATE SUCCESS!"
        });
      })
      .catch(error => {
        for (const key in error.response.data) {
          this.$notify({
            group: "books",
            type: "error",
            title: `<b class="text-capitalize">${key}<b>: `,
            text: error.response.data[key][0]
          });
        }
      });
  },
  deleteBook({ commit }, id) {
    return InventoryService(this)
      .deleteBook(id)
      .then(response => {
        commit("REMOVE_BOOK", id);
        this.$notify({
          group: "books",
          type: "success",
          title: "DELETE SUCCESS!"
        });
      });
  }
};
export const getters = {
  getBooks: state => {
    return state.books;
  },
  getBookById: state => id => {
    return state.books.find(item => item.id === id);
  }
};
