import "./EpoxyPage.css";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  properties: string[];
  application: string;
}

const systems = [
  {
    id: "dura-piso",
    title: "DURA-PISO",
    subtitle: "Recubrimientos epóxicos de alto desempeño",
    description:
      "Sistemas diseñados para obtener superficies resistentes, continuas y de acabado profesional.",
    products: [
      {
        id: "dura-d",
        name: 'DURA-PISO "D"',
        category: "Epóxico rígido",
        description:
          "Sistema rígido, de acabado espejo y autonivelable.",
        properties: [
          "Rígido",
          "Acabado espejo",
          "Autonivelable",
          "Alto desempeño",
        ],
        application:
          "Áreas industriales que requieren una superficie continua y resistente.",
      },
      {
        id: "dura-f",
        name: 'DURA-PISO "F"',
        category: "Epóxico flexible",
        description:
          "Sistema flexible, de acabado espejo y autonivelable.",
        properties: [
          "Flexible",
          "Acabado espejo",
          "Autonivelable",
          "Alta durabilidad",
        ],
        application:
          "Superficies industriales donde se requiere mayor flexibilidad.",
      },
    ],
  },
  {
    id: "mortero",
    title: "MORTERO",
    subtitle: "Sistemas epóxicos y de poliuretano",
    description:
      "Soluciones para superficies industriales que requieren resistencia y desempeño.",
    products: [
      {
        id: "mortero-e",
        name: 'MORTERO "E"',
        category: "Epóxico económico",
        description:
          "Sistema de mortero epóxico para aplicaciones industriales.",
        properties: [
          "Epóxico",
          "Económico",
          "Resistente",
          "Uso industrial",
        ],
        application:
          "Áreas industriales que requieren una solución funcional y durable.",
      },
      {
        id: "mortero-p",
        name: 'MORTERO "P"',
        category: "Poliuretano económico",
        description:
          "Sistema de mortero basado en poliuretano.",
        properties: [
          "Poliuretano",
          "Económico",
          "Resistente",
          "Uso industrial",
        ],
        application:
          "Aplicaciones industriales que requieren un sistema de poliuretano.",
      },
    ],
  },
  {
    id: "seal",
    title: "SUPER-SEAL & AQUA-SEAL",
    subtitle: "Selladores para protección y acabado",
    description:
      "Sistemas de sellado para mejorar la protección y el acabado de las superficies.",
    products: [
      {
        id: "super-seal",
        name: 'SUPER-SEAL "E" & "P"',
        category: "Sellador epóxico / poliuretano",
        description:
          "Selladores diseñados para proteger y mejorar el acabado de superficies.",
        properties: [
          "Sellador",
          "Epóxico",
          "Poliuretano",
          "Protección superficial",
        ],
        application:
          "Protección y acabado de superficies industriales.",
      },
      {
        id: "aqua-seal",
        name: "AQUA-SEAL",
        category: "Sellador acuoso",
        description:
          "Sellador acuoso para aplicaciones donde se requiere una solución no tóxica.",
        properties: [
          "Base acuosa",
          "No tóxico",
          "Sellador",
          "Fácil aplicación",
        ],
        application:
          "Superficies donde se busca un sellador acuoso.",
      },
    ],
  },
  {
    id: "repair",
    title: "RESANADORES Y COMPLEMENTOS",
    subtitle: "Preparación, reparación y adherencia",
    description:
      "Productos complementarios para preparar y acondicionar las superficies antes del sistema de recubrimiento.",
    products: [
      {
        id: "resana-piso",
        name: 'RESANA-PISO "D" & "F"',
        category: "Epóxico rígido / flexible",
        description:
          "Resanador para la preparación y reparación de superficies.",
        properties: [
          "Epóxico",
          "Rígido",
          "Flexible",
          "Reparación",
        ],
        application:
          "Preparación y reparación de superficies antes del recubrimiento.",
      },
      {
        id: "resana-primer",
        name: "RESANA-PRIMER",
        category: "Promotor de adherencia",
        description:
          "Sistema diseñado para favorecer la adherencia del recubrimiento.",
        properties: [
          "Primer",
          "Adherencia",
          "Preparación",
          "Complementario",
        ],
        application:
          "Preparación de superficies antes de aplicar el sistema seleccionado.",
      },
    ],
  },
];

const benefits = [
  {
    icon: "◈",
    title: "Alta durabilidad",
    description:
      "Sistemas diseñados para ofrecer un desempeño prolongado.",
  },
  {
    icon: "◇",
    title: "Resistencia química",
    description:
      "Soluciones pensadas para ambientes industriales exigentes.",
  },
  {
    icon: "✦",
    title: "Estética superior",
    description:
      "Acabados uniformes y profesionales para diferentes espacios.",
  },
  {
    icon: "⌁",
    title: "Fácil mantenimiento",
    description:
      "Superficies continuas que facilitan las labores de limpieza.",
  },
  {
    icon: "●",
    title: "Variedad de colores",
    description:
      "Posibilidad de adaptar el acabado a las necesidades del proyecto.",
  },
];

const applications = [
  "Plantas de producción",
  "Almacenes",
  "Laboratorios",
  "Áreas comerciales",
  "Estacionamientos",
];

export function EpoxyPage() {
  return (
    <main className="epoxy-page">
      {/* HERO */}
      <section className="epoxy-hero">
        <div className="epoxy-hero-overlay" />

        <div className="epoxy-hero-content">
          <span className="epoxy-eyebrow">
            ECOLOGÍA · QUÍMICA · INDUSTRIA
          </span>

          <h1>
            Soluciones avanzadas
            <br />
            para <strong>pisos industriales.</strong>
          </h1>

          <p>
            Sistemas de recubrimiento de alto desempeño para proteger,
            transformar y prolongar la vida útil de tus superficies.
          </p>

          <a href="#sistemas" className="epoxy-primary-button">
            Explorar soluciones
            <span>→</span>
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="epoxy-intro">
        <div>
          <span className="epoxy-section-label">
            SOLUCIONES PARA LA INDUSTRIA
          </span>

          <h2>
            El sistema adecuado
            <br />
            para cada superficie.
          </h2>
        </div>

        <p>
          Contamos con diferentes sistemas de recubrimiento, sellado,
          reparación y preparación para responder a las necesidades de
          distintos espacios industriales.
        </p>
      </section>

      {/* SYSTEMS */}
      <section id="sistemas" className="epoxy-systems">
        <div className="epoxy-section-heading">
          <span className="epoxy-section-label">
            NUESTROS SISTEMAS
          </span>

          <h2>Conoce nuestras soluciones</h2>

          <p>
            Pasa el cursor sobre cada producto para conocer sus
            características principales.
          </p>
        </div>

        <div className="epoxy-system-grid">
          {systems.map((system) => (
            <article className="epoxy-system-card" key={system.id}>
              <div className="epoxy-system-header">
                <span className="epoxy-system-number">
                  {system.id === "dura-piso" && "01"}
                  {system.id === "mortero" && "02"}
                  {system.id === "seal" && "03"}
                  {system.id === "repair" && "04"}
                </span>

                <div>
                  <h3>{system.title}</h3>
                  <span>{system.subtitle}</span>
                </div>
              </div>

              <p className="epoxy-system-description">
                {system.description}
              </p>

              <div className="epoxy-products">
                {system.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="epoxy-benefits">
        <div className="epoxy-section-heading">
          <span className="epoxy-section-label">
            ¿POR QUÉ UN RECUBRIMIENTO INDUSTRIAL?
          </span>

          <h2>Diseñado para trabajar contigo.</h2>
        </div>

        <div className="epoxy-benefits-grid">
          {benefits.map((benefit) => (
            <article className="epoxy-benefit" key={benefit.title}>
              <span className="epoxy-benefit-icon">
                {benefit.icon}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="epoxy-applications">
        <div className="epoxy-applications-content">
          <span className="epoxy-section-label">
            APLICACIONES INDUSTRIALES
          </span>

          <h2>
            Soluciones para
            <br />
            diferentes espacios.
          </h2>

          <p>
            Seleccionamos el sistema de acuerdo con las condiciones
            y necesidades de cada proyecto.
          </p>
        </div>

        <div className="epoxy-application-list">
          {applications.map((application, index) => (
            <div key={application} className="epoxy-application-item">
              <span>0{index + 1}</span>
              <strong>{application}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="epoxy-experience">
        <div>
          <span className="epoxy-section-label">
            EXPERIENCIA QUE GENERA CONFIANZA
          </span>

          <h2>
            Más de <strong>20 años</strong>
            <br />
            acompañando a la industria.
          </h2>
        </div>

        <div className="epoxy-experience-copy">
          <p>
            Nuestra experiencia nos permite entender las necesidades
            de cada proyecto y orientar la selección del sistema de
            recubrimiento adecuado.
          </p>

          <a href="#contacto" className="epoxy-outline-button">
            Solicitar asesoría →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="epoxy-cta">
        <div>
          <span className="epoxy-section-label">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2>
            ¿Necesitas una solución
            <br />
            para tu piso industrial?
          </h2>

          <p>
            Cuéntanos sobre tu proyecto y nuestro equipo podrá
            orientarte sobre las alternativas disponibles.
          </p>
        </div>

        <a href="/#contacto" className="epoxy-primary-button">
          Solicitar propuesta
          <span>→</span>
        </a>
      </section>
    </main>
  );
}

function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <article className="epoxy-product-card">
      <div className="epoxy-product-top">
        <span className="epoxy-product-dot" />

        <div>
          <span className="epoxy-product-category">
            {product.category}
          </span>

          <h4>{product.name}</h4>
        </div>

        <span className="epoxy-product-arrow">↗</span>
      </div>

      <p>{product.description}</p>

      <div className="epoxy-product-details">
        <div>
          <span>PROPIEDADES</span>

          <ul>
            {product.properties.map((property) => (
              <li key={property}>{property}</li>
            ))}
          </ul>
        </div>

        <div className="epoxy-product-application">
          <span>APLICACIÓN</span>
          <p>{product.application}</p>
        </div>
      </div>
    </article>
  );
}