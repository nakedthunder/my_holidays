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

function createCartItem(cartItem){
    return instance.post('/carts', cartItem)
}

export {fetchProductById, fetchProductsByKeyword, createCartItem}