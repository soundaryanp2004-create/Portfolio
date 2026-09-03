import { Link } from 'react-router';

const CASE_STUDIES = [
  { name: 'Armada Cash', slug: 'armada-cash' },
  { name: 'Mobile POS System', slug: 'mobile-pos' },
  { name: 'Aasara', slug: 'aasara' },
  { name: 'AstenMeds 2.0', slug: 'astenmeds' },
  { name: 'Abraaj', slug: 'abraaj' },
];

const linkStyle: React.CSSProperties = {
  fontSize: '13px', fontWeight: 400, color: 'rgba(17,15,13,0.5)',
  textDecoration: 'none', transition: 'color 0.2s', display: 'block',
  padding: '3px 0',
};

export default function AboutFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      paddingTop: 'clamp(40px,5vw,64px)',
      paddingBottom: 'clamp(40px,5vw,64px)',
    }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 'clamp(32px,4vw,56px)',
          marginBottom: 'clamp(32px,4vw,48px)',
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 4 }}>Soundarya</p>
            <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3)' }}>Product Designer</p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Services', to: '#' }, { label: 'Resume', to: '#' }].map(l => (
                <Link key={l.label} to={l.to} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,15,13,0.5)')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>Case Studies</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {CASE_STUDIES.map(cs => (
                <Link key={cs.slug} to={`/case-study/${cs.slug}`} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,15,13,0.5)')}>
                  {cs.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Elsewhere */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>Elsewhere</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Medium', href: 'https://medium.com' },
                { label: 'Spotify', href: 'https://spotify.com' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,15,13,0.5)')}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
          <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3)' }}>
            © 2026 Soundarya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
