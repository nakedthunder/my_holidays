<template>
  <div class="app">
    <main>
      <div class="main_page_box">
        <div class="main_page_name">
          <h2>Park's GALLERY</h2>
        </div>
        <!-- v-model 로 대신 사용할 수 있다. 
            <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword"></SearchInput> -->
        <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
        <ul>
          <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
            <img class="product-image" :src="product.imageUrl" :alt="product.name">
            <p>{{ product.name }}</p>
            <span>{{ product.price }}</span>
          </li>
        </ul>
        <div class="cart-wrapper">
          <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
        </div>
      </div>
    </main>
  </div>
</template>



<script>
import axios from 'axios'
import { fetchProductsByKeyword } from '@/api/index'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    console.log(products)
    return { products }
  },
  data() {
    return {
      //데이터를 선언 후 부모페이지 -> 자식페이지로 값을 내려준다. 
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetailPage(id) {
      console.log("아이디값", id)
      //페이지 이동 (detail > _id.vue)
      this.$router.push(`detail/${id}`)
    },
    async searchProducts() {
      console.log("입력값", this.searchKeyword)
      //api모듈화함수 호출 
      const response = await fetchProductsByKeyword(this.searchKeyword)
      //this.products 값으로 search한 값을 뿌려줌 
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    }, 
    moveToCartPage(){
      this.$router.push(`/cart`)
    }
    //    updateSearchKeyword(keyword){
    //        //하위 컴포넌트 input에서 받은 값을 상위컴포넌트로 내려받음  
    //        this.searchKeyword = keyword
    //    }
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
</style>