import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants/actionType";
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";

//CHƯA MUA HÀNG
let inititalState = [];
//ĐÃ MUA HÀNG (tồn tại trong localStorage) -> lấy từ localStorage
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
//khởi tạo state quản lý giỏ hàng
inititalState = (shoppingCartLocal != null && shoppingCartLocal.length >= 0) ? shoppingCartLocal : [];


// HÀM KIỂM TRA SẢN PHẨM ĐÃ CÓ TRONG GIỎ  HÀNG HAY CHƯA
const getIndexByProductInCart = (listProductInCart, product) => {
    for (let index = 0; index < listProductInCart.length; index++) {
        if (listProductInCart[index].product.productId === product.productId) {
            return index; //sản phẩm đã có trong giỏ hàng
        }
    }
    return -1;
}

//tạo reducers 
const cart = (state = inititalState, action) => {
    //lấy sản phẩm và số lượng mua từ action 
    let { product, quantity, type } = action;
    let item = { product, quantity };

    switch (type) {
        case BUY_ITEM:
            //chức năng mua hàng
            if (state === 0) {
                //khách hàng chưa mua hàng, chưa có sản phẩm trong giỏ hàng ([]);
                // -> thêm sản phẩm vào giỏ hàng
                state.push(item);
            } else {
                //khách hàng dã mua hàng -> giỏ ahngf đã tồn tại
                // TH1: sản phẩm đã có trong giỏ hàng -> thì tăng số lượng mua
                let index = getIndexByProductInCart(state, product);
                if (index >= 0) {
                    // nếu sản phẩm đã tồn tại trong giỏ hàng => cập nhập số lượng
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
                } else { //TH2: sản phẩm mua chưa có trong giỏ ahngf -> thêm sản phẩm vào giỏ hàng
                    state.push(item);
                }
            }
            // cập nhập lại localStorage giỏ hàng
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state]; //trả về 1 state mới

        //Cập nhập giỏ hàng
        case UPDATE_ITEM:
            //tìm kiếm sản phẩm trong giỏ hàng để cập nhập số lượng
            let index = getIndexByProductInCart(state, product);
            if (index >= 0) {
                state[index].quantity = parseInt(item.quantity);
            }
            //cập nhập localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state]; //trả về 1 state mới

        case REMOVE_ITEM:
            //tìm kiếm sản phẩm trong giỏ hàng để xóa
            let indexRemove = getIndexByProductInCart(state, product);
            if (indexRemove >= 0) {
                state.splice(indexRemove, 1); // xóa 1 phần tử
            }

            //cập nhập localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state]; //trả về 1 state mới
        default:
            return state;
    }
}
export default cart;

