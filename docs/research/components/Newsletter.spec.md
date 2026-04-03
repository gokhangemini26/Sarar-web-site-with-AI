# Newsletter Specification — SARAR

## Overview
- **Target file:** `src/components/Newsletter.tsx`
- **Screenshot:** `docs/design-references/section-06-sarev-banner.png` (bottom)
- **Interaction model:** static form

## Container
- padding: 48px 15px; textAlign: center; backgroundColor: #ffffff
- maxWidth: 700px; margin: 0 auto

## Heading
- "Yenilikleri kaçırmayın!"
- fontFamily: Teachers; fontSize: 22px; fontWeight: 700; color: #010203; marginBottom: 20px

## Form row
- display: flex; width: 100%; maxWidth: 680px; margin: 0 auto
- Input: flex: 1; border: 1px solid #ccc; padding: 14px 20px; fontSize: 14px; color: #666; outline: none
- placeholder: "E-posta adresinizi giriniz"
- Button "Kayıt Ol": backgroundColor: #010203; color: #ffffff; padding: 14px 28px; fontSize: 14px; fontWeight: 600; border: none; cursor: pointer; whiteSpace: nowrap

## KVKK text
- marginTop: 12px; fontSize: 12px; color: #666
- display: flex; alignItems: center; justifyContent: center; gap: 8px
- Checkbox input + "KVKK Sözleşmesi'ni, okudum, kabul ediyorum." text
