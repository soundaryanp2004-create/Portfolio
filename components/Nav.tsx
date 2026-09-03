import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

const CASE_STUDIES = [
  { name: 'Armada Cash', slug: 'armada-cash' },
  { name: 'Mobile Point-of-Sale System', slug: 'mobile-pos' },
  { name: 'Aasara', slug: 'aasara' },
  { name: 'AstenMeds 2.0', slug: 'astenmeds' },
  { name: 'Abraaj', slug: 'abraaj' },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [csOpen, setCsOpen] = useState(false);
  const [mobileCSOpen, setMobileCSOpen] = useState(false);
  const csRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (csRef.current && !csRef.current.contains(e.target as Node)) setCsOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontSize: '15px', fontWeight: 400, color: 'var(--ink)',
    textDecoration: 'none', letterSpacing: '-0.005em',
    opacity: 0.65, transition: 'opacity 0.2s',
  };

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          height: 'var(--nav-h)',
          background: scrolled ? 'rgba(248,246,242,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div className="wrap" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              Soundarya
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ gap: '40px', alignItems: 'center' }} className="hidden md:flex">
            <Link to="/" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}>
              Home
            </Link>

            {/* Case studies dropdown */}
            <div ref={csRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setCsOpen(v => !v)}
                style={{
                  ...linkStyle, background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 5, padding: 0,
                  opacity: csOpen ? 1 : 0.65,
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => { if (!csOpen) e.currentTarget.style.opacity = '0.65'; }}
              >
                Case studies <ChevronDown open={csOpen} />
              </button>

              {csOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: '6px', minWidth: 240,
                  boxShadow: '0 8px 32px rgba(17,15,13,0.08)',
                  zIndex: 300,
                }}>
                  {CASE_STUDIES.map(cs => (
                    <Link
                      key={cs.slug}
                      to={`/case-study/${cs.slug}`}
                      onClick={() => setCsOpen(false)}
                      style={{
                        display: 'block', padding: '10px 14px',
                        fontSize: '14px', fontWeight: 400, color: 'var(--ink)',
                        textDecoration: 'none', borderRadius: 8,
                        transition: 'background 0.15s',
                        letterSpacing: '-0.005em',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      {cs.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}>
              About
            </Link>
            <a href="/Resume.pdf" download="Resume.pdf" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}>
              Resume
            </a>
            <a href="/#contact" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}>
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', lineHeight: 1 }}
          >
            <span style={{ display: 'block', width: 22, height: '1.5px', background: 'var(--ink)', transition: 'transform 0.22s, opacity 0.22s', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: '1.5px', background: 'var(--ink)', margin: '4px 0', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.22s' }} />
            <span style={{ display: 'block', width: 22, height: '1.5px', background: 'var(--ink)', transition: 'transform 0.22s', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, zIndex: 199,
          display: 'grid', gridTemplateRows: menuOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
          background: 'var(--bg)',
          borderBottom: menuOpen ? '1px solid var(--border)' : 'none',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div className="mobile-menu-inner" style={{ padding: '8px 24px 24px' }}>
            <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: '18px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>Home</Link>

            {/* Mobile Case studies accordion */}
            <div style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setMobileCSOpen(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '14px 0', fontSize: '18px', fontWeight: 400,
                  color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                Case studies <ChevronDown open={mobileCSOpen} />
              </button>
              <div style={{ display: 'grid', gridTemplateRows: mobileCSOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.25s ease' }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ paddingBottom: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {CASE_STUDIES.map(cs => (
                      <Link
                        key={cs.slug}
                        to={`/case-study/${cs.slug}`}
                        onClick={() => { setMenuOpen(false); setMobileCSOpen(false); }}
                        style={{ display: 'block', padding: '8px 12px', fontSize: '15px', fontWeight: 400, color: 'var(--ink-2)', textDecoration: 'none', borderRadius: 6 }}
                      >
                        {cs.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: '18px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>About</Link>
            <a href="/Resume.pdf" download="Resume.pdf" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: '18px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>Resume</a>
            <a href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: '18px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
