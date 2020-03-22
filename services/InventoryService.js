const resources = {
  v1_inventory_books: "/v1/inventory/books/"
};

export default $this => ({
  getBooks() {
    return $this.$axios.get(resources.v1_inventory_books);
  },
  postBook(book) {
    return $this.$axios.post(resources.v1_inventory_books, book);
  },
  getBook(id) {
    return $this.$axios.get(`${resources.v1_inventory_books}${id}/`);
  },
  putBook(book) {
    return $this.$axios.put(`${resources.v1_inventory_books}${book.id}/`, book);
  },
  deleteBook(id) {
    return $this.$axios.delete(`${resources.v1_inventory_books}${id}/`);
  }
});
