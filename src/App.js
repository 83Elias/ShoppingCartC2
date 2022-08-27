import "./App.css";
import { List } from "./Components/List";
import { Header } from "./Components/Header";
import { useShoppingCart } from "./Hooks/useShoppingCart";
import { useProductStock } from "./Hooks/useProductStock";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const { counter, handlerOnClickBuy, handlerReset } = useShoppingCart();


  return (
    <div className="Apps">
      <Header cart={counter} />
      <List
        handlers={{
          handlerOnClickBuy,
          handlerReset,
          useProductStock
        }}
      />
    </div>
  );
}

export default App;
