import FilterableProductTable from "./components/FilterableProductTable";
import PRODUCTS from "./products";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hi Product Table</h1>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
