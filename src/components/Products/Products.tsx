import { Link } from "react-router-dom";
import { products } from "../../data/products";
import "./Products.css";

export function Products() {
  const featuredProducts = products.filter(
    (product) => product.featured,
  );

  return (
    <section id="productos" className="products-section">
      <div className="products-header">
        <div>
          <span>01 · PRODUCTOS</span>

          <h2>
            Soluciones
            <strong> especializadas.</strong>
          </h2>
        </div>

        <Link
        to="/catalogo"
        className="solutions-catalog-link"
        >
        Catálogo completo
        <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
         <article className="product-card" key={product.id}>

            <div className="product-image">
                <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                />
            </div>

            <div className="product-content">

                <span className="product-category">
                {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <button type="button" className="product-button">
                <Link
                to={`/productos/${product.id}`}
                className="product-button"
                >
                Ver producto
                <span aria-hidden="true">→</span>
                </Link>
                </button>

            </div>

            </article>
        ))}
      </div>
    </section>
  );
}