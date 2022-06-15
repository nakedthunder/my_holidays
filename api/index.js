import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

function fetchProductById(id){
    //상품 해당값을 조회해온 것 
    const data = instance.get(`/products/${id}`)
    console.log('값뽀깅', data)
    return data
}

export {
    fetchProductById
}