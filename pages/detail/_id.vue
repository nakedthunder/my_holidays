//detail > _id.vue
<template>
    <div class="container">
        <div class="main-panel">
            <img :src="photo.imageUrl" :alt="photo.name" class="product-image">
            <p>{{ photo.name }}</p>
            <span>{{ photo.price }}</span>
        </div>
        <div class="side-panel">
            <p class="name"></p>
            <span class="price"></span>
            <button type="button" @click="addToCart">카트에 담기</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { fetchProductById, createCartItem } from '@/api/index'

export default {
    async asyncData({ params }) {
        console.log(params.id)
        const response = await fetchProductById(params.id)
        console.log("값보이냐", response)
        const photo = response.data
        return { photo }
    },
    methods: {
        async addToCart() {
            //1. 먼저 carts에 post로 값 넣어주기 
            const response = await createCartItem(this.photo)
            console.log("post방식", response)
            //2. state.cartItems.push 공통데이터로 넣어주기 
            //mutations addCartItem을 $store.commit으로 접근 
            this.$store.commit('addCartItem', this.photo)
            //3. 그러고선 /cart로 이동 
            this.$router.push('/cart') //카트페이지로 이동 
        }
    }
}
</script>

<style>
</style>