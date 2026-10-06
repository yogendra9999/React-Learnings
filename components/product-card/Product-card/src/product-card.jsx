function ProductCard({ name,price,category}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    );
}
export default ProductCard;
