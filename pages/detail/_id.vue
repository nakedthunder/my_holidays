<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img class="product-image" :src="product.imageUrl" :alt="product.name">
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <span class="price">{{ product.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { fetchProductById } from '@/api/index'
export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    console.log("이거 나오면 ㅠ", response)
    const product = response.data
    return { product }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.porduct-image {
  width: 500px;
  height: 375px;
}

.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;

}
</style>
