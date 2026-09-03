import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const PHONE = '+91 7871080235';
const EMAIL = 'soundarya.np2004@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/soundarya-padmanaban-979b59269/';
const BEHANCE = 'https://www.behance.net/soundarpadmana1';

function AbstractIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="100" fill="#F5EBE3" fillOpacity="0.6" />
      <ellipse cx="90" cy="100" rx="50" ry="55" fill="#FDDDE5" fillOpacity="0.55" />
      <ellipse cx="155" cy="115" rx="48" ry="50" fill="#E8E0FF" fillOpacity="0.5" />
      <ellipse cx="120" cy="148" rx="46" ry="38" fill="#D4F0E8" fillOpacity="0.5" />
      <circle cx="120" cy="112" r="32" fill="white" fillOpacity="0.75" />
      <text x="120" y="125" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui" fontSize="32" fontWeight="300" letterSpacing="-2" fill="#110F0D" fillOpacity="0.55">S</text>
      <circle cx="68" cy="68" r="5" fill="#C4607A" fillOpacity="0.35" />
      <circle cx="175" cy="72" r="4" fill="#7050C4" fillOpacity="0.35" />
      <circle cx="162" cy="172" r="6" fill="#3A8C6E" fillOpacity="0.3" />
      <circle cx="78" cy="160" r="4" fill="#B06535" fillOpacity="0.3" />
    </svg>
  );
}

function ContactLink({
  href,
  label,
  tooltip,
  external,
  primary,
}: {
  href: string;
  label: string;
  tooltip?: string;
  external?: boolean;
  primary?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {tooltip && hovered && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--ink)',
          color: 'white',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.04em',
          padding: '4px 10px',
          borderRadius: 6,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          {tooltip}
        </div>
      )}
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 26px',
          height: 48,
          borderRadius: 24,
          background: primary ? 'var(--ink)' : 'transparent',
          color: primary ? 'white' : 'var(--ink)',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '-0.005em',
          border: primary ? 'none' : '1.5px solid rgba(17,15,13,0.18)',
          textDecoration: 'none',
          transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
          whiteSpace: 'nowrap',
        }}
  onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {label}
      </a>
    </div>
  );
}

export default function Contact() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="contact" style={{ paddingTop: 'clamp(60px,8vw,120px)', paddingBottom: 0 }}>
      <div className="wrap">
        {/* Let's connect panel */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal lc-panel ${visible ? 'vis' : ''}`}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'clamp(16px,2vw,28px)',
            padding: 'clamp(36px,5vw,72px)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(32px,4vw,64px)',
            alignItems: 'center',
            background: 'white',
            marginBottom: 0,
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

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <ContactLink
                href={`tel:+917871080235`}
                label="Phone →"
                tooltip="Contact"
                primary
              />
              <ContactLink
                href={`mailto:${EMAIL}`}
                label="Email →"
                tooltip="Contact"
              />
              <ContactLink
                href={LINKEDIN}
                label="LinkedIn →"
                external
              />
              <ContactLink
                href={BEHANCE}
                label="Behance →"
                external
              />
            </div>
          </div>

          {/* Right — illustration */}
          <div style={{ flexShrink: 0 }}>
            <AbstractIllustration />
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 'clamp(24px,3vw,36px)',
          paddingBottom: 'clamp(24px,3vw,36px)',
          marginTop: 'clamp(40px,5vw,64px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(16px,2.5vw,32px)',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Soundarya</span>
            <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3)' }}>Product Designer</span>
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(14px,2vw,28px)' }}>
            {[
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#about' },
              { label: 'Resume', href: '#' },
              { label: 'Contact', href: '#contact' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,1.5vw,20px)' }}>
            {[
              { label: 'Email', href: `mailto:${EMAIL}` },
              { label: 'LinkedIn', href: LINKEDIN },
              { label: 'Behance', href: BEHANCE },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-3)')}>
                {l.label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3)' }}>© 2026</p>
        </footer>
      </div>
    </section>
  );
}
