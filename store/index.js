import {fetchCartItems} from "~/api"
//constants
const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
    cartItems: [],
})

//state가 제공된다. state.cartItems으로 접근
//cartItem 인자 
//push 배열에 하나씩 추가 
export const mutations = {
    addCartItem(state, cartItem){
        const newCartItem = {
        ...cartItem,
        imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
      }
        state.cartItems.push(newCartItem)
    }
}

export const actions = {
    async[FETCH_CART_ITEMS]({commit}){
        const response = await fetchCartItems()
        console.log('액션스 값', response)
    }
}