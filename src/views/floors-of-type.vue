<template>
  <div>
    <h1>Floors</h1>
    <v-catalog :typeId="this.$route.params.id" />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
export default {
  components: {
    vCatalog,
  },
};
</script>

<style lang="scss" scoped></style>
