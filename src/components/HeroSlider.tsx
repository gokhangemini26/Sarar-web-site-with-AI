'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/images/hero-slide-1.jpg', alt: "Seçili Ürünlerde %50'ye Varan İndirim" },
  { src: '/images/hero-slide-2.jpg', alt: 'Banner' },
  { src: '/images/hero-slide-3.jpg', alt: 'Sarev %25 sezon sonu' },
  { src: '/images/hero-slide-4.jpg', alt: 'Kadın Koleksiyonunda Seçili Ürünlerde %20 İndirim' },
  { src: '/images/hero-slide-5.jpg', alt: "Senin Sarar'ın Yok Mu?" },
  { src: '/images/hero-slide-6.jpg', alt: 'Seçili Kadın Ürünlerinde Sepette Tek Fiyat' },
  { src: '/images/hero-slide-7.jpg', alt: 'Robin Yayla Ürünlerinde %50 İndirim' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  const next = () => setCurrentSlide((currentSlide + 1) % slides.length);

  return (
    <div
      style={{
        width: '100%',
        height: '603px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
    >
      <style>{`@media (max-width: 767px) { .hero-slider { height: 280px !important; } }`}</style>

      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: currentSlide === i ? 'block' : 'none',
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}

      <button
        onClick={prev}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.65)',
          width: '48px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <ChevronLeft size={24} color="#373738" />
      </button>

      <button
        onClick={next}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.65)',
          width: '48px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <ChevronRight size={24} color="#373738" />
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              border: 'none',
              padding: 0,
              background: currentSlide === i ? '#ffffff' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
