import { Link } from 'react-router';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="about" style={{ paddingTop: 'clamp(72px,9vw,140px)', paddingBottom: 'clamp(60px,8vw,120px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ borderTop: '1px solid var(--border)', paddingTop: 'clamp(40px,5vw,72px)' }}
        >
          <p className={`reveal ${visible ? 'vis' : ''}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'clamp(24px,3vw,36px)' }}>
            About me
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
              gap: 'clamp(40px,6vw,96px)',
              alignItems: 'start',
            }}
            className="about-home-grid"
          >
            <h2
              className={`reveal ${visible ? 'vis' : ''} d1`}
              style={{
                fontSize: 'clamp(24px,3vw,38px)',
                fontWeight: 300,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              I&apos;m a product designer focused on turning complex problems into clear, useful, and thoughtful digital experiences.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p className={`reveal ${visible ? 'vis' : ''} d2`} style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', margin: 0 }}>
                I work across research, UX, interaction, and visual design to create products that balance user needs with real business goals.
              </p>
              <p className={`reveal ${visible ? 'vis' : ''} d3`} style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', margin: 0 }}>
                I enjoy understanding how people work, where friction happens, and how thoughtful design can make everyday experiences simpler. My approach is curious, collaborative, and grounded in solving the right problem before designing the solution.
              </p>
              <div className={`reveal ${visible ? 'vis' : ''} d4`} style={{ marginTop: 8 }}>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '0 24px', height: 46, borderRadius: 23,
                    background: 'transparent', color: 'var(--ink)',
                    fontSize: '14px', fontWeight: 500, letterSpacing: '-0.005em',
                    textDecoration: 'none',
                    border: '1.5px solid rgba(17,15,13,0.22)',
                    transition: 'border-color 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,15,13,0.22)'; e.currentTarget.style.transform = 'none'; }}
                >
                  Know more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
