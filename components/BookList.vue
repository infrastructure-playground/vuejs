<template>
  <div class="px-4">
    <b-table bordered hover :items="books" :fields="fields">
      <template v-slot:cell(actions)>
        <div class="text-center">
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
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: {
    books: { type: Array, required: true }
  },
  data() {
    return {
      fields: ["name", "description", { key: "actions", label: "" }]
    };
  }
};
</script>

<style lang="scss" scoped></style>
