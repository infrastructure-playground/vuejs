<template>
  <div>
    <b-table bordered hover :items="books" :fields="fields">
      <template v-slot:cell(actions)>
        <font-awesome-icon
          class="clickable-hover"
          icon="eye"
        ></font-awesome-icon>
        <font-awesome-icon
          class="clickable-hover"
          icon="edit"
        ></font-awesome-icon>
        <font-awesome-icon
          class="clickable-hover"
          icon="times-circle"
        ></font-awesome-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "books",
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
