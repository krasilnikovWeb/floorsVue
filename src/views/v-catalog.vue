<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <v-catalog-item v-for="floor in floors" :key="floor.id" :item="floor" />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
  props: ["typeId"],
  components: {
    vCatalogItem,
  },
  computed: {
    floors() {
      return this.$store.getters.floorsById(+this.typeId);
    },
  },
  mounted() {
    this.$store.dispatch("loadFloors");
  },
};
</script>

<style lang="scss" scoped>
.v-catalog {
  &__list {
    @media (min-width: 700px) {
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
</style>
