import ProductCard  from "./product-card";
function App() {
    return (
        <div>
            <h1>Product List</h1>
            <ProductCard name="Watch" price="$10" category="Electronics" />
            <ProductCard name="Shoes" price="$20" category="Fashion" />
            <ProductCard name="Bag" price="$30" category="Accessories" />
            <ProductCard name="Headphones" price="$40" category="Electronics" />
            <ProductCard name="Sunglasses" price="$50" category="Fashion" />
        </div>
    )
}
export default App;