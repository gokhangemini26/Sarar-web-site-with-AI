'use client';

import { useState } from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

export function Header() {
  const [_menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ width: '100%' }}>
      {/* AnnouncementBar */}
      <div
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          fontFamily: 'Teachers, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
        }}
      >
        <div style={{ position: 'relative', height: '20px', width: '100%' }}>
          <span
            style={{
              position: 'absolute',
              width: '100%',
              opacity: 0,
              animation: 'fadeMessage 9s infinite',
              animationDelay: '0s',
              textAlign: 'center',
            }}
          >
            2.000 TL üzerine ücretsiz kargo
          </span>
          <span
            style={{
              position: 'absolute',
              width: '100%',
              opacity: 0,
              animation: 'fadeMessage 9s infinite',
              animationDelay: '3s',
              textAlign: 'center',
            }}
          >
            Seçili Ürünlerde %50&apos;ye Varan İndirim
          </span>
        </div>
      </div>

      {/* LogoRow */}
      <div
        style={{
          backgroundColor: '#ffffff',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 30px',
        }}
      >
        {/* Left col - hamburger on mobile, spacer on desktop */}
        <div style={{ flex: 1 }}>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#373738',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Center col - logo */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/srr-logo.png"
            alt="SARAR"
            style={{ height: '65px', width: 'auto' }}
          />
        </div>

        {/* Right col - icons */}
        <div
          className="hidden md:flex"
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '4px',
              color: '#373738',
              cursor: 'pointer',
            }}
          >
            <Search size={18} />
            <span style={{ fontSize: '13px' }}>Arama</span>
          </div>
          <div style={{ color: '#373738', cursor: 'pointer' }}>
            <User size={20} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              color: '#373738',
              cursor: 'pointer',
            }}
          >
            <ShoppingCart size={20} />
            <span
              style={{
                fontSize: '10px',
                color: '#ffffff',
                backgroundColor: '#010203',
                borderRadius: '9999px',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '2px',
              }}
            >
              0
            </span>
          </div>
        </div>

        {/* Right col placeholder on mobile */}
        <div className="flex md:hidden" style={{ flex: 1 }} />
      </div>

      {/* NavBar */}
      <nav
        className="hidden md:flex"
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          justifyContent: 'center',
          gap: '40px',
          padding: '14px 0',
        }}
      >
        <a href="/erkek-giyim" style={navLinkStyle}>Erkek</a>
        <a href="/kadin-giyim" style={navLinkStyle}>Kadın</a>
        <a href="/smokin" style={navLinkStyle}>Smokin</a>
        <a href="/aksesuar" style={navLinkStyle}>Aksesuar</a>
        <a href="/sarev" style={navLinkStyle}>Sarev</a>
        <a href="/robin-yayla-x-sarar-koleksiyonu" style={navLinkStyle}>Robin Yayla X SARAR</a>
        <a href="/indirim" style={{ ...navLinkStyle, color: '#e42437' }}>İndirim</a>
        <a href="https://blog.sarar.com/" target="_blank" rel="noreferrer" style={navLinkStyle}>Sarar Blog</a>
      </nav>
    </header>
  );
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'Teachers, sans-serif',
  fontSize: '15px',
  fontWeight: 600,
  color: '#010203',
  textDecoration: 'none',
};

export default Header;
