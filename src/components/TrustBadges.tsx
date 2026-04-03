import Image from 'next/image';

const badges = [
  { icon: 'trust-secure.svg', title: 'Güvenli Alışveriş', subtitle: '256 Bit SSL&3D Secure' },
  { icon: 'trust-shipping.svg', title: 'Ücretsiz Kargo', subtitle: '2000₺ ve üzeri alışverişlerde' },
  { icon: 'trust-installment.svg', title: 'Taksitli Alışveriş', subtitle: 'Peşin fiyatına 4 taksit imkanı' },
  { icon: 'trust-return.svg', title: 'İade & Değişim', subtitle: '14 gün içinde iade, 30 gün içinde mağazadan değişim' },
  { icon: 'trust-store.svg', title: 'Online Öde Mağazadan Al', subtitle: 'En yakın Sarar mağazasından teslim' },
];

export default function TrustBadges() {
  return (
    <div
      style={{
        padding: '48px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '24px',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
      }}
    >
      {badges.map((badge) => (
        <div
          key={badge.title}
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px',
          }}
        >
          <Image
            src={`/images/trust/${badge.icon}`}
            alt={badge.title}
            width={52}
            height={52}
            style={{ height: '52px', width: 'auto' }}
          />
          <div>
            <div
              style={{
                fontFamily: 'Teachers, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                color: '#010203',
              }}
            >
              {badge.title}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.4,
                marginTop: '4px',
              }}
            >
              {badge.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
