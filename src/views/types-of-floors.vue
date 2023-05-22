<template>
  <div>
    <h1>Types of floors</h1>
    <hr />
    <div v-if="isLoading" class="progress">
      <div class="indeterminate"></div>
    </div>
    <table v-else-if="types?.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(type, idx) of types" :key="type.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ type.title }}</td>
          <td>
            <router-link
              :disabled="countOfFloors(type.id) < 1"
              tag="button"
              class="btn btn-small"
              :to="'/floors/' + type.id"
            >
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No types of floors</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  data: () => ({
    filter: null,
    isLoading: true,
  }),
  computed: {
    types() {
      if (this.$store.getters.types.length > 0) {
        return this.$store.getters.types[0].sections;
      } else return null;
    },
  },
  mounted() {
    this.$store.dispatch("loadFloors");
    this.isLoading = false;
  },
  methods: {
    countOfFloors(id) {
      return this.$store.getters.floorsById(Number(id)).length;
    },
  },
};
</script>

<style lang="scss" scoped></style>
