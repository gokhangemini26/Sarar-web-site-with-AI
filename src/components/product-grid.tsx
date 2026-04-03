'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Grid3x3, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Product } from '@/types/product'

interface ProductGridProps {
  products: Product[]
  onSortChange?: (sortOption: string) => void
  onViewChange?: (view: 'grid' | 'list') => void
  itemCount?: number
}

const SORT_OPTIONS = [
  { value: 'editor', label: "Editörün Sıralaması" },
  { value: 'price-asc', label: 'Fiyata Göre Artan' },
  { value: 'price-desc', label: 'Fiyata Göre Azalan' },
  { value: 'newest', label: 'En Yeni' },
]

export function ProductGrid({
  products,
  onSortChange,
  onViewChange,
  itemCount = 2231,
}: ProductGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortOption, setSortOption] = useState('editor')
  const [hoverImageIndex, setHoverImageIndex] = useState<{ [key: string]: number }>({})

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSortOption(value)
    onSortChange?.(value)
  }

  const handleViewToggle = (view: 'grid' | 'list') => {
    setViewMode(view)
    onViewChange?.(view)
  }

  const getImageIndex = (productId: string): number => {
    return hoverImageIndex[productId] ?? 0
  }

  const handleProductHover = (productId: string, index: number) => {
    setHoverImageIndex((prev) => ({
      ...prev,
      [productId]: index,
    }))
  }

  const handleProductLeave = (productId: string) => {
    setHoverImageIndex((prev) => ({
      ...prev,
      [productId]: 0,
    }))
  }

  return (
    <div className="w-full bg-white px-[15px]">
      {/* Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e5e5] py-3">
        {/* Sort Container */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-[13px] font-semibold text-[#373738]">
            Sıralama :
          </label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={handleSortChange}
            className="border border-[#e5e5e5] bg-white px-2 py-[6px] text-[13px] cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* View Options */}
        <div className="flex gap-1">
          <Button
            variant={viewMode === 'grid' ? 'outline' : 'ghost'}
            size="icon"
            onClick={() => handleViewToggle('grid')}
            className={cn(
              'h-8 w-8 border border-[#e5e5e5]',
              viewMode === 'grid' && 'border-black bg-[#f5f5f5]'
            )}
            aria-label="Grid view"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'outline' : 'ghost'}
            size="icon"
            onClick={() => handleViewToggle('list')}
            className={cn(
              'h-8 w-8 border border-[#e5e5e5]',
              viewMode === 'list' && 'border-black bg-[#f5f5f5]'
            )}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Item Count */}
        <div className="w-full text-right text-[13px] text-[#666] sm:w-auto">
          Stoktatiler: {itemCount.toLocaleString('tr-TR')} ürün bulundu
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={cn(
          'mt-4 gap-4',
          viewMode === 'grid'
            ? 'grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2'
            : 'flex flex-col'
        )}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="group/card relative bg-white transition-all duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:scale-[1.02] cursor-pointer"
            onMouseEnter={() =>
              product.images.length > 1 && handleProductHover(product.id, 1)
            }
            onMouseLeave={() => handleProductLeave(product.id)}
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute right-3 top-3 z-10 border border-black bg-white px-2 py-1 text-[12px] font-semibold text-black">
                {product.badge}
              </div>
            )}

            {/* Image Container */}
            <div className="relative aspect-[533/800] w-full overflow-hidden bg-gray-100">
              {product.images && product.images.length > 0 && (
                <Image
                  src={
                    product.images[getImageIndex(product.id)] || product.image
                  }
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
            </div>

            {/* Product Info */}
            <div className="p-3">
              {/* Brand */}
              <p className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-[#666]">
                {product.brand}
              </p>

              {/* Product Name */}
              <h3 className="m-0 mb-2 text-[14px] font-semibold leading-[1.4] text-[#373738]">
                {product.name}
              </h3>

              {/* Color Indicator */}
              {product.colors > 0 && (
                <span className="block m-[4px_0] text-[12px] text-[#666]">
                  {product.colors > 1 ? `+${product.colors - 1} Renk` : ''}
                </span>
              )}

              {/* Price */}
              {product.price && (
                <div className="mt-2 flex flex-col gap-1">
                  <span className="text-[13px] font-semibold text-black">
                    {product.price.toLocaleString('tr-TR')} ₺
                  </span>
                  {product.originalPrice && (
                    <span className="text-[12px] text-[#999] line-through">
                      {product.originalPrice.toLocaleString('tr-TR')} ₺
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
