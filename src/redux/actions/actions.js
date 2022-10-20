export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementByOdd = () => {
  return {
    type: "INCREMENT_IF_ODD",
    payload: 1,
  };
};
export const incrementByAsync = () => {
  return {
    type: "INCREMENT_AYNC",
    payload: 2,
  };
};
