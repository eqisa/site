import { Link } from "react-router-dom";
import "./Epoxy.css";

const epoxyBenefits = [
  {
    number: "01",
    title: "Alta resistencia",
    description:
      "Sistemas diseñados para soportar las exigencias de ambientes industriales y comerciales.",
  },
  {
    number: "02",
    title: "Acabado profesional",
    description:
      "Superficies uniformes, durables y fáciles de mantener.",
  },
  {
    number: "03",
    title: "Aplicación especializada",
    description:
      "Te acompañamos desde la selección del sistema hasta su aplicación.",
  },
];

export function Epoxy() {
  return (
    <section className="epoxy-section" id="pisos-epoxicos">
      <div className="epoxy-container">

        <div className="epoxy-content">
          <span className="epoxy-eyebrow">
            PISOS Y RECUBRIMIENTOS INDUSTRIALES
          </span>

          <h2>
            Pisos epóxicos
            <span>que trabajan contigo.</span>
          </h2>

          <p className="epoxy-intro">
            Protege, transforma y prolonga la vida útil de tus espacios
            con soluciones de pisos epóxicos diseñadas para las exigencias
            de la industria.
          </p>

          <p className="epoxy-description">
            En EQISA combinamos productos de alto desempeño con experiencia
            especializada en la aplicación de sistemas para pisos
            industriales, comerciales y de alto tránsito.
          </p>

          <div className="epoxy-actions">
            <a
              href="#contacto"
              className="epoxy-button epoxy-button-primary"
            >
              Solicitar cotización
              <span>→</span>
            </a>

            <Link to="/pisos-epoxicos"
             className="epoxy-button"
          >
            Conoce nuestras soluciones
            <span>→</span>
            </Link>
          </div>

          <div className="epoxy-experience">
            <strong>+20</strong>

            <div>
              <span>Años de experiencia</span>
              <small>
                en soluciones y aplicaciones industriales
              </small>
            </div>
          </div>
        </div>

        <div className="epoxy-visual">
          <div className="epoxy-glow" />

          <div className="epoxy-image-wrapper">
            <img
              src="/images/eqisa_images/pisos.jpg"
              alt="Aplicación de pisos epóxicos industriales"
              className="epoxy-image"
            />

            <div className="epoxy-image-overlay" />

            <div className="epoxy-floating-card">
              <span className="epoxy-floating-icon">◆</span>

              <div>
                <strong>Soluciones industriales</strong>
                <span>Diseñadas para durar</span>
              </div>
            </div>
          </div>

          <div className="epoxy-orbit epoxy-orbit-one" />
          <div className="epoxy-orbit epoxy-orbit-two" />
        </div>
      </div>

      <div className="epoxy-benefits">
        {epoxyBenefits.map((benefit) => (
          <article
            className="epoxy-benefit"
            key={benefit.number}
          >
            <span className="epoxy-benefit-number">
              {benefit.number}
            </span>

            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}