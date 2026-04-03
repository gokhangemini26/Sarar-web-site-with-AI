export default function SarevBanner() {
  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <img
        src="/images/sarev-banner.jpg"
        alt="Sarev Banner"
        style={{ width: '100%', display: 'block', height: 'auto' }}
      />
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '2px solid #ffffff',
          color: '#ffffff',
          backgroundColor: 'transparent',
          padding: '12px 28px',
          borderRadius: 30,
          fontFamily: 'Teachers, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: 1,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        Alışverişe Başla ▶
      </button>
    </div>
  );
}
