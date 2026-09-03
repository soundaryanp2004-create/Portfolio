import { useInView } from '../hooks/useInView';

const ITEMS = [
  {
    period: '2022 — Present',
    company: 'Astenlabs',
    role: 'UI/UX / Product Designer',
    note: 'Worked across complex digital products — B2B applications, enterprise platforms, POS systems, healthcare and finance products. Contributed to the full design process from research and user flows through to high-fidelity UI, design systems, and developer handoff.',
    domains: ['POS', 'Healthcare', 'Finance', 'Enterprise', 'Mobile', 'Web'],
  },
];

export default function Experience() {
  const { ref, visible } = useInView(0.1);
  const { ref: r2, visible: v2 } = useInView(0.08);

  return (
    <section style={{ paddingTop: 'clamp(80px,10vw,160px)', paddingBottom: 'clamp(60px,8vw,120px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${visible ? 'vis' : ''}`}
          style={{ marginBottom: 'clamp(40px,5vw,64px)' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 20 }}>
            Experience
          </p>
        </div>

        <div ref={r2 as React.RefObject<HTMLDivElement>}>
          {ITEMS.map((item, i) => (
            <div
              key={item.company}
              className={`reveal ${v2 ? 'vis' : ''} d${i + 1}`}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 200px) 1fr',
                  gap: 'clamp(24px,4vw,72px)',
                  paddingBottom: 'clamp(32px,4vw,56px)',
                  borderBottom: '1px solid var(--border)',
                }}
                className="exp-row"
              >
                <div style={{ paddingTop: 2 }}>
                  <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--ink-3)', marginBottom: 16 }}>
                    {item.period}
                  </p>
                  <p style={{ fontSize: 'clamp(17px,1.8vw,22px)', fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: 6 }}>
                    {item.company}
                  </p>
                  <p style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink-2)' }}>
                    {item.role}
                  </p>
                </div>

                <div style={{ paddingTop: 2 }}>
                  <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', marginBottom: 24, maxWidth: 600 }}>
                    {item.note}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.domains.map(d => (
                      <span
                        key={d}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--ink-3)',
                          padding: '4px 10px',
                          border: '1px solid var(--border)',
                          borderRadius: 3,
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 620px) {
          .exp-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
