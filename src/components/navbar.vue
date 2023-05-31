<template>
  <div>
    <nav class="brown lighten-1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">FloorsShop</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link tag="li" to="/" active-class="active"
            ><a href="#">Floors</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>
