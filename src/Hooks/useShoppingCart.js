import { useState } from "react";

export const useShoppingCart = (initialValue = 3) => {
  const [counter, setCounter] = useState(initialValue);

  const handlerOnClickBuy = (value = 1) => {
    setCounter(counter + value);
  };

  const handlerReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    handlerOnClickBuy,
    handlerReset,
  };
};
