 <template>
     <div>
        <div class="container">
            <div class="main-panel">
                <img
                class="product-image"
                :src="product.imageUrl"
                :alt="product.name"
                />
            <div class="side-panel">
                <p class="name">{{product.name}}</p>
                <p class="price">{{product.price}}</p>
                <button type="button" @click="addToCart">Add to Cart</button> 
            </div>
        </div>
    </div>
    </div>
  
</template>

<script>
import axios from 'axios'
import {fetchProductById} from '@/api/index'

export default {
    async asyncData({ params }){
        //this.$route가 아니라 params로 데이터를 처리 "context"라고한다. 
        const response = await fetchProductById(params.id)
        //여기서data를 치지 않아서 imageUrl부터 읽히지 않았음 
        //porduct에서 넣어준 reposne.data의 값인데 asyncData잘 못 넣으니 return 으로 값을 받지 못함 
        const product = response.data
        return {product} 
    },
    methods : {
      addToCart (){
        //this.$store.commit 인스턴스 내부적으로 연결해어 접근가능
        this.$store.commit('addCartItem', this.product) //내부적으로 연결이 되어 접근가능
        this.$router.push(`/cart`)
      }
    }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
  