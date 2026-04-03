'use client';

import { useState } from 'react';
import { SidebarFilters } from '@/components/sidebar-filters';
import { ProductGrid } from '@/components/product-grid';
import type { Product } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Slim Fit Gri Takım Elbise',
    brand: 'SARAR',
    price: 4999,
    originalPrice: 5999,
    image: '/images/products/product-1.jpg',
    images: ['/images/products/product-1.jpg', '/images/products/product-1.jpg'],
    badge: 'Yeni',
    colors: 3,
    url: '/erkek-giyim/slim-fit-gri',
    inStock: true,
  },
  {
    id: 'prod-002',
    name: 'Klasik Beyaz Gömlek',
    brand: 'INTERVIEW',
    price: 1299,
    image: '/images/products/product-2.jpg',
    images: ['/images/products/product-2.jpg', '/images/products/product-2.jpg'],
    badge: undefined,
    colors: 5,
    url: '/erkek-giyim/klasik-beyaz-gomlek',
    inStock: true,
  },
  {
    id: 'prod-003',
    name: 'Premium Blazer Ceket',
    brand: 'SARAR PREMIUM',
    price: 3499,
    originalPrice: 4499,
    image: '/images/products/product-3.jpg',
    images: ['/images/products/product-3.jpg', '/images/products/product-3.jpg'],
    badge: 'İndirimli',
    colors: 2,
    url: '/erkek-giyim/premium-blazer',
    inStock: true,
  },
  {
    id: 'prod-004',
    name: 'Çizgili Pamuk Gömlek',
    brand: 'INTERVIEW',
    price: 899,
    image: '/images/products/product-4.jpg',
    images: ['/images/products/product-4.jpg', '/images/products/product-4.jpg'],
    badge: undefined,
    colors: 4,
    url: '/erkek-giyim/cizgili-gomlek',
    inStock: true,
  },
  {
    id: 'prod-005',
    name: 'Regular Fit Siyah Pantolon',
    brand: 'SARAR',
    price: 1999,
    image: '/images/products/product-5.jpg',
    images: ['/images/products/product-5.jpg', '/images/products/product-5.jpg'],
    badge: undefined,
    colors: 3,
    url: '/erkek-giyim/regular-pantolon',
    inStock: true,
  },
  {
    id: 'prod-006',
    name: 'Keten Gömlek Açık Mavi',
    brand: 'CCS SARAR',
    price: 1599,
    originalPrice: 1999,
    image: '/images/products/product-6.jpg',
    images: ['/images/products/product-6.jpg', '/images/products/product-6.jpg'],
    badge: 'Yeni',
    colors: 6,
    url: '/erkek-giyim/keten-gomlek',
    inStock: true,
  },
  {
    id: 'prod-007',
    name: 'Double Breasted Ceket',
    brand: 'SARTORIA',
    price: 5499,
    image: '/images/products/product-7.jpg',
    images: ['/images/products/product-7.jpg', '/images/products/product-7.jpg'],
    badge: undefined,
    colors: 2,
    url: '/erkek-giyim/double-breasted',
    inStock: true,
  },
  {
    id: 'prod-008',
    name: 'Casual Oxford Gömlek',
    brand: 'INTERVIEW',
    price: 1199,
    image: '/images/products/product-8.jpg',
    images: ['/images/products/product-8.jpg', '/images/products/product-8.jpg'],
    badge: undefined,
    colors: 3,
    url: '/erkek-giyim/oxford-gomlek',
    inStock: true,
  },
  {
    id: 'prod-009',
    name: 'Slim Fit Navy Takım Elbise',
    brand: 'SARAR',
    price: 4499,
    originalPrice: 5499,
    image: '/images/products/product-9.jpg',
    images: ['/images/products/product-9.jpg', '/images/products/product-9.jpg'],
    badge: 'Yeni',
    colors: 2,
    url: '/erkek-giyim/navy-takim',
    inStock: true,
  },
  {
    id: 'prod-010',
    name: 'Denim Pantolon Dark Wash',
    brand: 'CCS SARAR',
    price: 1499,
    image: '/images/products/product-10.jpg',
    images: ['/images/products/product-10.jpg', '/images/products/product-10.jpg'],
    badge: undefined,
    colors: 4,
    url: '/erkek-giyim/denim-pantolon',
    inStock: true,
  },
  {
    id: 'prod-011',
    name: 'Kruvaze Ceket Krem',
    brand: 'SARAR PREMIUM',
    price: 3999,
    image: '/images/products/product-11.jpg',
    images: ['/images/products/product-11.jpg', '/images/products/product-11.jpg'],
    badge: undefined,
    colors: 1,
    url: '/erkek-giyim/kruvaze-ceket',
    inStock: true,
  },
  {
    id: 'prod-012',
    name: 'Poplin Gömlek Türkuaz',
    brand: 'INTERVIEW',
    price: 1099,
    originalPrice: 1399,
    image: '/images/products/product-1.jpg',
    images: ['/images/products/product-1.jpg', '/images/products/product-1.jpg'],
    badge: 'İndirimli',
    colors: 5,
    url: '/erkek-giyim/poplin-turku',
    inStock: true,
  },
  {
    id: 'prod-013',
    name: 'Relax Fit Yeşil Pantolon',
    brand: 'SARAR',
    price: 2099,
    image: '/images/products/product-2.jpg',
    images: ['/images/products/product-2.jpg', '/images/products/product-2.jpg'],
    badge: 'Yeni',
    colors: 3,
    url: '/erkek-giyim/relax-pantolon',
    inStock: true,
  },
  {
    id: 'prod-014',
    name: 'Pamuk Gömlek Bordo',
    brand: 'INTERVIEW',
    price: 999,
    image: '/images/products/product-3.jpg',
    images: ['/images/products/product-3.jpg', '/images/products/product-3.jpg'],
    badge: undefined,
    colors: 2,
    url: '/erkek-giyim/bordo-gomlek',
    inStock: true,
  },
  {
    id: 'prod-015',
    name: 'Summer Linen Ceket',
    brand: 'SARAR PREMIUM',
    price: 4299,
    originalPrice: 5299,
    image: '/images/products/product-4.jpg',
    images: ['/images/products/product-4.jpg', '/images/products/product-4.jpg'],
    badge: 'İndirimli',
    colors: 4,
    url: '/erkek-giyim/linen-ceket',
    inStock: true,
  },
  {
    id: 'prod-016',
    name: 'Business Takim Siyah',
    brand: 'SARTORIA',
    price: 6499,
    image: '/images/products/product-5.jpg',
    images: ['/images/products/product-5.jpg', '/images/products/product-5.jpg'],
    badge: undefined,
    colors: 1,
    url: '/erkek-giyim/business-takim',
    inStock: true,
  },
];

export function ErkekGiyimContent() {
  const [sortOption, setSortOption] = useState('editor');

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="px-[15px]">
        <div className="border-b border-[#e5e5e5] py-3">
          <h1 className="font-['Teachers'] text-3xl font-600 text-[#373738] m-0">Erkek Giyim</h1>
          <p className="text-sm text-[#666] mt-2 m-0">Anasayfa &gt; Erkek</p>
        </div>
      </div>

      <div className="grid grid-cols-[358.75px_1fr] gap-4 px-[15px] py-4 md:grid-cols-1 md:gap-3 sm:grid-cols-1">
        <aside className="md:hidden sm:hidden">
          <SidebarFilters />
        </aside>
        <section>
          <ProductGrid
            products={MOCK_PRODUCTS}
            onSortChange={handleSortChange}
            onViewChange={handleViewChange}
            itemCount={2231}
          />
        </section>
      </div>
    </main>
  );
}
