export interface ProductCardProps {
  /**
   * size = 310 x 413
   */
  image: string;
  rating?: number;
  name: string;
  price: string;
  href: string;
  crossedPrice?: string;
  filter?: Filter[];
  label?: 'new' | string;
}

export type Filter = 'best-sellers' | 'new-arrivals' | 'sale';
