import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:3000'
})

function fetchProducts(){
    const data = instance.get(`/products`)
    return data
}

function fetchProductById(id) {
    const data = instance.get(`/products/${id}`)
    console.log("사진 조회: ", data)
    return data 
}

//this.searchKeyword 값 보내야함 
function fetchProductsByKeyword(keyword){
    console.log('값들어와?', keyword)
    const value = instance.get(`/products`, {
        params : {
            name_like : keyword, 
        }
    })
    //return 을 해줘야합니다. 그렇지 않으면 data가 undefined 
    return value
}

//carts API의 json 서버 목록을 조회해온다. 
function fetchCartItems(){
    return instance.get('/carts')
}

//add to cart시점에서 post방식으로 서버에 보내주기 
function createCartItem(cartItem) {
    //axios.post(url, payload)
    return instance.post('/carts', cartItem)
}


export {
    fetchProductById,
    fetchProductsByKeyword,
    createCartItem, 
    fetchCartItems,
    fetchProducts
}
