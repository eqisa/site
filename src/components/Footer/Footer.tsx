import "./Footer.css";

export function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-main">
        <div>
          <strong>EQISA</strong>

          <p>
            Ecología y Química Industrial,
            <br />
            S.A. de C.V.
          </p>
        </div>

        <div className="footer-contact">
          <span>¿Necesitas información?</span>

          <a href="mailto:ventas@eqisa.mx">
            ventas@eqisa.mx
          </a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            f
          </a>

          <a href="#" aria-label="Instagram">
            ◎
          </a>

          <a href="#" aria-label="X">
            𝕏
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 EQISA</span>

        <span>Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}