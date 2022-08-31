import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Alert from "@mui/material/Alert";

export const Item = ({
  product,
  stock,
  handlerOnClickBuy,
  useProductStock,
}) => {
  const { stockState, handlerUpdateStock } = useProductStock(stock);

  const stylesItemCards = {
    borderRadius: 3,
    color: "#09090a",
    backgroundColor: "#fefdff",
    fontWeight: 600,
    fontFamily: "Helvetica",
    textTransform: "capitalize",
    "&.MuiButtonBase-root:hover": {
      bgcolor: "#fefdff",
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 4, color: "#FEFDFF" }}
      className="item"
    >
      <h5>
        {stockState === 0 ? (
          <Alert severity="error">Exhausted</Alert>
        ) : (
          <Alert
            sx={{ width: 165, height: 36 }}
            severity="success"
            color="info"
          >
            available: {stockState}
          </Alert>
        )}
      </h5>
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.detail}</p>
      <div className="background-price">
        <p>$ {product.price}</p>
        <Button
          sx={stylesItemCards}
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          onClick={() => {
            handlerUpdateStock();
            handlerOnClickBuy(stockState);
          }}
          disabled={stockState === 0}
        >
          Add To Cart
        </Button>
      </div>
    </Paper>
  );
};
