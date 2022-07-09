//detail > _id.vue
<template>
    <div class="container_outter">
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
        <span class="rcom_msg">recommand the other pictures</span>
        <!-- <recommandImg :rcomPhotos="photos"/> -->
        <div class="rcom_img_outter">
            <div class="rcom_img_inner">
                <ul>
                    <li v-for="(photo, index) in photos" :key="index" class="rcom_photos">
                        <img :src="photo.imageUrl" :alt="photo.name" class="rcomImg">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { fetchProducts,fetchProductById, createCartItem } from '@/api/index'

export default {
    async asyncData({ params }) {
        const [product, products] = await Promise.all([
            fetchProductById(params.id),
            fetchProducts()
        ])
        // const product = await fetchProductById(params.id);
        // const products = await await fetchProducts(); 
        const photo = product.data;
        const photosResponse = products.data.map((item) => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`
        }))
        const photos = photosResponse.splice(0, 3)
        console.log("값보이냐 photo: ", photo);
        console.log("값보이냐 photos: ", photos);

        return { photo, photos };
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
.rcomImg {
    width: 220px;
    height: 170px;
    padding-right: 20px;
}

.rcom_img_inner {
    display: flex;
    display: block;
}

.rcom_img_outter {
    align-content: center;
    padding-left: 530px;
}

.rcom_msg {
    padding-left: 530px;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}

.rcom_photos {
    display: inline-block;
}
</style>