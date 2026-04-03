export default function VideoSection() {
  return (
    <div style={{ width: '100%', backgroundColor: '#d0dce5', overflow: 'hidden' }}>
      <video
        src="/videos/robin-yayla-2025-2.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 500 }}
      />
    </div>
  );
}
