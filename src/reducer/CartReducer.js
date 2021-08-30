export const CartReducer=(state,action)=>{
    console.log(state)
    let product
    let UpdatedPrice
    let UpdatedQty
    let index
    const {shoppingCart , totalPrice , qty}=state
    switch(action.type){
        case "ADD TO CART":
        const check=shoppingCart.find(product => product.id == action.payload.id)
        if(check){
            return state
        }
        else{
            product=action.payload.product; 
            product['qty']= 1 ;   
            UpdatedQty=qty + 1;
            UpdatedPrice=totalPrice + product.price
            return {shoppingCart:[product , ...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty}
        }
        break

        case 'INCREMENT':
            product=action.cart
            product.qty=product.qty +1
            UpdatedPrice=totalPrice + product.price
            UpdatedQty=qty + 1
            index=shoppingCart.findIndex(cart => cart.id === action.id)
            shoppingCart[index]=product
            return{ shoppingCart:[...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty}

        break

        case 'DECREMENT':
            product=action.cart
            if(product.qty > 1){
                product.qty=product.qty - 1;
                UpdatedPrice=totalPrice - product.price
                UpdatedQty=qty - 1;
                index=shoppingCart.findIndex(cart => cart.id === action.id)
                shoppingCart[index]=product
                return{shoppingCart:[...shoppingCart],totalPrice:UpdatedPrice,qty:UpdatedQty}
            }
            else{
                return state
            }
            break;

            case 'DELETE':
                const filltered=shoppingCart.filter(product => product.id !== action.id)
                product=action.cart
                UpdatedQty=qty - product.qty
                UpdatedPrice= totalPrice - product.price * product.qty;
                return {shoppingCart: [...filltered],totalPrice:UpdatedPrice,qty:UpdatedQty}
            break;
            case 'ORDERDONE':
                return {shoppingCart:[],totalPrice:0,qty:0}
            default:

            return state
           
    }

}