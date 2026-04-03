import Link from 'next/link';
import Image from 'next/image';

const banners = [
  {
    src: '/images/category-kadin.jpg',
    label: 'KADIN',
    caption: 'ŞIKLIK DOZUNUZU ARTIRAN DIŞ GİYİM KOLEKSİYONU',
    href: '/kadin-giyim'
  },
  {
    src: '/images/category-erkek.jpg',
    label: 'ERKEK',
    caption: 'STİLİNİZİ GÜÇLENDİREN DIŞ GİYİM KOLEKSİYONU',
    href: '/erkek-giyim'
  }
];

export default function CategoryBanners() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {banners.map((banner) => (
        <div
          key={banner.href}
          style={{ width: '50%', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        >
          <Link href={banner.href} style={{ display: 'block' }}>
            <div style={{ position: 'relative', height: '750px' }}>
              <Image
                src={banner.src}
                alt={banner.label}
                fill
                style={{ objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '60px',
                  right: '30px',
                  color: '#ffffff',
                  fontFamily: 'Teachers',
                  fontSize: '28px',
                  fontWeight: 600,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {banner.label}
              </span>
            </div>
          </Link>
          <div
            style={{
              paddingTop: '12px',
              paddingLeft: '16px',
              fontSize: '13px',
              color: '#373738',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {banner.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
