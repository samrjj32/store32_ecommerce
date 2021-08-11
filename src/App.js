
import Routes from "./Routes/route";
import CartProvider from "./Context/cartContext";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
