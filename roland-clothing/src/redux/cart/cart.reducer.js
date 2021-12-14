const INITIAL_STATE = {
  cartIsVisible: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MAKE_CART_VISIBLE":
      return {
        ...state,
        cartIsVisible: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
