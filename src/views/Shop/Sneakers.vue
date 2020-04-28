<template>
  <div>
    <h1 class="px30">SNEAKERS</h1>
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
      </div>
    </div>
  </div>
</template>

<script>
import collection from '../../data/shop-items'
// @ is an alias to /src

export default {
  name: 'Sneakers',
  data() {
    return {
      collection: collection[1].items
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
</style>
