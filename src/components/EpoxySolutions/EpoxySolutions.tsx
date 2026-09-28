import { useState } from "react";
import "./EpoxySolutions.css";

type SolutionId =
  | "dura"
  | "mortero"
  | "seal"
  | "resanadores"
  | "beneficios";

interface Solution {
  id: SolutionId;
  title: string;
  shortTitle: string;
  description: string;
  products?: string[];
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

const solutions: Solution[] = [
  {
    id: "dura",
    title: "SERIE DURA-PISO",
    shortTitle: "DURA-PISO",
    description:
      "Sistemas de recubrimiento para pisos industriales de alto desempeño.",
    products: [
      'DURA-PISO "D" — Rígido, espejo, autonivelable',
      'DURA-PISO "E" — Flexible, espejo, autonivelable',
    ],
    position: {
      top: "55%",
      left: "5%",
      width: "43%",
      height: "13%",
    },
  },

  {
    id: "mortero",
    title: "SERIE MORTERO",
    shortTitle: "MORTERO",
    description:
      "Soluciones para recubrimientos industriales con diferentes necesidades de desempeño.",
    products: [
      'MORTERO "E" — Epóxico económico',
      'MORTERO "P" — Poliuretano económico',
    ],
    position: {
      top: "70%",
      left: "5%",
      width: "43%",
      height: "13%",
    },
  },

  {
    id: "seal",
    title: "SERIE SUPER-SEAL & AQUA-SEAL",
    shortTitle: "SUPER-SEAL / AQUA-SEAL",
    description:
      "Selladores para diferentes aplicaciones y necesidades de protección.",
    products: [
      'SUPER-SEAL "E" & "P" — Sellador epóxico/poliuretano',
      "AQUA-SEAL — Sellador acuoso, no tóxico",
    ],
    position: {
      top: "85%",
      left: "5%",
      width: "43%",
      height: "13%",
    },
  },

  {
    id: "resanadores",
    title: "RESANADORES Y COMPLEMENTOS",
    shortTitle: "RESANADORES",
    description:
      "Productos complementarios para preparar y acondicionar las superficies.",
    products: [
      'RESANA-PISO "D" & "E" — Epóxico rígido/flexible',
      "RESANA-PRIMER — Sinergia de adherencia",
    ],
    position: {
      top: "63%",
      left: "52%",
      width: "43%",
      height: "14%",
    },
  },

  {
    id: "beneficios",
    title: "BENEFICIOS CLAVE",
    shortTitle: "BENEFICIOS",
    description:
      "Características principales de las soluciones para pisos industriales.",
    products: [
      "Alta durabilidad",
      "Resistencia química",
      "Estética superior",
      "Fácil mantenimiento",
      "Variedad de colores",
    ],
    position: {
      top: "78%",
      left: "52%",
      width: "43%",
      height: "17%",
    },
  },
];

export function EpoxySolutions() {
  const [activeSolution, setActiveSolution] =
    useState<SolutionId | null>(null);

  const selectedSolution = solutions.find(
    (solution) => solution.id === activeSolution,
  );

  return (
    <section
      className="epoxy-solutions"
      id="soluciones-epoxicas"
    >
      <div className="epoxy-solutions-header">
        <span>02 / SOLUCIONES EPÓXICAS</span>

        <h2>
          Soluciones avanzadas
          <br />
          para pisos industriales.
        </h2>

        <p>
          Explora nuestras soluciones y conoce las
          características de cada sistema.
        </p>
      </div>

      <div className="epoxy-interactive">

        <div className="epoxy-image-wrapper">

          <img
            src="images/eqisa_images/soluciones_pisos.jpeg"
            alt="Soluciones de recubrimiento para pisos industriales"
            className="epoxy-image"
          />

          {solutions.map((solution) => (
            <button
              key={solution.id}
              type="button"
              className={`epoxy-hotspot ${
                activeSolution === solution.id
                  ? "is-active"
                  : ""
              }`}
              style={{
                top: solution.position.top,
                left: solution.position.left,
                width: solution.position.width,
                height: solution.position.height,
              }}
              onMouseEnter={() =>
                setActiveSolution(solution.id)
              }
              onFocus={() =>
                setActiveSolution(solution.id)
              }
              onClick={() =>
                setActiveSolution(
                  activeSolution === solution.id
                    ? null
                    : solution.id,
                )
              }
              aria-label={`Ver información sobre ${solution.title}`}
            >
              <span className="hotspot-label">
                {solution.shortTitle}
              </span>
            </button>
          ))}

          {selectedSolution && (
            <div className="epoxy-info-card">
              <button
                type="button"
                className="epoxy-info-close"
                onClick={() => setActiveSolution(null)}
                aria-label="Cerrar información"
              >
                ×
              </button>

              <span className="epoxy-info-eyebrow">
                SOLUCIONES INDUSTRIALES
              </span>

              <h3>{selectedSolution.title}</h3>

              <p>
                {selectedSolution.description}
              </p>

              {selectedSolution.products && (
                <ul>
                  {selectedSolution.products.map(
                    (product) => (
                      <li key={product}>
                        {product}
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}