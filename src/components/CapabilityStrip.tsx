const TAGS = [
  'Product Design',
  'UI / UX',
  'Web',
  'Mobile',
  'Enterprise',
  'Design Systems',
  'B2B',
  'Healthcare',
  'Finance',
];

function TagList() {
  return (
    <>
      {TAGS.map((tag, i) => (
        <span
          key={tag}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 48,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            whiteSpace: 'nowrap',
          }}
        >
          {tag}
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border)', display: 'inline-block', flexShrink: 0 }} />
        </span>
      ))}
    </>
  );
}

export default function CapabilityStrip() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'clamp(18px,2vw,26px) 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 28s linear infinite' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48, paddingRight: 48 }}>
          <TagList />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48, paddingRight: 48 }} aria-hidden>
          <TagList />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
