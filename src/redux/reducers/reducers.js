export const counterReducer = (state = { cart: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart + 1,
      };
    case "INCREMENT_IF_ODD":
      if (state.cart % 2 !== 0) {
        return {
          ...state,
          cart: state.cart + action.payload,
        };
      } else {
        return state;
      }
    case "DECREMENT":
      if (state.cart !== 0) {
        return {
          ...state,
          cart: state.cart - 1,
        };
      } else {
        return state;
      }
    case "INCREMENT_AYNC":
      return {
        ...state,
        cart: state.cart + action.payload,
      };
    default:
      return state;
  }
};
