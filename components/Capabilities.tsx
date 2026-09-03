import { useInView } from '../hooks/useInView';

const SECTIONS = [
  {
    heading: 'Product Design',
    items: ['UX Design', 'UI Design', 'Interaction Design', 'Wireframing', 'Prototyping'],
  },
  {
    heading: 'Product Thinking',
    items: ['Information Architecture', 'User Flows', 'Problem Solving', 'UX Research'],
  },
  {
    heading: 'Systems',
    items: ['Design Systems', 'Component Design', 'Responsive Design', 'Visual Design'],
  },
  {
    heading: 'Craft',
    items: ['Branding', 'Packaging', 'Typography', 'Visual Communication'],
  },
  {
    heading: 'Tools',
    items: ['Figma', 'FigJam', 'Protopie', 'Maze', 'Zeplin', 'Notion'],
  },
];

export default function Capabilities() {
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
            Capabilities
          </p>
          <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.15 }}>
            What I do well.
          </h2>
        </div>

        <div
          ref={r2 as React.RefObject<HTMLDivElement>}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            borderTop: '1px solid var(--border)',
          }}
        >
          {SECTIONS.map((section, i) => (
            <div
              key={section.heading}
              className={`reveal ${v2 ? 'vis' : ''} d${i + 1}`}
              style={{
                background: 'var(--bg)',
                padding: 'clamp(24px,3vw,40px)',
              }}
            >
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
                {section.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {section.items.map(item => (
                  <li key={item} style={{ fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 400, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
