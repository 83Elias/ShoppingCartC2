import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)


export const Header = ({cart}) => {
 
  return (
    <header>
      <h1>Shopping Cart</h1>
      <p>Quantity of product: <span> {cart}  </span> </p>
    </header>
  )
}
