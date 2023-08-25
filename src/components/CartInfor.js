import React, { Component } from 'react'

export default class CartInfor extends Component {
    render() {
        let { renderCarts } = this.props;
        console.log("CartInfor :", renderCarts);

        let elementCartInfor = <tr>
            <th colSpan={6}>Empty product in your cart</th>
        </tr>;
        //tính tổng giá khi có sản phẩm trong giỏ hàng
        if (renderCarts != null && renderCarts.length > 0) {
            let tongTriGia = 0;
            for (let index = 0; index < renderCarts.length; index++) {
                tongTriGia += parseFloat(renderCarts[index].product.price) * parseFloat(renderCarts[index].quantity);
            }
            //hiển thị 
            elementCartInfor = (
                <tr>
                    <td colSpan={4}>
                        There are <b>{renderCarts.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {tongTriGia} USD
                    </td>
                </tr>
            )
        }
        return (
            <>
                {elementCartInfor}

            </>
        )
    }
}
