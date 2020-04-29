<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img class="logo" alt="Vue logo" src="./assets/crown.svg" />
      </router-link>
      <div class="flexdiv">
        <router-link to="/">Home</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/signin" v-if="!auth">Sign in</router-link>
        <a class="logout" @click="logout" v-if="auth">Log out</a>
        <div class="cart-icon" @click.stop="cartClose">
          <img
            class="shopping-icon"
            alt="Shopping bag"
            src="./assets/shopping-bag.svg"
          />
          <span class="item-count">{{ itemCount }}</span>
        </div>
        <CartItem v-if="show == true" />
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
export default {
  components: {
    CartItem: Cart
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated
    },
    itemCount() {
      return 2
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    cartClose() {
      this.show = !this.show
    }
  },
  mounted() {
    const that = this
    document.addEventListener('click', function(e) {
      that.show = false //that代表组件，this代表document
    })
  }
}
</script>

<style scoped lang="scss">
.flexdiv {
  display: flex;
  align-items: center;
}
#app {
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 20px 40px;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin: 10px 55px;
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

.cart-icon {
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
}
</style>
