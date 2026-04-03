'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  { src: '/images/lifestyle/lifestyle-1.png', caption: 'Sessiz Lüks Akımı Nedir?' },
  { src: '/images/lifestyle/lifestyle-2.jpg', caption: 'Mevsimin Ruhu' },
  { src: '/images/lifestyle/lifestyle-3.png', caption: 'Sessiz Lüks' },
  { src: '/images/lifestyle/lifestyle-4.png', caption: 'Power Dressing Nedir?' },
  { src: '/images/lifestyle/lifestyle-5.png', caption: 'Burçlara Şans Getiren Renkler Nelerdir?' },
  { src: '/images/lifestyle/lifestyle-6.png', caption: 'SARAR Spotify' },
  { src: '/images/lifestyle/lifestyle-7.png', caption: 'Sarar Blog' },
  { src: '/images/lifestyle/lifestyle-8.png', caption: "Mustafa Kemal Atatürk'ün Çağdaş ve Klasik Giyim Stili" },
  { src: '/images/lifestyle/lifestyle-9.jpg', caption: 'Sessiz Lüks...' },
  { src: '/images/lifestyle/lifestyle-10.jpg', caption: '' },
];

export default function LifestyleSlider() {
  const [page, setPage] = useState(0);
  const maxPage = Math.floor((cards.length - 1) / 6);

  const visible = cards.slice(page * 6, page * 6 + 6);

  return (
    <div style={{ padding: '40px 15px', width: '100%', boxSizing: 'border-box' }}>
      <div>
        <div
          style={{
            fontFamily: 'Teachers, sans-serif',
            fontSize: 20,
            fontWeight: 700,
            color: '#010203',
            letterSpacing: 2,
          }}
        >
          SARAR LIFE STYLE
        </div>
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: '#010203',
            marginTop: 4,
            marginBottom: 24,
          }}
        />
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {visible.map((card, i) => (
            <div key={page * 6 + i} style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={card.src}
                  alt={card.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {card.caption && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#373738',
                    marginTop: 8,
                    textAlign: 'center',
                    lineHeight: 1.4,
                    padding: '0 4px',
                  }}
                >
                  {card.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {page > 0 && (
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            style={{
              position: 'absolute',
              left: -16,
              top: '40%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {page < maxPage && (
          <button
            onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
            style={{
              position: 'absolute',
              right: -16,
              top: '40%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
