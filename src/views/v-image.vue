<template>
  <div>
    <a
      class="waves-effect waves-light modal-trigger"
      :href="'#modal1' + imageUrl"
    >
      <img
        class="card responsive-img materialboxed image"
        width="50"
        :src="imageUrl"
      />
    </a>
    <div ref="modal" :id="'modal1' + imageUrl" class="modal">
      <div class="modal-content">
        <img :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    modal: null,
    img: null,
  }),
  props: {
    imageUrl: String,
    default() {
      return {};
    },
  },
  mounted() {
    this.modal = M.Modal.init(this.$refs.modal);
    this.img = M.Materialbox.init(this.$refs.img, {
      inDuration: 300,
      outDuration: 300,
    });
  },
};
</script>

<style lang="scss">
.image {
  height: 50px !important;
  width: 50px;
  border-radius: 50%;
}
</style>
