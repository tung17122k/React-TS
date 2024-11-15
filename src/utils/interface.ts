export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature {
  speed: number;
}

export interface ICard {
  title: string;
  desc?: string;
  image: string;
  link: string;
}

// union |
// assertions &
export type FinalProduct = Product & ProductNewFeature;
