import "./Solutions.css";

interface Solution {
  title: string;
  description: string;
  number: string;
}

const solutions: Solution[] = [
  {
    number: "01",
    title: "Pisos Industriales",
    description:
      "Soluciones para protección, mantenimiento y conservación de superficies industriales.",
  },
  {
    number: "02",
    title: "Limpieza Institucional",
    description:
      "Productos especializados para mantener espacios limpios, seguros y funcionales.",
  },
  {
    number: "03",
    title: "Mantenimiento Industrial",
    description:
      "Soluciones químicas para diferentes necesidades de mantenimiento industrial.",
  },
];

export function Solutions() {
  return (
    <section id="soluciones" className="solutions-section">
      <div className="section-header">
        <span>02 · SOLUCIONES</span>

        <h2>
          Productos que
          <strong> hacen la diferencia.</strong>
        </h2>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.number}>
            <span className="solution-number">{solution.number}</span>

            <div>
              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <a href="#contacto">Conocer más →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}