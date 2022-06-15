<template>
  <div class="app">
    <main>
      <div class="main_page_box">
        <div class="searchInput_box">
          <!--searchInput components-->
        </div>
        <div class="tabList_box">
          <!--tab components-->
        </div>
        <div class="gallery_items_list">
          <ul>
            <li class="item flex" v-for="photo in photos" :key="photo.id" @click="moveToDetailPage(photo.id)">
              <img :src="photo.imageUrl" :alt="photo">
              <p id="photo_name">{{ photo.name}}</p>
              <p id="photo_price">{{photo.price}}</p>
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

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const value = response.data //서버에서 응답한 데이터 .data
    console.log("값 보기", value)
    const photos = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    return {photos}
  },
  methods : {
    moveToDetailPage(id){
      console.log("아이디", id)
      this.$router.push(`detail/${id}`)
    }
  }
}
</script>

<style>
/* .gallery_items_list { text-align: center;}
.gallery_items_list li { padding: 10px; }
#photo_name { padding-top: 10px; font-weight: bold; font-size: large;}
.gallery_items_list img { width:250px; height: 180px; }
.flex{display: flex; justify-content: center;} */
</style>