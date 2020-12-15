export const initialState = {
    cart:[],
    user: null,
    product:[]
}


// export const getProduct = (product) => {
//     product.map((x))  
// } 



//selector
export const getCartTotal = (cart) =>
    //optional chaining
    cart?.reduce((amount, item) => item.price + amount, 0); 

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) =>
                cartItem.id === action.id);
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(`cant remove product id: ${action.id}`)
            }

            return {
                ...state,
                cart: newCart
            }
        
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        
        // case "GET__PRODUCT":
            
        //     const id_ = state.product.findIndex((productId) =>
        //         productId.id === action.id
                 
            
        //     );

        //     let product_ = [...state.product.id];
        //     let index_ = state.product.findIndex((product_))
        //     if (index_ => 0) {
        //         product_.values(index_);
        //         console.log("product value", index_ );
        //     }
            
            // return {
            
            //     ...state,
            //     product: [...state.product, action.item],
            // }

        default:
            return state;
    }
};

export default reducer;