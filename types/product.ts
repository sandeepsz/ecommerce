export type ProductCardProps = {
  name: string;
  price: string;
  priceStriked?: string;
  image: string;
  href: string;
  rating?: number;
  // add types for badges
  label?: string;
};

// export type ProductsDetailsprops = {
//   name: string;
//   price: string;
//   priceStriked?: string;
//   image: string;
//   href?: string;
//   rating?: number;
//   label?: string;
//   badges?: string[];
//   description? : string;

// }