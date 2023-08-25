// kết hợp cấc state trong 1 store

import {combineReducers} from 'redux'
import listProduct from './listProduct'
import notify from './notify'
import cart from './cart'

const reducer =combineReducers({
    // (1) listProduct là state để ở trong store
    listProduct:listProduct, // (2) listProduct là reducers tạo ra 
    notify:notify,
    cart:cart,
})

export default reducer;