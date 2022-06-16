import {fetchCartItems} from "~/api"
/* 
"상세페이지에서 카트아이템을 담아서 카트페이지로 오기"

자동으로 vuex스토어가 내부적으로 생성 
> vuex를 설정안해도됨 자동으로 설정 
- 속성들만 규칙으로 지키기

넉스트에서 사용하는 방법 ** 
- 각각의 속성들을 export로 꺼내줌 
1. state : 객체를 꺼내줌 (여러컴포넌트간의 공유되어야할 데이터)
    - cartItems : 모두다 저장해서 들고오는 공통의 데이터 
    - vuex 패널에 보이는지 : state
        -> state에다가 items를 추가하고 불러온다. 
2. mutations : state값을 변경하는 속성 , 컴포넌트에서 commit(API)으로 호출 
    - addCartItem을 컴포넌트(detail > _id)에서 호출함 , 상세페이지에서 값을 담아줌 
        - this.$store.commit('addCartItem', this.product)으로 store접근 
        - 패널보기 , payload, state를 사용하는 걸 봄 
*/
//constants 변수로 관리하기 
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

//store
export const state = () => ({
    cartItems : [], 
})

export const mutations = {
    //addToCart 시점 
    addCartItem(state, cartItem){
        //newCartItem은 중복되지 않기위해서 (mock API)
        const newCartItem = {
            ...cartItem, 
            imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`
        }
        state.cartItems.push(newCartItem)
    }, 
    setCartItems(state, cartItems) {
        state.cartItems = cartItems
    }
}

export const actions = {
    async [FETCH_CART_ITEMS]({commit}) {
        const {data} = await fetchCartItems()
        commit('setCartItems', data)
    }
}