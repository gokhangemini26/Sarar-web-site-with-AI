# TrustBadges Specification — SARAR

## Overview
- **Target file:** `src/components/TrustBadges.tsx`
- **Screenshot:** `docs/design-references/section-06-sarev-banner.png` (middle)
- **Interaction model:** static

## Container
- padding: 48px 15px
- display: flex; justifyContent: center; alignItems: flex-start; gap: 24px; flexWrap: wrap

## Each badge (5 total)
- width: ~200px; display: flex; flexDirection: column; alignItems: center; textAlign: center; gap: 12px

### Icon
- `<img src="/images/trust/trust-XXX.svg" />` — height: 52px; width: auto

### Title
- fontFamily: Teachers; fontSize: 14px; fontWeight: 700; color: #010203

### Subtitle
- fontSize: 13px; color: #666; lineHeight: 1.4; marginTop: 4px

## Badge Data
1. icon="trust-secure.svg", title="Güvenli Alışveriş", subtitle="256 Bit SSL&3D Secure"
2. icon="trust-shipping.svg", title="Ücretsiz Kargo", subtitle="2000₺ ve üzeri alışverişlerde"
3. icon="trust-installment.svg", title="Taksitli Alışveriş", subtitle="Peşin fiyatına\n4 taksit imkanı"
4. icon="trust-return.svg", title="İade & Değişim", subtitle="14 gün içinde iade\n30 gün içinde mağazadan değişim"
5. icon="trust-store.svg", title="Online Öde Mağazadan Al", subtitle="En yakın Sarar mağazasından teslim"

## Responsive
- Desktop: 5 in a row
- Mobile: 2-3 per row (flex-wrap)
