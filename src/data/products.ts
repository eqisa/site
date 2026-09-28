import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "solgras",

    name: "SOL GRAS",

    category: "Desengrasante",

    description:
      "SOL-GRAS es un agente de limpieza alcalino formulado para disolver de forma efectiva residuos de grasa y aceites en equipos de proceso. Eficaz en la industria dedicada al grado alimenticio ya que provee resultados efectivos en equipos sensibles.",

    image: "/images/eqisa_images/sol_gras_cap.png",

    featured: true,

    available: true,
  },

  {
    id: "prosylon",

    name: "Pro Sylon",

    category: "Desmoldante",

    description:
      "PRO SYLON está formulado con silicones de alta viscosidad que permiten la aplicación en las cantidades justamente necesarias para el adecuado desmoldado de las piezas de plástico. Este producto no es tóxico y cumple con FDA 21 CFR 175.300 regulaciones para el contacto accidental con alimentos y para uso en plantas procesadoras de alimentos.",

    image: "/images/eqisa_images/prosylon_1.png",

    featured: true,

    available: true,
  },

  {
    id: "prosylon_s",

    name: "Pro Sylon S",

    category: "Desmoldante",

    description:
      "PRO SYLON S está formulado con silicones de alta viscosidad que permiten la aplicación en las cantidades justamente necesarias para el adecuado desmoldado de las piezas de plástico. Su fórmula ayuda de manera eficaz a reducir merma.",

    image: "/images/eqisa_images/prosylon_2.png",

    featured: true,

    available: true,
  },

  {
    id: "alfasol",

    name: "ALFA SOL",

    category: "Desengrasante dieléctrico",

    description:
      "Alta capacidad para disolver grasas y aceites industriales. Poder formulado con agente no corrosivo. Alta resistencia dieléctrica de hasta 15,000 Volts.",

    image: "/images/eqisa_images/alfa_sol.png",

    featured: true,

    available: true,
  },
];