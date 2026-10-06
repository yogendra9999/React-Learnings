function ProductCard({name, price, instock}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>{instock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}
 function App() {
  return (
    <div>
      <ProductCard name="Product 1" price="$10" instock={true} />
      <ProductCard name="Product 2" price="$20" instock={false} />
    </div>
  );
}

export default App;