import { useInView } from '../hooks/useInView';
import Education from '../components/about/Education';
import LetsConnect from '../components/about/LetsConnect';
import AboutFooter from '../components/about/AboutFooter';

function AboutIntro() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingTop: 'clamp(60px,8vw,120px)', paddingBottom: 'clamp(48px,6vw,80px)' }}>
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <p className={`reveal ${visible ? 'vis' : ''}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'clamp(24px,3vw,36px)' }}>
            About me
          </p>

          <h1
            className={`reveal ${visible ? 'vis' : ''} d1`}
            style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 'clamp(32px,4vw,56px)', maxWidth: 700 }}
          >
            I&apos;m a product designer focused on turning complex problems into clear, useful, and thoughtful digital experiences.
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(32px,5vw,80px)' }} className="about-intro-grid">
            <p className={`reveal ${visible ? 'vis' : ''} d2`} style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', margin: 0 }}>
              I work across research, UX, interaction, and visual design to create products that balance user needs with real business goals. My background spans enterprise SaaS, B2B platforms, healthcare, finance, and service design — across both web and mobile.
            </p>
            <p className={`reveal ${visible ? 'vis' : ''} d3`} style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', margin: 0 }}>
              I enjoy understanding how people work, where friction happens, and how thoughtful design can make everyday experiences simpler. My approach is curious, collaborative, and grounded in solving the right problem before designing the solution.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default function AboutPage() {
  return (
    <div>
      <AboutIntro />
      <Education />
      <LetsConnect />
      <AboutFooter />
    </div>
  );
}
