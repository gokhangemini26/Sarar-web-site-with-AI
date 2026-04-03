const columns = [
  {
    heading: 'Erkek Kategorileri',
    headingColor: '#e07b39',
    links: [
      'Erkek Takım Elbise Kombinleri',
      'Robin Yayla Kombinleri',
      'Erkek Takım Elbise',
      'Erkek Gömlek',
      'Erkek Pantolon',
      'Erkek Ceket',
      'Smokin Takım Elbise',
      'Smokin Gömlek',
      'Erkek Tişört',
      'Erkek Plaj',
      'Erkek Kemer',
      'Erkek Cüzdan',
      'Erkek Günlük Ayakkabı',
      'Çocuk Smokin',
    ],
  },
  {
    heading: 'Kadın Kategorileri',
    headingColor: '#e07b39',
    links: [
      'Kadın Takım Elbise Kombinleri',
      'Davet Elbisesi',
      'Abiye Elbise',
      'Kadın Elbise',
      'Kadın Ceket',
      'Kadın Tişört',
      'Kadın Şort',
      'Şal',
      'Etek',
      'Bluz',
    ],
  },
  {
    heading: 'Ev Tekstil',
    headingColor: '#e07b39',
    links: [
      'Yorgan',
      'Çift Kişilik Nevresim',
      'Tek Kişilik Nevresim',
      'İpek Yorgan Modelleri',
      'Alez',
    ],
  },
  {
    heading: 'Kurumsal',
    headingColor: '#010203',
    links: [
      'Hakkımızda',
      'Sarar Group',
      'Sarar Blog',
      'Sıkça Sorulan Sorular',
      'Mağazadan Teslim',
      'Sipariş Takip',
      'Bilgi Toplumu Hizmetleri',
      'Gizlilik Sözleşmesi',
      'KVKK Müşteri Aydınlatma Metni',
    ],
  },
];

export default function FooterLinks() {
  return (
    <div
      style={{
        padding: '48px 15px',
        backgroundColor: '#ffffff',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px',
      }}
    >
      {columns.map((col) => (
        <div key={col.heading} style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Teachers, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              color: col.headingColor,
              marginBottom: '16px',
            }}
          >
            {col.heading}
          </div>
          {col.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: '13px',
                lineHeight: 2,
                textDecoration: 'none',
                color: '#373738',
              }}
            >
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
