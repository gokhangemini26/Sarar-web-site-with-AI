'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      style={{
        padding: '48px 15px',
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'Teachers, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            color: '#010203',
            marginBottom: '20px',
            margin: '0 0 20px 0',
          }}
        >
          Yenilikleri kaçırmayın!
        </h2>

        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresinizi giriniz"
            style={{
              flex: 1,
              border: '1px solid #ccc',
              padding: '14px 20px',
              fontSize: '14px',
              color: '#666',
              outline: 'none',
              fontFamily: 'Teachers, sans-serif',
            }}
          />
          <button
            style={{
              backgroundColor: '#010203',
              color: '#ffffff',
              padding: '14px 28px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'Teachers, sans-serif',
            }}
          >
            Kayıt Ol
          </button>
        </div>

        <div
          style={{
            marginTop: '12px',
            fontSize: '12px',
            color: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ cursor: 'pointer' }}
          />
          <span>
            <a href="/kvkk" style={{ color: '#666', textDecoration: 'underline' }}>
              KVKK Sözleşmesi
            </a>
            &apos;ni, okudum, kabul ediyorum.
          </span>
        </div>
      </div>
    </div>
  );
}
