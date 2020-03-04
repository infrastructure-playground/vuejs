<template>
  <div>
    <b-table striped hover :items="books" :fields="fields">
      <template v-slot:cell(actions)>
        dasda
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("inventory/fetchBooks");
    } catch (e) {
      console.log("Error: " + e);
    }
  },
  data() {
    return {
      fields: ["name", "description", { key: "actions", label: "" }]
    };
  },
  computed: mapState({
    books: state => state.inventory.books
  })
};
</script>

<style lang="scss" scoped></style>
