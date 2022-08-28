import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Alert from "@mui/material/Alert";
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
//FEFDFF
export const Item = ({
  product,
  stock,
  handlerOnClickBuy,
  useProductStock,
}) => {
  const { stockState, handlerUpdateStock } = useProductStock(stock);

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 4, color: "#FEFDFF" }}
      className="item"
    >
      {" "}
      <h5>
        {stockState === 0 ? (
          <Alert severity="error">Exhausted</Alert>
        ) : (
          <Alert  sx={{ width:165, height:36}} severity="success" color="info">available quantity: {stockState}</Alert>
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
          sx={{
            borderRadius: 3,
            color: "#09090a",
            backgroundColor: "#fefdff",
            fontWeight: 600,
            fontFamily: "Helvetica",
            textTransform: "capitalize",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#fefdff",
            },
          }}
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          onClick={() => {
            handlerUpdateStock();
            handlerOnClickBuy(stockState);
          }}
        >
          Add To Cart
        </Button>
      </div>
    </Paper>
  );
};
