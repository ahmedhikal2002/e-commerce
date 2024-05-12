
export const intialstate = {
  user: null,
  products: [],
};
export const totalPrice = (state) => {
  console.log(state);
  return state.reduce((acc, product) => {
    const total=acc+product.price
    return parseFloat(total)
  }, 0);
};
export const FormatCurrency=(num)=>{
  const currancy=new Intl.NumberFormat(undefined,{currency:"USD",style:"currency"})
  return currancy.format(num)
}
export const AppReducer = (state, action) => {
  
  switch (action.type) {
    default: {
      return state;
    }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      const finditem = state.products.find((i) => i.id === action.payload.id);
      
      if (finditem) {
      
        return {
          ...state,
        };
      } else {
        
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      const newProducts = state.products.filter(
        (product) => product.id !== action.id
      );
      return {
        ...state,
        products: newProducts,
      };
    case "CLEAR_CART":
      return{
        ...state,
        products:[]
      }  
  }
};
