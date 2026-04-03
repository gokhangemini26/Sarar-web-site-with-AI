export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[]; // Multiple images for hover
  badge?: string; // "Yeni", "+1 Renk", etc.
  colors: number; // Number of available colors
  url: string;
  inStock: boolean;
}

export interface FilterOptions {
  categories: CategoryFilter[];
  gender: GenderFilter[];
  colors: ColorOption[];
  sizes: SizeOption[];
  brands: BrandFilter[];
  priceRange: { min: number; max: number };
}

export interface CategoryFilter {
  id: string;
  name: string;
  count: number;
  children?: CategoryFilter[];
}

export interface GenderFilter {
  id: string;
  label: string;
  count: number;
}

export interface ColorOption {
  id: string;
  name: string;
  hexColor: string;
  rgbColor: string;
}

export interface SizeOption {
  id: string;
  label: string;
  count: number;
}

export interface BrandFilter {
  id: string;
  name: string;
  count: number;
}
