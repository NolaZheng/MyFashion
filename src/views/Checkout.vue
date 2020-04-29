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
    <div class="checkout-item">
      <div class="image-container">
        <img src="https://i.ibb.co/cvpntL1/hats.png" alt="item" />
      </div>
      <span class="name">{name}</span>
      <span class="quantity">
        <div class="arrow">
          &#10094;
        </div>
        <span class="value">{quantity}</span>
        <div class="arrow">
          &#10095;
        </div>
      </span>
      <span class="price">{price}</span>
      <div class="remove-button">
        &#10005;
      </div>
    </div>
    <div class="total">TOTAL: ${total}</div>
  </div>
</template>

<script>
export default {}
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

  .image-container {
    width: 20%;
    padding-right: 15px;
    height: 135px;

    img {
      width: 100%;
      height: 100%;
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
