import "./Hero.css";

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-message">
        <span>LA PROTECCIÓN AMBIENTAL ES NUESTRO NEGOCIO.</span>
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            ECOLOGÍA · QUÍMICA · INDUSTRIA
          </span>

          <h1>
            Soluciones para
            <span> una industria</span>
            <br />
            más eficiente.
          </h1>

          <p>
            Productos y soluciones especializadas para limpieza,
            mantenimiento y protección industrial.
          </p>

          <div className="hero-actions">
            <a href="#productos" className="hero-button primary">
              Explorar productos
            </a>

            <a href="#soluciones" className="hero-button secondary">
              Conocer soluciones
            </a>
          </div>
        </div>

        <div className="hero-graphic">
        <div className="hero-glow" />

        <div className="logo-orbit logo-orbit-1" />
        <div className="logo-orbit logo-orbit-2" />

        <div className="hero-logo">
            <img
            src="/images/eqisa_images/logo_eqisa_sb.png"
            alt="Ecología y Química Industrial"
            />
        </div>

        <div className="floating-dot dot-1" />
        <div className="floating-dot dot-2" />
        <div className="floating-dot dot-3" />
        </div>
      </div>
    </section>
  );
}