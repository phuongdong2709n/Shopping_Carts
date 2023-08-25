import React, { Component } from 'react'
import Product from './Product'
//sử dụng hàm connect
//Hàm connect của Redux được sử dụng để kết nối component React với Redux store. Nó là một hàm nhận đầu vào một số tham số và trả về một higher-order component (HOC) mới.
import { connect } from 'react-redux'


class ListProduct extends Component {

    render() {
        // lấy dữ liệu đã đc map để hiển thị trong component
        console.log("Dữ liệu : ", this.props.products);
        let elementProduct = this.props.products.map((item, index) => {
            return <Product key={index} renderProduct={item} />
        })
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* PRODUCT : START */}
                        {elementProduct}
                        {/* PRODUCT : END */}

                    </div>
                </div>
            </div>
        )
    }
}

// map state to props
const mapStateToProps = (state) => {
    return {
        products: state.listProduct //lấy listProduct ở trong store
        // state ở trong store
    }
}

//connest mapStateToProps vóiw component
export default connect(mapStateToProps, null)(ListProduct);
// Dòng mã trên nghĩa là tạo ra một phiên bản kết nối của component ListProduct với Redux store.
// connect là một phương thức được cung cấp bởi thư viện React Redux để kết nối component với Redux store.

// mapStateToProps là một hàm được sử dụng để chuyển đổi state từ Redux store thành các props của component.
// Hàm này được gọi mỗi khi state được update và trả về một object props mới cho component.

// Trong đoạn mã trên, mapStateToProps được truyền vào làm đối số đầu tiên của connect,
// nghĩa là một khi state trong Redux store thay đổi, props của component ListProduct cũng sẽ được cập nhật tự động.

// null được truyền vào làm đối số thứ hai cho connect,
// nghĩa là không có action mapDispatchToProps được sử dụng trong component này.
// Nếu các action cần được dispatch trong component, chúng ta có thể truyền một hàm mapDispatchToProps vào.