<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__title">{{ item.title }}</div>
    <div class="v-catalog-item__title-image-flex">
      <img
        ref="img"
        class="v-catalog-item__title-image card responsive-img materialboxed"
        :src="item.src"
      />
    </div>

    <div class="v-catalog-item__galery">
      <div v-for="photo in item.photo" :key="photo?.id">
        <v-image :imageUrl="photo.src" />
      </div>
    </div>

    <p>Price: {{ item.price + " " + item.currency }}</p>
  </div>
</template>

<script>
import vImage from "./v-image.vue";
export default {
  data: () => ({
    /* modal: null, */
    vImage: null,
  }),
  props: {
    item: Object,
    default() {
      return {};
    },
  },
  components: {
    vImage,
  },
  mounted() {
    /* this.modal = M.Modal.init(this.$refs.modal); */
    this.img = M.Materialbox.init(this.$refs.img, {
      inDuration: 100,
      outDuration: 100,
    });
  },
};
</script>

<style lang="scss" scoped>
.v-catalog-item {
  flex-basis: 24%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 5px;
  margin: 5px;

  &__title {
    font-weight: bold;
  }
  &__galery {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__title-image {
    height: 100px;
    width: 100px;
  }
  &__title-image-flex {
    display: flex;
    justify-content: center;
  }
}
</style>
