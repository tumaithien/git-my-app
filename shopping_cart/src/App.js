import Cart from "./components/Cart";
import ProductsContainer from "./container/ProductContainer";
import Title from "./components/Title";


function App() {
  return (
    <>
      <div className="container">
        <Title />
        <div className="row">
          <ProductsContainer />
          <Cart />
        </div>
      </div>

    </>
  );
}

export default App;
