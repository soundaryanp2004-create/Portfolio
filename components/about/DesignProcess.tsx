import { useInView } from '../../hooks/useInView';

function SearchIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="15" cy="15" r="8" stroke="#C4607A" strokeWidth="1.8" fill="none" />
      <path d="M21 21L28 28" stroke="#C4607A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 15H18M15 12V18" stroke="#C4607A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M8 20C8 20 10 18 13 18C14.5 18 15.5 18.5 17 18.5C18.5 18.5 19.5 18 21 18" stroke="#7050C4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 17L13 22L15 20L19 23L25 18" stroke="#7050C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 18C25 18 27 16 29 18" stroke="#7050C4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 22L11 25" stroke="#7050C4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 23L21 26" stroke="#7050C4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IterateIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M10 18C10 13.6 13.6 10 18 10C22.4 10 26 13.6 26 18" stroke="#3A8C6E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 18C26 22.4 22.4 26 18 26C13.6 26 10 22.4 10 18" stroke="#3A8C6E" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2" />
      <path d="M26 14L26 18L22 18" stroke="#3A8C6E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22L10 18L14 18" stroke="#3A8C6E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS: { Icon: React.ComponentType; lineColor: string; title: string; body: string }[] = [
  {
    Icon: SearchIcon,
    lineColor: '#FDDDE5',
    title: 'Understand and align',
    body: "I don't just ask questions, I ask the right questions. I dig into user psychology, business constraints, team dynamics, and market signals to uncover what's really going on. I turn scattered insights, fuzzy ideas, and half-baked goals into clear, focused direction. If a brief doesn't exist, I'll help build it. If the strategy is murky, I'll clarify it. That's where the work really starts.",
  },
  {
    Icon: HandshakeIcon,
    lineColor: '#E8E0FF',
    title: 'Design and collaborate',
    body: "I move from strategy to systems with speed and intention. Every screen I design is grounded in business goals, user insights, and practical constraints. I annotate clearly and structure files so cross-functional teams can easily follow along. I believe in collaboration that's honest and proactive, not just checking a box. You'll always know why I made a design decision, not just what I did.",
  },
  {
    Icon: IterateIcon,
    lineColor: '#D4F0E8',
    title: 'Test and adapt',
    body: "My work doesn't have to stop at the handoff. I validate designs through experimentation, testing, and ongoing iteration. Whether it's an A/B test, a usability study, or post-launch analysis, I believe in learning fast and improving faster. I'm not afraid to change direction when the data demands it. I make sure insights feed directly into the next round of work.",
  },
];

export default function DesignProcess() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingBottom: 'clamp(48px,6vw,96px)' }}>
      <div className="wrap">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ borderTop: '1px solid var(--border)', paddingTop: 'clamp(28px,3vw,44px)', marginBottom: 'clamp(32px,4vw,64px)' }}
        >
          <p className={`reveal ${visible ? 'vis' : ''}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>
            My Design Process
          </p>
          <h2 className={`reveal ${visible ? 'vis' : ''} d1`} style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, letterSpacing: '-0.022em', lineHeight: 1.1, color: 'var(--ink)', maxWidth: 500 }}>
            My design process
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <div
                key={step.title}
                className={`reveal ${visible ? 'vis' : ''} d${i + 2}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 'clamp(20px,3vw,40px)',
                  paddingBottom: isLast ? 0 : 'clamp(28px,4vw,56px)',
                }}
              >
                {/* Left: icon + vertical connector line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: step.lineColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <step.Icon />
                  </div>
                  {!isLast && (
                    <div style={{ flex: 1, width: 2, background: step.lineColor, borderRadius: 1, marginTop: 8, minHeight: 32 }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingTop: 12, paddingBottom: isLast ? 0 : 'clamp(12px,2vw,24px)' }}>
                  <h3 style={{ fontSize: 'clamp(17px,2vw,22px)', fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: 14, lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: 640 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
