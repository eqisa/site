export type ProductCategory =
  | "Desengrasante"
  | "Desmoldante"
  | "Desengrasante dieléctrico"
  | "Lubricante"
  | "Piso epóxico"
  | "Limpieza industrial"
  | "Otros";

export interface Product {
  id: string;

  name: string;

  category: ProductCategory;

  description: string;

  image: string;

  featured?: boolean;

  /**
   * Información adicional para la ficha del producto.
   */
  applications?: string[];

  features?: string[];

  presentations?: string[];

  /**
   * Ruta al documento PDF de la ficha técnica.
   */
  technicalSheet?: string;

  /**
   * Permite controlar si el producto
   * puede mostrarse como disponible.
   */
  available?: boolean;
}