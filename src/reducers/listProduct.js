import { LIST_PRODUCT } from "../constants/actionType";

//initial state
const initialState = [
    {
        productId: "P001",
        productName: "aplusautomation",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 12,
        quantity: 1,
        image: "aplusautomation.jpg"
    },
    {
        productId: "P002",
        productName: "aplus media",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 11,
        quantity: 1,
        image: "aplus-media.jpg"
    },
    {
        productId: "P003",
        productName: "robo fig combo",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 15,
        quantity: 0,
        image: "robo_fig_combo.jpg"
    },
    {
        productId: "P004",
        productName: "target leap frog",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 8,
        quantity: 8,
        image: "target-leap-frog.jpg"
    },
    {
        productId: "P005",
        productName: "target leap frog 5",
        descriptions: "Lorem ipsum dolor sit amet 5, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 4,
        quantity: 0,
        image: "target-leap-frog.jpg"
    }
];

//reducer (2)
const listProduct =(state=initialState, action)=>{
    switch (action.type) {
        case LIST_PRODUCT:
            return state;
        default:
            return state;
    }
}



// export
export default listProduct;


