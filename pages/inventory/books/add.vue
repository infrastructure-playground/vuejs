<template>
  <div>
    <BookForm />
    <BookList :books="books" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookList from "~/components/BookList.vue";
import BookForm from "~/components/BookForm.vue";
export default {
  layout: "books",
  components: {
    BookList,
    BookForm
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
