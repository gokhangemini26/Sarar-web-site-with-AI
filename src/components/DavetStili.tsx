import Image from 'next/image';
import Link from 'next/link';

export default function DavetStili() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        padding: '48px 15px',
      }}
    >
      <div style={{ width: '50%', paddingRight: '24px' }}>
        <Image
          src="/images/davet-stili.jpg"
          alt="Davet Stili"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <div style={{ width: '50%', paddingLeft: '48px' }}>
        <h2
          style={{
            fontFamily: 'Teachers',
            fontSize: '36px',
            fontWeight: 700,
            color: '#010203',
            letterSpacing: '2px',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}
        >
          DAVET STİLİ
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: '#373738',
            lineHeight: 1.7,
            marginBottom: '24px',
          }}
        >
          Sofistike dokular ve özgün tasarımlar, davetlerdeki stilinizi bir adım öne taşıyor.
        </p>
        <Link
          href="#"
          style={{
            fontSize: '14px',
            color: '#010203',
            fontWeight: 600,
            textDecoration: 'underline',
          }}
        >
          Tümünü Gör →
        </Link>
      </div>
    </div>
  );
}
