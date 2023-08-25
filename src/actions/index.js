// cách để import tất cả các thành phần từ tệp constants/actionType và đặt chúng vào một đối tượng types.
import * as types from '../constants/actionType' //types là mình đặt khác với type

//action cho chức năng hiển thị danh sách sản phẩm
 export const act_list_product =()=>{
    return {
        type: types.LIST_PRODUCT,
    }
 }

// action cho chức năng mua hàng (khi người dùng click vào nút  mua hàng)
export const act_buy_item =(product,quantity)=>{
    return {
        type :types.BUY_ITEM,
        product,
        quantity
    }
}

// action cho chức năng cập nhập trên giỏ hàng
export const act_update_item=(product,quantity)=>{
    return {
        type: types.UPDATE_ITEM,
        product,
        quantity
    }
}

//action cho chức nagw xóa 1 sản phẩm trong giỏ hàng
export const act_remove_item=(product)=>{
    return {
        type: types.REMOVE_ITEM,
        product,
       
    }
}

// action cho chức nangư thông báo
export const act_change_notify=(content)=>{
    return {
        type: types.CHANGE_NOTIFY,
        content,
       
    }
}

