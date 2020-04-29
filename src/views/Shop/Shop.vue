<template>
  <div class="shop">
    <h1 class="px30">Collections</h1>
    <div
      class="collection-preview"
      v-for="(collections, routeName, index) in collection"
      :key="index"
    >
      <router-link tag="h1" class="title" :to="{ path: collections.routeName }"
        >{{ collections.title.toUpperCase() }}
      </router-link>

      <div class="preview">
        <div
          class="collection-item"
          v-for="(collection2, index) in limitBy(collections.items, 4)"
          :key="index"
        >
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + collection2.imageUrl + ')' }"
          />
          <div class="collection-footer">
            <span class="name">{{ collection2.name }}</span>
            <span class="price">${{ collection2.price }}</span>
          </div>
          <button class="custom-button inverted">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue2Filters from 'vue2-filters'
import collection from '../../data/shop-items'

export default {
  name: 'Shop',
  components: {},
  data() {
    return {
      collection
    }
  },
  mixins: [Vue2Filters.mixin]
}
</script>

<style lang="scss" scoped>
.shop {
  padding: 20px 40px;
}
.px30 {
  padding: 0 30px;
  margin-bottom: 20px;
}
.collection-preview {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    width: 100%;
    display: inline-block;

    &:hover {
      cursor: pointer;
      color: rgb(226, 135, 82);
    }
  }

  .preview {
    display: flex;
    justify-content: flex-start;
  }
}
.collection-item {
  width: 24%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
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
