<template>
  <div class="app">
    <main>
      <div class="main_page_box">
        <div class="searchInput_box">
          <!--searchInput components-->
          <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
        </div>
        <div class="tabList_box">
          <!--tab components-->
        </div>
        <div class="gallery_items_list">
          <ul>
            <li class="item flex" v-for="photo in photos" :key="photo.id" @click="moveToDetailPage(photo.id)">
              <img :src="photo.imageUrl" :alt="photo">
              <p id="photo_name">{{ photo.name }}</p>
              <p id="photo_price">{{ photo.price }}</p>
            </li>
          </ul>
        </div>
        <div class="cart-wrapper">
          <button>장바구니</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductsByKeyword } from '@/api/index'

export default {
  data() {
    return {
      searchKeyword: '',
    }
  },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const value = response.data
    console.log("값 ㅎㅇ", value)
    //imageUrl 랜덤으로 돌리기 
    const photos = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))

    return { photos }
  },
  methods: {
    moveToDetailPage(id) {
      console.log("ddd", id)
      //아이디 넘겨서 상세 페이지로 이동 
      this.$router.push(`detail/${id}`)
    },
    async searchProducts() {
      //input 값 this.serachKeyword 값을 api함수호출로 넘기기 
      const response = await fetchProductsByKeyword(this.searchKeyword)
      console.log("검색값", response)
      //this.photos!!! 에 response.data값을 넣어주기 **
      this.photos = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    }
  }
}
</script>

<style>
</style>