import React from "react";
import { Profile } from "../Profile/Profile";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export const Header = ({ cart }) => {
  return (
    <header>
      <Profile />
      <h1>Catalog</h1>

      <div className="cart">
        <Badge badgeContent={cart} color="primary">
          <ShoppingCartIcon sx={{ width: 28, height: 28}} />
        </Badge>
      </div>
    </header>
  );
};
