import React, { Component } from 'react'
import CartInfor from './CartInfor'
import Notify from './Notify'
import CartItem from './CartItem'
import { connect } from 'react-redux'
 class Cart extends Component {
    render() {
        //lấy dữ liệu trong props -> hiển thị lên view
        let {carts} =this.props;
        console.log(" Carts : ", carts);

        let elementCartItem =carts.map((item,index)=>{
            return <CartItem key={index}  renderCart={item} stt={index+1} />
        })
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>Pokemon</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            <tbody id="my-cart-body">
                                {/* CART BODY */}
                               {/* <CartItem/> */}
                               {elementCartItem}
                            </tbody>
                            <tfoot id="my-cart-footer">
                                {/* CART FOOTER */}
                                <CartInfor renderCarts={carts}/>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Notify/>
            </div>
        )
    }
}

//map state từ store đến component Cart thông qua props
const mapStateToProps=(state)=>{
    return {
        carts:state.cart,
    }
}


export default connect(mapStateToProps,null) (Cart);
