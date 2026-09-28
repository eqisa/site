import { useMemo, useState } from "react";
import { products } from "../../data/products";
import type { ProductCategory } from "../../types/product";
import "./CatalogPage.css";

type CategoryFilter = "Todos" | ProductCategory;

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Todos");

  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Obtiene las categorías directamente desde products.ts.
   *
   * Esto significa que cuando agreguemos una nueva categoría
   * a un producto, aparecerá automáticamente en el catálogo.
   */
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category)),
    );

    return ["Todos", ...uniqueCategories] as CategoryFilter[];
  }, []);

  /**
   * Filtra los productos por categoría y búsqueda.
   */
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .toLowerCase()
      .trim();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      const matchesSearch =
        normalizedSearch === "" ||
        product.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        product.description
          .toLowerCase()
          .includes(normalizedSearch) ||
        product.category
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  /**
   * Cuenta cuántos productos pertenecen a cada categoría.
   */
  const getCategoryCount = (
    category: CategoryFilter,
  ): number => {
    if (category === "Todos") {
      return products.length;
    }

    return products.filter(
      (product) => product.category === category,
    ).length;
  };

  return (
    <main className="catalog-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="catalog-header">
        <div className="catalog-header-content">

          <span className="catalog-eyebrow">
            EQI,SA / CATÁLOGO
          </span>

          <h1>
            Soluciones para
            <br />
            <strong>la industria.</strong>
          </h1>

          <p>
            Explora nuestras soluciones químicas y encuentra
            los productos adecuados para las necesidades de
            tu operación.
          </p>

        </div>

        {/* SEARCH */}

        <div className="catalog-search">
          <span
            className="catalog-search-icon"
            aria-hidden="true"
          >
            ⌕
          </span>

          <input
            type="search"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Buscar producto..."
            aria-label="Buscar producto"
          />

          {searchTerm && (
            <button
              type="button"
              className="catalog-search-clear"
              onClick={() => setSearchTerm("")}
              aria-label="Limpiar búsqueda"
            >
              ×
            </button>
          )}
        </div>
      </header>

      {/* =========================
          CATALOG
      ========================= */}

      <section className="catalog-container">

        {/* SIDEBAR */}

        <aside className="catalog-sidebar">

          <div className="catalog-sidebar-heading">
            <span>CATEGORÍAS</span>

            <small>
              {products.length} productos
            </small>
          </div>

          <nav
            className="catalog-category-list"
            aria-label="Categorías de productos"
          >
            {categories.map((category) => {
              const count = getCategoryCount(category);

              const isActive =
                selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  className={`catalog-category-button ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  <span>{category}</span>

                  <small>{count}</small>
                </button>
              );
            })}
          </nav>

        </aside>

        {/* PRODUCTS */}

        <section className="catalog-results">

          <div className="catalog-results-header">

            <div>
              <span className="catalog-results-eyebrow">
                {selectedCategory === "Todos"
                  ? "CATÁLOGO COMPLETO"
                  : selectedCategory.toUpperCase()}
              </span>

              <h2>
                {searchTerm
                  ? "Resultados de búsqueda"
                  : selectedCategory === "Todos"
                    ? "Todos los productos"
                    : selectedCategory}
              </h2>
            </div>

            <span className="catalog-results-count">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "producto"
                : "productos"}
            </span>

          </div>

          {/* GRID */}

          {filteredProducts.length > 0 ? (
            <div className="catalog-product-grid">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          ) : (
            <EmptyResults
              searchTerm={searchTerm}
              onClear={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
            />
          )}

        </section>

      </section>
    </main>
  );
}


/* =================================
   PRODUCT CARD
================================= */

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    featured?: boolean;
  };
}

function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="catalog-product-card">

      <div className="catalog-product-image">

        {product.featured && (
          <span className="catalog-featured-badge">
            Destacado
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

      </div>

      <div className="catalog-product-content">

        <span className="catalog-product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <a
          href={`/productos/${product.id}`}
          className="catalog-product-link"
        >
          Ver producto

          <span aria-hidden="true">
            →
          </span>
        </a>

      </div>

    </article>
  );
}


/* =================================
   EMPTY RESULTS
================================= */

interface EmptyResultsProps {
  searchTerm: string;
  onClear: () => void;
}

function EmptyResults({
  searchTerm,
  onClear,
}: EmptyResultsProps) {
  return (
    <div className="catalog-empty">

      <div className="catalog-empty-icon">
        ×
      </div>

      <h3>
        No encontramos productos
      </h3>

      <p>
        {searchTerm
          ? `No hay productos que coincidan con "${searchTerm}".`
          : "No hay productos disponibles en esta categoría."}
      </p>

      <button
        type="button"
        onClick={onClear}
      >
        Ver todo el catálogo
      </button>

    </div>
  );
}