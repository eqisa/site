import "./Header.css";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="social-links">
        <a href="#" aria-label="X">
          𝕏
        </a>

        <a href="#" aria-label="Facebook">
          f
        </a>

        <a href="#" aria-label="Instagram">
          ◎
        </a>
      </div>

      <div className="header-main">
        <a href="#inicio" className="brand">
          <span className="brand-name">EQISA</span>

          <span className="brand-description">
            ECOLOGÍA Y QUÍMICA INDUSTRIAL, S.A. DE C.V.
          </span>
        </a>

        <nav className="main-navigation" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="cart-button" aria-label="Abrir carrito">
          <span>🛒</span>
          <strong>0</strong>
        </button>
      </div>
    </header>
  );
}