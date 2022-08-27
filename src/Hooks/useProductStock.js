import { useState } from "react";

export const useProductStock = (stock = 0) => {
  const [stockState, setStock] = useState(stock);

  const handlerUpdateStock = () => {
    if (stockState > 0) {
      setStock(stockState - 1);
    }
  };

  return {
    stockState,
    handlerUpdateStock,
  };
};
