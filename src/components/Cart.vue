<template>
  <div class="cart-dropdown">
    <div class="cart-items">
      <div class="cart-item" v-for="(item, index) in orderList" :key="index">
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
        />
        <div class="item-details">
          <span class="name">{{ item.name }}</span>
          <span class="price">
            ${{ item.price }} x {{ item.quantity }} =
            {{ item.price * item.quantity }}</span
          >
        </div>
      </div>
      <span class="empty-message" v-if="itemCount == 0"
        >Your cart is empty</span
      >
    </div>
    <router-link tag="button" to="/checkout" class="custom-button">
      GO TO CHECKOUT
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  created() {
    this.$store.dispatch('fetchItem')
  },
  data() {
    return {}
  },
  computed: {
    orderList() {
      return this.$store.getters.cartItems
    },
    itemCount() {
      return this.$store.getters.itemCount
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-dropdown {
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 115px;
  right: 145px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin-top: auto;
  }
}

.cart-item {
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  .image {
    width: 45%;
    background-size: cover;
    background-position: center;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
}

.custom-button {
  min-width: 160px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}
</style>
