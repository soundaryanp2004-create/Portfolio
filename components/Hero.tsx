import { useEffect, useState } from 'react';

function HeroVisual() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5',
      maxWidth: 420,
    }}>
      {/* Background blob */}
      <div style={{
        position: 'absolute',
        inset: '10%',
        background: 'radial-gradient(ellipse at 40% 50%, #F0E8DF 0%, #EDE5DB 60%, transparent 100%)',
        borderRadius: '60% 40% 55% 45% / 50% 45% 55% 50%',
      }} />

      {/* Card 1 — typography specimen (top right) */}
      <div style={{
        position: 'absolute',
        top: '4%',
        right: '2%',
        width: '55%',
        background: 'white',
        borderRadius: 12,
        padding: '18px 20px',
        boxShadow: '0 4px 24px rgba(17,15,13,0.07)',
        border: '1px solid rgba(228,224,217,0.7)',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.3)', marginBottom: 10 }}>
          Typography
        </div>
        <div style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.04em', color: 'var(--ink)', lineHeight: 1, marginBottom: 10 }}>
          Aa
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[65, 48, 30].map((w, i) => (
            <div key={i} style={{ height: 4, background: 'var(--border)', borderRadius: 2, width: `${w}%` }} />
          ))}
        </div>
      </div>

      {/* Card 2 — color palette (middle left) */}
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '0%',
        background: 'white',
        borderRadius: 12,
        padding: '16px 18px',
        boxShadow: '0 4px 24px rgba(17,15,13,0.07)',
        border: '1px solid rgba(228,224,217,0.7)',
      }}>
        <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.3)', marginBottom: 10 }}>
          Palette
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#110F0D', '#B06535', '#F8F6F2', '#E4E0D9', '#F0EDE7'].map((c, i) => (
            <div key={i} style={{ width: 24, height: 24, borderRadius: 6, background: c, border: '1px solid rgba(17,15,13,0.08)' }} />
          ))}
        </div>
      </div>

      {/* Card 3 — component fragment (bottom right) */}
      <div style={{
        position: 'absolute',
        bottom: '6%',
        right: '5%',
        width: '62%',
        background: 'white',
        borderRadius: 12,
        padding: '16px 18px',
        boxShadow: '0 4px 24px rgba(17,15,13,0.07)',
        border: '1px solid rgba(228,224,217,0.7)',
      }}>
        <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.3)', marginBottom: 10 }}>
          Component
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {/* Mock nav bar */}
          <div style={{ height: 24, background: 'var(--surface)', borderRadius: 6, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6 }}>
            {[36, 28, 32].map((w, i) => (
              <div key={i} style={{ height: 4, borderRadius: 2, background: 'var(--border)', width: w }} />
            ))}
          </div>
          {/* Mock content rows */}
          {[80, 65, 90].map((w, i) => (
            <div key={i} style={{ height: 6, background: 'var(--border)', borderRadius: 2, width: `${w}%`, opacity: 0.7 - i * 0.12 }} />
          ))}
          {/* Mock button */}
          <div style={{ marginTop: 4, height: 22, width: 70, background: '#110F0D', borderRadius: 11, opacity: 0.85 }} />
        </div>
      </div>

      {/* Accent dot */}
      <div style={{
        position: 'absolute',
        bottom: '32%',
        left: '20%',
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--accent)',
        opacity: 0.6,
      }} />
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(18px)',
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      style={{
        minHeight: 'clamp(650px, 80vh, 760px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(48px, 6vw, 120px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
      }}
    >
      <div className="wrap" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left — content */}
          <div style={{ maxWidth: 760 }}>
            {/* Eyebrow */}
            <p style={{ ...anim(0), fontSize: 'clamp(17px,1.5vw,21px)', fontWeight: 400, color: 'var(--ink)', marginBottom: 'clamp(18px,2vw,26px)', lineHeight: 1.3 }}>
              Hi, I&apos;m Soundarya 👋
            </p>

            {/* Main heading */}
            <h1
              style={{
                ...anim(120),
                fontSize: 'clamp(40px, 5.2vw, 68px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                color: 'var(--ink)',
                marginBottom: 'clamp(20px,2.5vw,28px)',
              }}
            >
              I design digital products{' '}
              <br className="hidden md:block" />
              that make complexity{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>feel</em> simple.
            </h1>

            {/* Description */}
            <p
              style={{
                ...anim(240),
                fontSize: 'clamp(15px,1.4vw,18px)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: 'var(--ink-2)',
                maxWidth: 560,
                marginBottom: 'clamp(28px,3vw,36px)',
              }}
            >
              Product Designer with 2+ years of experience across B2B applications, enterprise workflows, POS systems, healthcare, and finance — turning complex requirements into clear, usable interfaces.
            </p>

            {/* CTAs */}
            <div style={{ ...anim(360), display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="#work"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0 30px',
                  height: 52,
                  borderRadius: 26,
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '-0.005em',
                  transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1), background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--ink)'; }}
              >
                View My Work →
              </a>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0 30px',
                  height: 52,
                  borderRadius: 26,
                  background: 'transparent',
                  color: 'var(--ink)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '-0.005em',
                  border: '1.5px solid rgba(17,15,13,0.22)',
                  transition: 'border-color 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,15,13,0.22)'; e.currentTarget.style.transform = 'none'; }}
              >
                Let&apos;s Connect →
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div
            style={{ ...anim(480), width: 'clamp(200px, 28vw, 380px)', flexShrink: 0 }}
            className="hero-visual-col"
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual-col { order: -1; width: 100% !important; max-height: 280px; overflow: hidden; display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
