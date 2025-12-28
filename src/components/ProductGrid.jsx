import { useState } from "react";

function ProductGrid({ products }) {
    // Початкова кількість товарів (наприклад, 12)
    const [visibleCount, setVisibleCount] = useState(12);

    if (!products || products.length === 0) return <p>Завантаження...</p>;

    // Створюємо масив лише з тією кількістю товарів, яку хочемо показати
    const visibleProducts = products.slice(0, visibleCount);

    const showMore = () => {
        // Додаємо ще 12 товарів при кожному кліку
        setVisibleCount((prevValue) => prevValue + 12);
    };

    return (
        <div className="products-container">
            <div className="produc__grid">
                {visibleProducts.map((product) => (
                    <div key={product.id || product["@_id"]} className="product-card">
                        <img
                            src={
                                (Array.isArray(product.picture) ? product.picture[0] : product.picture)
                                || 'https://via.placeholder.com/300x400?text=Немає+фото'
                            }
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Помилка+фото'; }}
                            alt={product.name}
                        />
                        <h3>{product.name}</h3>
                        <p>{product.price + 300} грн</p>
                    </div>
                ))}
            </div>

            {/* Показуємо кнопку тільки якщо є ще товари для завантаження */}
            {visibleCount < products.length && (
                <div className="load-more-wrap">
                    <button className="load-more-btn" onClick={showMore}>
                        Завантажити ще
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductGrid;