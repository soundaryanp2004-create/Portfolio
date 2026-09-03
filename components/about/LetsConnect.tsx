import { useInView } from '../../hooks/useInView';

function AbstractIllustration() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* Background soft circle */}
      <circle cx="120" cy="120" r="100" fill="#F5EBE3" fillOpacity="0.6" />
      {/* Overlapping pastel shapes */}
      <ellipse cx="90" cy="100" rx="50" ry="55" fill="#FDDDE5" fillOpacity="0.55" />
      <ellipse cx="155" cy="115" rx="48" ry="50" fill="#E8E0FF" fillOpacity="0.5" />
      <ellipse cx="120" cy="148" rx="46" ry="38" fill="#D4F0E8" fillOpacity="0.5" />
      {/* Inner layer */}
      <circle cx="120" cy="112" r="32" fill="white" fillOpacity="0.75" />
      {/* Monogram S */}
      <text x="120" y="125" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui" fontSize="32" fontWeight="300" letterSpacing="-2" fill="#110F0D" fillOpacity="0.55">S</text>
      {/* Small decorative dots */}
      <circle cx="68" cy="68" r="5" fill="#C4607A" fillOpacity="0.35" />
      <circle cx="175" cy="72" r="4" fill="#7050C4" fillOpacity="0.35" />
      <circle cx="162" cy="172" r="6" fill="#3A8C6E" fillOpacity="0.3" />
      <circle cx="78" cy="160" r="4" fill="#B06535" fillOpacity="0.3" />
    </svg>
  );
}

export default function LetsConnect() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingBottom: 'clamp(60px,8vw,120px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal lc-grid ${visible ? 'vis' : ''}`}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'clamp(16px,2vw,28px)',
            padding: 'clamp(36px,5vw,72px)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(32px,4vw,64px)',
            alignItems: 'center',
            background: 'white',
          }}
        >
          {/* Left */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 20 }}>
              Let&apos;s connect
            </p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)', marginBottom: 20 }}>
              Let&apos;s connect
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.3vw,17px)', fontWeight: 400, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 36, maxWidth: 400 }}>
              Open to new projects, collaborations, and conversations.
            </p>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0 26px', height: 48, borderRadius: 24,
                background: 'white', color: 'var(--ink)',
                fontSize: '14px', fontWeight: 500, letterSpacing: '-0.005em',
                textDecoration: 'none',
                border: '1.5px solid rgba(17,15,13,0.25)',
                boxShadow: '0 2px 0 rgba(17,15,13,0.08)',
                transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 0 rgba(17,15,13,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 0 rgba(17,15,13,0.08)'; }}
            >
              Contact me →
            </a>
          </div>

          {/* Right — illustration */}
          <div style={{ flexShrink: 0 }}>
            <AbstractIllustration />
          </div>
        </div>
      </div>

    </section>
  );
}
