# FooterLinks Specification — SARAR

## Overview
- **Target file:** `src/components/FooterLinks.tsx`
- **Screenshot:** `docs/design-references/section-07-footer.png`
- **Interaction model:** static

## Container
- padding: 48px 15px; backgroundColor: #ffffff
- display: grid; gridTemplateColumns: repeat(4, 1fr); gap: 32px

## Each column
- display: flex; flexDirection: column

### Column heading
- fontFamily: Teachers; fontSize: 15px; fontWeight: 700; color: #010203
- marginBottom: 16px

### Links
- fontSize: 13px; lineHeight: 2; textDecoration: none
- Default color: #373738
- Orange links (categories/special): color: #e07b39
- Blue links (special pages): color: #0d6efd

## Column Data

### Column 1: Erkek Kategorileri
Heading: "Erkek Kategorileri" (orange)
Links: Erkek Takım Elbise Kombinleri, Robin Yayla Kombinleri, Erkek Takım Elbise, Erkek Gömlek, Erkek Pantolon, Erkek Ceket, Smokin Takım Elbise, Smokin Gömlek, Erkek Tişört, Erkek Plaj, Erkek Kemer, Erkek Cüzdan, Erkek Günlük Ayakkabı, Çocuk Smokin

### Column 2: Kadın Kategorileri
Heading: "Kadın Kategorileri" (orange)
Links: Kadın Takım Elbise Kombinleri, Davet Elbisesi, Abiye Elbise, Kadın Elbise, Kadın Ceket, Kadın Tişört, Kadın Şort, Şal, Etek, Bluz

### Column 3: Ev Tekstil
Heading: "Ev Tekstil" (orange)
Links: Yorgan, Çift Kişilik Nevresim, Tek Kişilik Nevresim, İpek Yorgan Modelleri, Alez

### Column 4: Kurumsal
Heading: "Kurumsal" (black)
Links: Hakkımızda, Sarar Group, Sarar Blog, Sıkça Sorulan Sorular, Mağazadan Teslim, Sipariş Takip, Bilgi Toplumu Hizmetleri, Gizlilik Sözleşmesi, KVKK Müşteri Aydınlatma Metni

## Responsive
- Desktop: 4 columns
- Mobile: 2 columns, font smaller
