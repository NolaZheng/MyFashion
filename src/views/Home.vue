<template>
  <div class="home">
    <HomeItem />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeItem from '@/components/HomeItem.vue'

export default {
  name: 'Home',
  components: {
    HomeItem
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;
}
</style>
