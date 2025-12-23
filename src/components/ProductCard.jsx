export default function ProductCard({ product, onBuy }) {
  // Визначаємо фото: може бути масив або один рядок
  const image = Array.isArray(product.picture) ? product.picture[0] : product.picture;
  // Визначаємо ID для ключа (у MyDrop YML це часто @_id або id)
  const productId = product["@_id"] || product.id;

  return (
    <div className="card">
      <img src={image} alt={product.name} loading="lazy" />
      <div className="card-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price} грн</p>
        <button onClick={() => onBuy(product)}>Купити</button>
      </div>
    </div>
  );
}