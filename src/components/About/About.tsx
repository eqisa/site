import { useEffect, useRef, useState } from "react";
import "./About.css";

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Calidad",
    description:
      "Productos desarrollados para responder a las exigencias de la industria.",
  },
  {
    number: "02",
    title: "Tecnología",
    description:
      "Experiencia y tecnología aplicadas al desarrollo de soluciones especializadas.",
  },
  {
    number: "03",
    title: "Medioambiente",
    description:
      "Compromiso con soluciones gentiles con el medioambiente.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className={`about-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="about-container">

        {/* --------------------------------
            COLUMNA IZQUIERDA
        -------------------------------- */}
        <div className="about-heading">
          <span className="about-eyebrow">
            01 / QUIÉNES SOMOS
          </span>

          <h2>
            Experiencia
            <br />
            que se convierte
            <br />
            <strong>en soluciones.</strong>
          </h2>

          <div className="about-line" />

          <div className="about-experience">
            <span className="experience-number">20+</span>

            <div className="experience-copy">
              <strong>AÑOS DE EXPERIENCIA</strong>
              <span>
                en pisos epóxicos y recubrimientos industriales
              </span>
            </div>
          </div>
        </div>

        {/* --------------------------------
            COLUMNA DERECHA
        -------------------------------- */}
        <div className="about-copy">
          <span className="about-copy-label">
            ECOLOGÍA · QUÍMICA · INDUSTRIA
          </span>

          <h3>
            Expertos en soluciones químicas
            para la industria.
          </h3>

          <p>
            Fabricamos productos químicos de alta calidad,
            inertes, inofensivos y gentiles con el medioambiente,
            respaldados por nuestra tecnología y experiencia.
          </p>

          <p>
            En un sector industrial cada vez más competitivo y
            exigente, entendemos que la continuidad, la eficiencia
            y la seguridad son fundamentales para el éxito de cada
            operación.
          </p>

          <p>
            Por eso desarrollamos soluciones que no solo cumplen
            con las necesidades de nuestros clientes, sino que
            buscan superar sus expectativas.
          </p>

          <p>
            Nuestro objetivo es proporcionar soluciones robustas
            que garanticen un rendimiento superior y continuo,
            protegiendo su inversión.
          </p>

          <p>
            Además, somos especialistas en{" "}
            <strong>
              recubrimientos industriales de alto desempeño
            </strong>
            , incluyendo pisos epóxicos, pisos industriales
            poliméricos y soluciones de mantenimiento para la
            construcción y la industria en México.
          </p>

          <a
            href="#epoxy"
            className="about-button"
          >
            CONOCER NUESTROS RECUBRIMIENTOS
            <span>→</span>
          </a>
        </div>
      </div>

      {/* --------------------------------
          BLOQUE DESTACADO
      -------------------------------- */}
      <div className="about-highlight">

        <div className="highlight-number">
          <span>20</span>
          <small>+</small>
        </div>

        <div className="highlight-content">
          <span className="highlight-label">
            EXPERIENCIA QUE GENERA CONFIANZA
          </span>

          <h3>
            Más de dos décadas desarrollando
            soluciones para la industria.
          </h3>

          <p>
            Nuestra experiencia nos permite entender las
            necesidades de cada proyecto y ofrecer soluciones
            pensadas para lograr durabilidad, rendimiento y
            protección de las superficies.
          </p>
        </div>

        <div className="highlight-services">
          <span>PISOS EPÓXICOS</span>
          <span>RECUBRIMIENTOS</span>
          <span>PISOS INDUSTRIALES</span>
          <span>MANTENIMIENTO</span>
        </div>
      </div>

      {/* --------------------------------
          PILARES
      -------------------------------- */}
      <div className="about-pillars">
        {pillars.map((pillar, index) => (
          <article
            className="pillar"
            key={pillar.number}
            style={{
              transitionDelay: `${0.25 + index * 0.15}s`,
            }}
          >
            <span className="pillar-number">
              {pillar.number}
            </span>

            <div className="pillar-content">
              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}