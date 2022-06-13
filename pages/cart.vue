<template>
    <div class="container">
        <h1 class="list-title">카트 페이지</h1>
        <div class="list-wrapper">
            <ul class="mark">
                <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
                    <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
                    <div class="description">
                        <p>{{ cartItem.name }}</p>
                        <span>{{ cartItem.price }}</span>
                    </div>
                </li>
            </ul>
            <div class="extra-panel">
                <button>구매하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'
export default {
    //nuxt context 의 store를 접근 (넉스트관련된 설정)
   // async asyncData({store}){
        //asyncData를 통해 페이지를 진입하기 전에 서버에\레벨에서 store.dispatch를 호출
        //데이터를 받아올때까지 await를 호출 
      //  await store.dispatch(FETCH_CART_ITEMS) //actions에 FETC_CART_ITEMS 연결 
   // }
    async asyncData({ store }) {
        await store.dispatch('FETCH_CART_ITEMS')
    }
}
</script>

<style scoped>
.mark{
    list-style: none;
}

.container {
    margin: 2rem 10rem;
}

.list-title {
    font-weight: 700;
    font-size: 1.4rem;
}

.list-wrapper {
    margin: 0.4rem 0;
}

.list-item {
    display: flex;
}

.thumbnail {
    width: 100px;
    height: 100px;
}

.description {
    padding: 2rem 1rem;
}

.extra-panel {
    text-align: right;
    padding: 0.2rem 0;
}
</style>