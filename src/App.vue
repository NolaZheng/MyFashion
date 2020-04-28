<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img class="logo" alt="Vue logo" src="./assets/crown.svg" />
      </router-link>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/signin" v-if="!auth">Sign in</router-link>
        <a class="logout" @click="logout" v-if="!auth">Log out</a>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    lo
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Open Sans Condensed';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 20px 40px;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    justify-items: end;
    &:hover {
      color: #42b983;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  width: 70px;
  justify-self: flex-start;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.logout {
  &:hover {
    cursor: pointer;
    color: rgb(226, 135, 82) !important;
  }
}
</style>
