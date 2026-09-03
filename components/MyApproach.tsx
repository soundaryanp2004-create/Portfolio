import { useInView } from '../hooks/useInView';

const PRINCIPLES = [
  {
    title: 'Start with the problem',
    body: "I spend time understanding the real problem before jumping into solutions.",
  },
  {
    title: 'Design with purpose',
    body: "Every interaction should have a reason, making the experience clearer, easier, and more useful.",
  },
  {
    title: 'Keep learning',
    body: "I use feedback, testing, and iteration to keep improving the experience beyond the first idea.",
  },
];

export default function MyApproach() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingTop: 'clamp(60px,8vw,120px)', paddingBottom: 'clamp(48px,6vw,96px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ borderTop: '1px solid var(--border)', paddingTop: 'clamp(32px,4vw,56px)' }}
        >
          <p className={`reveal ${visible ? 'vis' : ''}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'clamp(20px,2.5vw,32px)' }}>
            My Approach
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }} className="approach-grid">
            <p
              className={`reveal ${visible ? 'vis' : ''} d1`}
              style={{ fontSize: 'clamp(20px,2.4vw,32px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--ink)', margin: 0 }}
            >
              I believe good design starts with understanding, not assumptions. I look at the people, the product, and the business together to find the simplest path forward.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal ${visible ? 'vis' : ''} d${i + 2}`}
                  style={{
                    padding: 'clamp(20px,2.5vw,32px) 0',
                    borderBottom: i < PRINCIPLES.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <p style={{ fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 8 }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: 'clamp(13px,1.1vw,15px)', fontWeight: 400, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
