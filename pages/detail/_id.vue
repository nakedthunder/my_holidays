//detail > _id.vue
<template>
    <div class="container">
        <div class="main-panel">
            <img :src="photo.imageUrl" :alt="photo.name" class="product-image">
        </div>
    <div class="side-panel">
        <p id="photo_name">{{photo.name}}</p>
        <p id="photo_price">{{photo.price}}</p>
        <button class="btnLike" type="button" @click="addToCart">LIKE</button>
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


<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 10rem 0;
}
.product-image {
    width: 500px;
    height: 375px;
}
.main-panel {
    display: flex;
    flex-direction: column;
}
.side-panel {
    padding: 0 1rem;
    padding-left: 40px;
}
#photo_name {
    font-size: 25px;
    font-weight: 500;
}
#photo_name, 
#photo_price {
    padding-bottom: 10px;
}
.btnLike {
    border-radius: 40px;
    background: #7530ff;
    color: white;
    border: none;
    width: 60px;
    height: 35px;
    font-size: 13px;
}
button {
    margin-top: 50px;
}
</style>