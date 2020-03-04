const resources = {
  v1_inventory_books: "/v1/inventory/books/"
};

export default $this => ({
  getBooks() {
    return $this.$axios.get(resources.v1_inventory_books);
  },
  postBook(book) {
    console.log("postBook: " + book);
    return $this.$axios.post(resources.v1_inventory_books, book);
  }
});
