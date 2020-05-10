<template>
  <ValidationObserver ref="observer" v-slot="{ invalid }">
    <b-form
      class="form-crud"
      @submit.prevent="method === 'Update' ? updateBook(book) : createBook()"
    >
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
        {{ method }}
      </b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "BookList",
  props: {
    method: {
      type: String,
      default: "Add"
    },
    book: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    async createBook() {
      const res = await this.$store.dispatch("inventory/createBook", this.book);
      if (res) {
        this.book = {};
        this.$refs.observer.reset();
      }
    },
    async updateBook() {
      await this.$store.dispatch("inventory/updateBook", this.book);
    }
  }
};
</script>

<style lang="scss" scoped></style>
