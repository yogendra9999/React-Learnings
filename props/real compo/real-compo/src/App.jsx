function ProductCard({name,price,image,category,children,onBuy}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <img src={image} alt={name} />
      <p>Category: {category}</p>
      {children}
      <button onClick={() => onBuy(name)}>Buy Now</button>
    </div>
  );
}
function App() {
  function handleBuy(productName) {
    alert(`Added to cart: ${productName}!`);
  }
  return (
    <div>
      <ProductCard
        name="Laptop"
        price="$10"
        image="https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png"
        category="Electronics"
        onBuy={handleBuy}
      >
      </ProductCard>
    </div>
  );
}
export default App;
