import { useState } from "react";

export const useShoppingCart = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handlerOnClickBuy = (stockState) => {
    if (stockState > 0) {
      setCounter(counter + 1);
    }
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
