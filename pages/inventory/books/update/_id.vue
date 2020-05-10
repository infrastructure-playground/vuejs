<template>
  <div>
    <BookForm method="Update" :book="book" />
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
  async fetch({ store, error, params }) {
    try {
      await Promise.all([
        store.dispatch("inventory/fetchBooks"),
        store.dispatch("inventory/fetchBook", params.id)
      ]);
    } catch (e) {
      console.log("Error: " + e);
    }
  },
  data() {
    return {
      book: Object.assign(
        {},
        this.$store.state.inventory.book[this.$route.params.id]
      )
    };
  },
  computed: mapState({
    books: state => state.inventory.books,
    name: state => state.inventory.name
  })
};
</script>

<style lang="scss" scoped></style>
