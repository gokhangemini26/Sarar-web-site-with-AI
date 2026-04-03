'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { src: '/images/products/product-1.jpg', name: 'Kadın Siyah Elbise' },
  { src: '/images/products/product-2.jpg', name: 'Fleet Çizgili Siyah Ceket' },
  { src: '/images/products/product-3.jpg', name: 'Zeus Resta Slim Fit Lacivert Takım Elbise' },
  { src: '/images/products/product-4.jpg', name: 'Düğmeli Polo Yaka Kiremit Triko' },
  { src: '/images/products/product-5.jpg', name: 'Neva Bej Elbise' },
  { src: '/images/products/product-6.jpg', name: 'Arta Regular Fit Çizgili Siyah Mont' },
  { src: '/images/products/product-7.jpg', name: 'Goias Soho Desenli Siyah Gömlek' },
  { src: '/images/products/product-8.jpg', name: 'Napoleone Regular Fit Açık Lacivert Takım Elbise' },
  { src: '/images/products/product-9.jpg', name: 'Dorso Pembe Triko Elbise' },
  { src: '/images/products/product-10.jpg', name: 'Heno Siyah Pantolon' },
  { src: '/images/products/product-11.jpg', name: 'Blair Ekose Siyah Etek' },
];

const maxPage = Math.floor((products.length - 1) / 4);

export default function BestSellers() {
  const [page, setPage] = useState(0);
  const visible = products.slice(page * 4, page * 4 + 4);

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        padding: '48px 15px',
      }}
    >
      <div
        style={{
          width: '280px',
          flexShrink: 0,
          paddingRight: '32px',
        }}
      >
        <div
          style={{
            fontFamily: 'Teachers',
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1,
            color: '#010203',
          }}
        >
          <div>Çok</div>
          <div>Satanlar</div>
        </div>
        <p style={{ fontSize: '14px', color: '#373738', lineHeight: 1.6, marginTop: '12px' }}>
          <span style={{ color: '#e42437' }}>Kadın</span>
          <span style={{ color: '#4a90d9' }}>, Erkek </span>
          <span style={{ color: '#c8a400' }}>ve Sarev</span>
          {' koleksiyonlarının en çok tercih edilen ürünleri'}
        </p>
        <a href="#" className="sarar-btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
          KEŞFET
        </a>
      </div>

      <div style={{ flex: 1, position: 'relative' }}>
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          style={{
            position: 'absolute',
            left: '-20px',
            top: '40%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'white',
            border: '1px solid #e5e5e5',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: page === 0 ? 0.3 : 1,
          }}
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === maxPage}
          style={{
            position: 'absolute',
            right: '-20px',
            top: '40%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'white',
            border: '1px solid #e5e5e5',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: page === maxPage ? 0.3 : 1,
          }}
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>

        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            {visible.map((product, i) => (
              <div key={page * 4 + i} style={{ flex: 1, minWidth: 0 }}>
                <Image
                  src={product.src}
                  alt={product.name}
                  width={300}
                  height={400}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'contain',
                    background: '#f8f8f8',
                    display: 'block',
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    color: '#373738',
                    marginTop: '8px',
                    textAlign: 'center',
                    lineHeight: 1.4,
                    padding: '0 4px',
                  }}
                >
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
