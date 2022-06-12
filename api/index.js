//api > index.js 
import axios from 'axios'
//api 모듈화 
const instance = axios.create({
    baseURL : 'http://localhost:3000'
})

//상품 상세페이지 
function fetchProductById(id){
    return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword){
    return instance.get(`/products`, {
        params : {
            name_like : keyword, 
        }
    })
}
//carts
function fetchCartItems(){
    return instance.get('/carts')
}

function createCartItem(cartItem){
    return instance.post('/carts', cartItem)
}

//api 함수를 생성하였으면 export를 잘하자!! 호출할때마다 Object is not fnction뜸 
export {
    fetchProductById, 
    fetchProductsByKeyword, 
    createCartItem,
    fetchCartItems}