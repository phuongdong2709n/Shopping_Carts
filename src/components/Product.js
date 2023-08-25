import React, { Component } from 'react'
import {act_buy_item,act_change_notify} from '../actions';
import { MSG_BUY_SUCCERSS } from '../constants/messages';
import { connect } from 'react-redux';

 class Product extends Component {

    constructor(props){
        super(props);
        this.state={
            quantity:1,

        }
    }
    //hàm xử lý sự kiện handleBuy
    handleBuy= (product)=>{
        //thực hiện mua hàng
        this.props.onBuyItem(product, this.state.quantity);

        //thực hiện thông báo
        this.props.onChangeNotify(MSG_BUY_SUCCERSS);
    }
    render() {
        console.log("Product: ", this.props.renderProduct);
        let product=this.props.renderProduct;
        //tùy vào số lượng nếu số lượng lớn hơn 0 thì mới cho phép hiển thị nút mua hàng
        let elementBuy="";
        if(product.quantity>0){
            elementBuy=(
                <>
                    <input
                        name="quantity-product-1"
                        type="number"
                        defaultValue={1}
                        min={1}
                    />
                    <button data-product={1} className="btn btn-success"
                    onClick={()=>this.handleBuy(product)} 
                    >
                        Mua hàng
                    </button>
                    <a data-product={1} href="#" className="price">
                        {" "}
                        {product.price} USD
                    </a>
                </>
            )
        }else{
            elementBuy=<>
                <span class="price"> 12 USD</span>
            </>
        }
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="#">
                        <img
                            className="media-object"
                            //dấu `` là 
                            src={`images/${product.image}`}
                            alt="charmander"
                        />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"> {product.productName}</h4>
                    <p>
                    {product.descriptions}
                    </p>
                    {elementBuy}
                </div>
            </div>
        )
    }
}

//tạo thuộc tính sự kiện
const mapDispathToProps =(dispatch)=>{
    return {
        // bắn action mua hàng đến reducer
        onBuyItem:(product,quantity)=>{
            dispatch(act_buy_item(product,quantity));
        },
        //bắn action thông báo
        onChangeNotify:(content)=>{
            dispatch(act_change_notify(content));
        }
    }
}

export default connect(null,mapDispathToProps) (Product);