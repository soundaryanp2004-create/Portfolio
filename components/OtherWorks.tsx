import { useInView } from '../hooks/useInView';

const WORKS = [
  {
    category: 'Packaging',
    desc: 'Structural and surface packaging design across FMCG and consumer product categories.',
    accent: '#8B7355',
    bg: '#F3EFE8',
  },
  {
    category: 'Branding',
    desc: 'Visual identity systems, logotype design, brand guidelines, and identity applications.',
    accent: '#5E7A6B',
    bg: '#EAF0EC',
  },
  {
    category: 'Visual Design',
    desc: 'Art direction, graphic compositions, illustration, and visual communication design.',
    accent: '#6B5E8A',
    bg: '#EEE8F5',
  },
];

function WorkCard({ work, delay }: { work: (typeof WORKS)[0]; delay: string }) {
  const { ref, visible } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? 'vis' : ''} ${delay}`}
      style={{
        background: work.bg,
        borderRadius: 4,
        padding: 'clamp(32px,4vw,48px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        minHeight: 220,
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
    >
      <div style={{ width: 32, height: 2, background: work.accent, borderRadius: 1, opacity: 0.6 }} />
      <h3 style={{ fontSize: 'clamp(17px,2vw,22px)', fontWeight: 500, letterSpacing: '-0.015em', color: '#110F0D' }}>
        {work.category}
      </h3>
      <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(17,15,13,0.55)', flex: 1 }}>
        {work.desc}
      </p>
      <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', color: work.accent, opacity: 0.7 }}>
        Available on request
      </p>
    </div>
  );
}

export default function OtherWorks() {
  const { ref, visible } = useInView(0.1);

  return (
    <section style={{ paddingBottom: 'clamp(60px,8vw,120px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${visible ? 'vis' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingBottom: 'clamp(32px,4vw,56px)',
            borderBottom: '1px solid var(--border)',
            marginBottom: 'clamp(32px,4vw,48px)',
          }}
        >
          <h2 style={{ fontSize: 'clamp(11px,1vw,13px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Other Works
          </h2>
          <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink-3)' }}>
            Packaging · Branding · Visual Design
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(12px,1.5vw,20px)',
          }}
        >
          {WORKS.map((work, i) => (
            <WorkCard key={work.category} work={work} delay={`d${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
