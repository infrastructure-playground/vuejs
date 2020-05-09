<template>
  <div id="book-inventory"><BookList :books="books" /></div>
</template>

<script>
import { mapState } from "vuex";
import BookList from "~/components/BookList.vue";
export default {
  layout: "books",
  components: {
    BookList
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("inventory/fetchBooks");
    } catch (e) {
      console.log("Error: " + e);
    }
  },
  computed: mapState({
    books: state => state.inventory.books
  })
};
</script>

<style lang="scss" scoped></style>
