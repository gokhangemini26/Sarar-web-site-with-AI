import Image from 'next/image';
import { Music, ExternalLink } from 'lucide-react';

export default function FooterBottom() {
  return (
    <div
      style={{
        padding: '40px 15px',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderTop: '1px solid #e5e5e5',
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <Image
          src="/images/srr-logo.png"
          alt="SARAR"
          width={120}
          height={70}
          style={{ height: '70px', width: 'auto' }}
        />
      </div>

      <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px', margin: '0 0 8px 0' }}>
        Hafta içi 09.00-18.00 saatleri arasında arayabilirsiniz.
      </p>

      <div
        style={{
          fontFamily: 'Teachers, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          color: '#010203',
          marginBottom: '12px',
          letterSpacing: '2px',
        }}
      >
        444 95 44
      </div>

      <div style={{ marginBottom: '24px' }}>
        <a href="#" style={{ fontSize: '14px', color: '#010203', textDecoration: 'underline', marginRight: '8px' }}>
          Mağazalarımız
        </a>
        <span style={{ fontSize: '14px', color: '#010203' }}>|</span>
        <a href="#" style={{ fontSize: '14px', color: '#010203', textDecoration: 'underline', marginLeft: '8px' }}>
          İletişim
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <a href="#" target="_blank" rel="noreferrer">
          <Image src="/images/footer/google-play.png" alt="Google Play" width={120} height={40} style={{ height: '40px', width: 'auto' }} />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Image src="/images/footer/app-store.png" alt="App Store" width={120} height={40} style={{ height: '40px', width: 'auto' }} />
        </a>
      </div>

      <div style={{ fontSize: '14px', fontWeight: 600, color: '#010203', marginBottom: '12px' }}>
        Bizi Takip Edin
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '32px',
          alignItems: 'center',
        }}
      >
        <a href="#" aria-label="Facebook">
          <Image src="/images/footer/social-facebook.svg" alt="Facebook" width={28} height={28} style={{ height: '28px', width: '28px' }} />
        </a>
        <a href="#" aria-label="X" style={{ color: '#010203', display: 'flex', fontSize: '20px', fontWeight: 700, textDecoration: 'none' }}>
          𝕏
        </a>
        <a href="#" aria-label="Instagram" style={{ color: '#010203', display: 'flex', fontSize: '22px', textDecoration: 'none' }}>
          <ExternalLink size={24} />
        </a>
        <a href="#" aria-label="YouTube" style={{ color: '#010203', display: 'flex', fontSize: '22px', textDecoration: 'none' }}>
          <ExternalLink size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" style={{ color: '#010203', display: 'flex', fontSize: '22px', textDecoration: 'none' }}>
          <ExternalLink size={24} />
        </a>
        <a href="#" aria-label="Spotify" style={{ color: '#1DB954', display: 'flex' }}>
          <Music size={24} />
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '24px',
        }}
      >
        {[1, 2, 3, 4].map((n) => (
          <Image
            key={n}
            src={`/images/footer/payments-${n}.jpg`}
            alt={`Payment methods ${n}`}
            width={80}
            height={28}
            style={{ height: '28px', width: 'auto' }}
          />
        ))}
      </div>

      <p style={{ marginTop: '24px', fontSize: '11px', color: '#aaa', margin: '24px 0 0 0' }}>
        © SARAR 2024. Tüm hakları saklıdır.
      </p>
    </div>
  );
}
