<template>
  <div class="app">
    <main>
      <navbar />
      <div class="main_page_box">
        <div class="searchInput_box">
          <!--searchInput components-->
          <SearchInput v-model="searchKeyword" @keyup.enter="searchProducts" @search="searchProducts"
            @cancel="cancel" />
        </div>
        <div class="tabList_box">
          <!--tab components-->
        </div>
        <div class="gallery_items_list">
          <ul>
            <li class="item flex" v-for="photo, idx in photoCnt" :key="idx" @click="moveToDetailPage(photo.id)">
              <img :src="photo.imageUrl" :alt="photo.name" class="product-image">
              <p id="photo_name">{{ photo.name }}</p>
            </li>
          </ul>
        </div>
        <div class="cart-wrapper">
          <button class="like_btn" @click="likePage">MY LIKE</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import navbar from '@/components/navbar.vue'
import { fetchProducts, fetchProductsByKeyword } from '@/api/index'


export default {
  data() {
    return {
      searchKeyword: '',
    }
  },
  async asyncData() {
    //const response = await axios.get('http://localhost:3000/products')
    const response = await fetchProducts()
    const value = response.data
    console.log("값 ㅎㅇ", value.length)

    const photoVal = response.data.map((item) => ({
        ...item, 
        imageUrl : `${item.imageUrl}?random=${Math.random()}`
    }))
    var photoCnt = photoVal.splice(0, 14)

    return { photoCnt }
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
      //this.photoCnt!!! 에 response.data값을 넣어주기 **
      this.photoCnt = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    },
    cancel() {
      this.searchKeyword = ''
    },
    likePage() {
      this.$router.push(`/cart`)
    }
  }
}
</script>

<style scoped>
.main_page_box {
  text-align: center;
  padding-top: 100px;
  /*padding: 40px 200px; 아 내가 padding을 위아래 옆으로 다 줘서 버튼이 구겨졌구나...*/

}
ul {
   list-style: none;
}
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
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
#name {
  margin-top: 8px;
}
.like_btn {
  border-radius: 40px;
  background: #7530ff;
  color: white;
  border: none;
  width: 100px;
  height: 70px;
  font-size: 17px;
}
</style>