import React, { Component } from 'react'
import {MSG_UPDATE_SUCCERSS,MSG_REMOVE_SUCCERSS} from '../constants/messages';
import {act_update_item, act_change_notify,act_remove_item} from '../actions/index';
import { connect } from 'react-redux';
 class CartItem extends Component {

    constructor(props){
        super(props);
        this.state={
            quantity:0,

        }
    }

    //hàm xử lý sự kiện update
    handleUpdate =(product)=>{
        //props onUpdateItem -> bắn vào reducer
        this.props.onUpdateItem(product, this.state.quantity);
        //props notify
        this.props.onChangeNotify(MSG_UPDATE_SUCCERSS);
    }

    //hàm xử lý sự kiện khi xóa 
    handleDelete= (product)=>{
        this.props.onDeleteItem(product);
        this.props.onChangeNotify(MSG_REMOVE_SUCCERSS);
    }
    render() {
        //lấy dữ liệu 
        let {renderCart, stt}=this.props;
        console.log("CartItem: " , renderCart);

        //xử lý hiẻn thị số lượng trong giỏ hàng
        let quantity =(this.state.quantity===0 ) ? renderCart.quantity :this.state.quantity;
        return (
            <tr>
                <th scope="row">{stt}</th>
                <td>{renderCart.product.productName}</td>
                <td>{renderCart.product.price} USD</td>
                <td>
                    <input
                        name="cart-item-quantity-1"
                        type="number"
                       value={quantity}
                        min={1}
                        onChange={(ev)=>this.setState({quantity:ev.target.value})}
                    />
                </td>
                <td>
                    <strong>{renderCart.product.price*quantity} USD</strong>
                </td>
                <td>
                    <a
                        className="label label-info update-cart-item"
                        href="#"
                        data-product=""
                        onClick={()=>this.handleUpdate(renderCart.product)}
                    >
                        Update
                    </a>
                    <a
                        className="label label-danger delete-cart-item"
                        href="/#"
                        data-product=""
                        onClick={()=>this.handleDelete(renderCart.product)}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        )
    }
}
// mapStateToProps
//để cập nhập lại state
const mapStateToProps=(state)=>{
    return {
        carts:state.cart,
    }
}
// mapDispatchToProps 
const mapDispatchToProps=(dispatch)=>{
    return {
        onUpdateItem:(product, quantity)=>{
            dispatch(act_update_item(product,quantity));
        },
        onChangeNotify:(content)=>{
            dispatch(act_change_notify(content));
        },
        onDeleteItem:(product)=>{
            dispatch(act_remove_item(product))
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps) (CartItem);