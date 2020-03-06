<template>
  <div class="px-4">
    <b-table bordered hover :items="books" :fields="fields">
      <template v-slot:cell(actions)="data">
        <div class="text-center">
          <font-awesome-icon
            class="clickable-hover"
            icon="eye"
            @click="info(data.item, $event.target)"
          ></font-awesome-icon>
          <nuxt-link
            :to="{
              name: 'inventory-books-update-id',
              params: { id: data.item.id }
            }"
            ><font-awesome-icon
              class="clickable-hover"
              icon="edit"
            ></font-awesome-icon
          ></nuxt-link>
          <font-awesome-icon
            class="clickable-hover"
            icon="times-circle"
            @click="removeItem(data.item.id)"
          ></font-awesome-icon>
        </div>
      </template>
    </b-table>

    <b-modal :id="infoModal.id" ok-only @hide="resetInfoModal">
      <b-table stacked borderless :items="book">
        <template v-slot:cell(image)="data">
          <div v-if="data.item.image">
            <b-img
              v-if="dev"
              :src="data.item.image.replace('django', 'localhost')"
              fluid
              alt="data.item.name"
            />
            <b-img v-else :src="data.item.image" fluid alt="data.item.name" />
          </div>
        </template>
      </b-table>
    </b-modal>
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
      fields: ["name", "description", { key: "actions", label: "" }],
      infoModal: { id: "info-modal" },
      book: []
    };
  },
  computed: {
    dev() {
      return process.env.NODE_ENV === "development";
    }
  },
  methods: {
    info(item, button) {
      this.book = [item];
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.book = [];
    },
    async removeItem(id) {
      await this.$store.dispatch("inventory/deleteBook", id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
