<template>
  <div class="container">
      <div class="main-panel">
          <img :src="photo.imageUrl" :alt="image" class="product-image">
          <p>{{photo.name}}</p>
          <span>{{photo.price}}</span>
      </div>
      <div class="side-panel">
          <p class="name"></p>
          <span class="price"></span>
          <button>카트에 담기</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { fetchProductById } from '@/api/index'

export default {
    async asyncData({params}){
        console.log(params.id)
        const response = await fetchProductById(params.id)
        console.log("값보이냐", response)
        const photo = response.data
        return {photo}
    }
}
</script>

<style>

</style>