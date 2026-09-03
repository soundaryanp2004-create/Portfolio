import { Link } from 'react-router';
import { useInView } from '../../hooks/useInView';

const STUDIES = [
  { name: 'Armada Cash — Petty Cash Management App', slug: 'armada-cash', category: 'Finance · B2B' },
  { name: 'Mobile Point-of-Sale System', slug: 'mobile-pos', category: 'Retail · POS' },
  { name: 'Aasara — Funeral Service Coordination Platform', slug: 'aasara', category: 'Service Design' },
  { name: 'AstenMeds 2.0 — Enterprise Medical ERP Platform', slug: 'astenmeds', category: 'Healthcare · Enterprise' },
  { name: 'Abraaj', slug: 'abraaj', category: 'Coming soon' },
];

export default function CaseStudiesSection() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingBottom: 'clamp(48px,6vw,96px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${visible ? 'vis' : ''}`}
          style={{ borderTop: '1px solid var(--border)', paddingTop: 'clamp(28px,3vw,44px)', marginBottom: 'clamp(28px,3vw,40px)' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Case Studies
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STUDIES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/case-study/${s.slug}`}
              className={`reveal ${visible ? 'vis' : ''} d${Math.min(i + 1, 5)}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'clamp(16px,3vw,48px)',
                padding: 'clamp(18px,2vw,28px) 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'background 0.2s',
                borderRadius: 4,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(16px,2.5vw,32px)', flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--accent)', flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <span style={{ fontSize: 'clamp(15px,1.8vw,20px)', fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {s.name}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3)', display: 'none' }} className="cs-cat">
                  {s.category}
                </span>
                <span style={{ color: 'var(--ink-3)', fontSize: '16px' }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) { .cs-cat { display: block !important; } }
      `}</style>
    </section>
  );
}
