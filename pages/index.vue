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
              <img :src="photo.imageUrl" :alt="photo" class="product-image">
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

<style scoped>
.main_page_box{
  text-align: center;
  padding-top: 50px;
}
.main_page_name {
  padding-top: 20px;
}
.main_page_name h2 {
  font-size: x-large;
  font-weight: bold;
}
.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  /* <!--화면 크기에 따라 사진디피 달라짐 --> */
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  /*사진의 높이와 넓이 공간을 주어 잘 정리함*/
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
.main_page_box{
  padding-top: 0px;
}
</style>