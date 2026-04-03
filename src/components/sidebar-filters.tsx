'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SidebarFilters() {
  const [sections, setSections] = useState<Record<string, boolean>>({
    categories: false,
    gender: false,
    colors: false,
    sizes: false,
    brands: false,
    price: false,
  });

  const [selectedFilters, setSelectedFilters] = useState<Record<string, boolean>>({});
  const [priceRange, setPriceRange] = useState({ min: 449, max: 200000 });

  const toggleSection = (sectionId: string) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const colorSwatches = [
    { id: 'beige', rgb: 'rgb(238, 232, 170)' },
    { id: 'gold', rgb: 'rgb(238, 180, 34)' },
    { id: 'khaki', rgb: 'rgb(205, 205, 180)' },
    { id: 'yellowgreen', rgb: 'rgb(154, 205, 50)' },
    { id: 'chocolate', rgb: 'rgb(210, 105, 30)' },
    { id: 'red', rgb: 'rgb(255, 0, 0)' },
    { id: 'blue', rgb: 'rgb(0, 0, 255)' },
    { id: 'lightblue', rgb: 'rgb(154, 192, 205)' },
    { id: 'gray', rgb: 'rgb(128, 128, 128)' },
    { id: 'black', rgb: 'rgb(0, 0, 0)' },
    { id: 'white', rgb: 'rgb(255, 255, 255)' },
    { id: 'pink', rgb: 'rgb(255, 192, 203)' },
    { id: 'green', rgb: 'rgb(0, 128, 0)' },
    { id: 'purple', rgb: 'rgb(128, 0, 128)' },
  ];

  const categories = [
    { label: 'Yeni Gelenler', count: 538 },
    { label: 'Takım Elbise', count: 313 },
    { label: 'Damatlık', count: 85 },
    { label: 'Ceket', count: 230 },
    { label: 'Dış Giyim', count: 210 },
    { label: 'Pantolon', count: 330 },
    { label: 'Gömlek', count: 682 },
  ];

  const genderOptions = [
    { id: 'gender-erkek', label: 'Erkek', count: 2105 },
    { id: 'gender-cocuk', label: 'Çocuk', count: 20 },
    { id: 'gender-unisex', label: 'Unisex', count: 'H' },
  ];

  const sizes = [
    { id: 'size-xxs', label: 'XXS', count: 12 },
    { id: 'size-xs', label: 'XS', count: 44 },
    { id: 'size-s', label: 'S', count: 590 },
    { id: 'size-m', label: 'M', count: 668 },
    { id: 'size-l', label: 'L', count: 530 },
    { id: 'size-xl', label: 'XL', count: 510 },
    { id: 'size-xxl', label: 'XXL', count: 280 },
  ];

  const brands = [
    { id: 'brand-ccs', label: 'CCS SARAR', count: 15 },
    { id: 'brand-interview', label: 'INTERVIEW', count: 1243 },
    { id: 'brand-sarar', label: 'SARAR', count: 817 },
    { id: 'brand-premium', label: 'SARAR PREMIUM', count: 107 },
    { id: 'brand-sartoria', label: 'SARTORIA', count: 19 },
  ];

  return (
    <div className="w-[358.75px] bg-white border-r border-[#e5e5e5] p-0">
      <div className="px-[15px]">
        {/* Categories Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('categories')}
          >
            Kategoriler
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.categories ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.categories && (
            <div className="py-3 space-y-2">
              <div className="font-semibold text-sm text-[#373738] py-2">Erkek (2231)</div>
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href="#"
                  className="text-sm font-normal text-[#373738] block py-2 hover:text-black transition-colors"
                >
                  {cat.label} ({cat.count})
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Gender Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('gender')}
          >
            Cinsiyet
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.gender ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.gender && (
            <div className="py-3 space-y-3">
              {genderOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center text-sm font-normal text-[#373738] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[option.id] || false}
                    onChange={() => handleCheckboxChange(option.id)}
                    className="w-4 h-4 mr-2 cursor-pointer accent-black"
                  />
                  {option.label} ({option.count})
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Colors Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('colors')}
          >
            Renk Seçiniz
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.colors ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.colors && (
            <div className="py-4 flex flex-wrap gap-1">
              {colorSwatches.map((color) => (
                <button
                  key={color.id}
                  className={cn(
                    'w-8 h-8 rounded-full border-2 border-white transition-all duration-200',
                    'hover:border-gray-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2'
                  )}
                  style={{ backgroundColor: color.rgb }}
                  aria-label={`Color ${color.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCheckboxChange(`color-${color.id}`);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Sizes Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('sizes')}
          >
            Beden Seçiniz
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.sizes ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.sizes && (
            <div className="py-3 grid grid-cols-2 gap-3">
              {sizes.map((size) => (
                <label
                  key={size.id}
                  className="flex items-center text-sm font-normal text-[#373738] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[size.id] || false}
                    onChange={() => handleCheckboxChange(size.id)}
                    className="w-4 h-4 mr-2 cursor-pointer accent-black"
                  />
                  {size.label} ({size.count})
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('brands')}
          >
            Marka
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.brands ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.brands && (
            <div className="py-3 space-y-3">
              {brands.map((brand) => (
                <label
                  key={brand.id}
                  className="flex items-center text-sm font-normal text-[#373738] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[brand.id] || false}
                    onChange={() => handleCheckboxChange(brand.id)}
                    className="w-4 h-4 mr-2 cursor-pointer accent-black"
                  />
                  {brand.label} ({brand.count})
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="border-b border-[#e5e5e5]">
          <h3
            className="text-base font-semibold font-['Teachers'] text-[#373738] py-3 m-0 border-b border-[#e5e5e5] cursor-pointer flex items-center justify-between"
            onClick={() => toggleSection('price')}
          >
            Fiyat
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-200',
                sections.price ? 'rotate-180' : ''
              )}
            />
          </h3>
          {sections.price && (
            <div className="py-4">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={`${priceRange.min.toLocaleString('tr-TR')} TL`}
                  onChange={(e) => {
                    const num = parseInt(e.target.value.replace(/\D/g, '')) || 0;
                    setPriceRange((prev) => ({ ...prev, min: num }));
                  }}
                  className="w-[48%] px-2 py-2 text-sm text-center border border-[#e5e5e5] rounded"
                />
                <input
                  type="text"
                  value={`${priceRange.max.toLocaleString('tr-TR')} TL`}
                  onChange={(e) => {
                    const num = parseInt(e.target.value.replace(/\D/g, '')) || 0;
                    setPriceRange((prev) => ({ ...prev, max: num }));
                  }}
                  className="w-[48%] px-2 py-2 text-sm text-center border border-[#e5e5e5] rounded"
                />
              </div>
              <input
                type="range"
                min="0"
                max="500000"
                value={priceRange.max}
                onChange={(e) => {
                  setPriceRange((prev) => ({
                    ...prev,
                    max: parseInt(e.target.value),
                  }));
                }}
                className="w-full accent-black"
              />
            </div>
          )}
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="px-[15px] py-4">
        <button className="w-full bg-black text-white text-sm font-bold py-3 px-0 rounded-none border-none cursor-pointer uppercase tracking-[0.5px] hover:bg-gray-900 transition-colors duration-200">
          SEÇİMİ FILTRELE
        </button>
      </div>
    </div>
  );
}
