const resources = {
  v1_inventory_books_list: "/v1/inventory/books/"
};

export default $this => ({
  getBooks() {
    console.log("getBooks");
    return $this.$axios.get(resources.v1_inventory_books_list);
  }
});
