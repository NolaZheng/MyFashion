<template>
  <div class="checkout-page">
    <div class="checkout-header">
      <div class="header-block">
        <span>Product</span>
      </div>
      <div class="header-block">
        <span>Description</span>
      </div>
      <div class="header-block">
        <span>Quantity</span>
      </div>
      <div class="header-block">
        <span>Price</span>
      </div>
      <div class="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div
      class="checkout-item"
      v-for="(item, index) in orderList"
      :key="index"
      :item="item"
    >
      <div class="image-container">
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
        />
      </div>
      <span class="name">{{ item.name }}</span>
      <span class="quantity">
        <div
          class="arrow"
          @click="minusItem(item.name, item.price, item.quantity)"
        >
          &#10094;
        </div>
        <span class="value">{{ item.quantity }}</span>
        <div
          class="arrow"
          @click="plusItem(item.name, item.img, item.price, item.quantity)"
        >
          &#10095;
        </div>
      </span>
      <span class="price">{{ item.price * item.quantity }}</span>
      <div class="remove-button" @click="removeItem(item.name)">
        &#10005;
      </div>
    </div>
    <div class="total">TOTAL: ${{ allPrice }}</div>
  </div>
</template>

<script>
export default {
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
    },
    allPrice() {
      return this.$store.getters.allPrice
    }
  },
  methods: {
    plusItem(name, img, price, q) {
      const cartItem = {
        name,
        img,
        price,
        totalPrice: price,
        quantity: 1
      }
      // console.log(cartItem)
      this.$store.dispatch('buyItem', cartItem)
      q += 1
    },
    removeItem(name) {
      this.$store.dispatch('removeItem', name)
    },
    minusItem(name, price, q) {
      if (q <= 1) {
        this.$store.dispatch('removeItem', name)
      } else {
        q -= 1
        this.$store.dispatch('minusItem', { name, price })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-page {
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
}

.checkout-item {
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  .image-container {
    width: 20%;
    padding-right: 15px;
    height: 135px;
    justify-self: start;

    .image {
      width: 100%;
      height: 100%;
      margin-left: -35px;

      background-size: cover;
      background-position: center;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
}
</style>
