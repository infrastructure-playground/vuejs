<template>
  <ValidationObserver v-slot="{ invalid }">
    <notifications group="createBook" position="top center" />
    <b-form class="form-crud" @submit.prevent="createBook">
      <ValidationProvider
        v-slot="{ valid, errors }"
        name="Name"
        rules="required"
      >
        <b-form-group label="Name: " label-for="name">
          <b-form-input
            id="name"
            v-model="book.name"
            type="text"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <b-form-group label="Description: " label-for="description">
        <b-form-input
          id="description"
          v-model="book.description"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-button variant="primary" type="submit" :disabled="invalid">
        Add
      </b-button>
    </b-form>
    <BookList :books="books" />
  </ValidationObserver>
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
  data() {
    return {
      book: {}
    };
  },
  computed: mapState({
    books: state => state.inventory.books
  }),
  methods: {
    async createBook() {
      await this.$store.dispatch("inventory/createBook", this.book);
    }
  }
};
</script>

<style lang="scss" scoped></style>
