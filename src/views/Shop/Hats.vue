<template>
  <div>
    <h1 class="px30">HATS</h1>
    <router-link tag="h3" class="px30" to="/shop">back to shop </router-link>

    <div class="preview">
      <div
        class="collection-item"
        v-for="(collections, index) in collection"
        :key="index"
      >
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + collections.imageUrl + ')' }"
        />
        <div class="collection-footer">
          <span class="name">{{ collections.name }}</span>
          <span class="price">${{ collections.price }}</span>
        </div>
        <button
          class="custom-button inverted"
          @click="
            addToCart(collections.name, collections.imageUrl, collections.price)
          "
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import collection from '../../data/shop-items'
// @ is an alias to /src

export default {
  name: 'Hats',
  data() {
    return {
      collection: collection[0].items
    }
  },
  methods: {
    addToCart(name, img, price) {
      const cartItem = {
        name,
        img,
        price,
        totalPrice: price,
        quantity: 1
      }
      console.log(cartItem)
      this.$store.dispatch('buyItem', cartItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.px30 {
  padding: 0 30px;
  &:hover {
    cursor: pointer;
    color: rgb(226, 135, 82);
  }
}

.preview {
  display: flex;
  justify-content: flex-start;
  padding: 0 30px;

  flex-wrap: wrap;
}
.collection-item {
  width: 22%;
  display: flex;
  flex-direction: column;

  height: 450px;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  &:not(:last-child) {
    margin-right: 3%;
  }
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 340px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
}

.custom-button {
  min-width: 165px;
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
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
}
</style>
