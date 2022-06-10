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