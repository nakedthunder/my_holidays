//cart.vue
  <template>
      <div class="container">
          <h1 class="list-title">Favourites</h1>
          <span class="result">{{$store.state.cartItems.length}} </span><span class="result"> results</span>
          <div class="list-wrapper">
              <ul>
                  <li class="list-item" v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
                      <img :src="cartItem.imageUrl" :alt="cartItem.id" class="thumbnail" />
                      <div class="description">
                          <p>{{cartItem.name}}</p>
                          <span>{{cartItem.price}}</span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="extra-panel">
              <button>구매하기</button>
          </div>
      </div>
  </template>

<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
    async asyncData({ store }) {
        //페이지를 진입하기 전에 store를 호출학 await을 검 
        await store.dispatch(FETCH_CART_ITEMS) //상수화 호출 
    }
}
</script>

<style scoped>
.container {
    margin: 120px 0 0 150px;
}
.list-title {
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 20px;
}
.list-wrapper {
  margin: 20px 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 230px;
  height: 230px;
}
.description {
  padding-left: 30px;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
li {
  margin-bottom: 20px;
}
.result {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

.description p {
    font-size: 20px;
    font-weight: 600;
}
</style>
