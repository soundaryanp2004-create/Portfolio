import { Link } from 'react-router';

const CASE_STUDIES = [
  { slug: 'armada-cash', name: 'Armada Cash' },
  { slug: 'mobile-pos', name: 'Mobile POS' },
  { slug: 'aasara', name: 'Aasara' },
  { slug: 'astenmeds', name: 'AstenMeds 2.0' },
  { slug: 'abraaj', name: 'Abraaj' },
];

interface Props {
  currentSlug: string;
}

export default function CaseStudyPrevNext({ currentSlug }: Props) {
  const idx = CASE_STUDIES.findIndex(cs => cs.slug === currentSlug);
  const prev = idx > 0 ? CASE_STUDIES[idx - 1] : null;
  const next = idx < CASE_STUDIES.length - 1 ? CASE_STUDIES[idx + 1] : null;

  const linkStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '10px 20px', borderRadius: 8,
    border: '1px solid #E4E0D9',
    fontSize: '14px', fontWeight: 500,
    color: '#110F0D', textDecoration: 'none',
    background: 'white',
    transition: 'border-color 0.2s, background 0.2s',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  return (
    <div className="cs-nav-row" style={{
      borderTop: '1px solid #E4E0D9',
      padding: 'clamp(24px,4vw,48px) clamp(20px,3vw,32px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      background: '#F8F6F2',
      maxWidth: 1152,
      margin: '0 auto',
      width: '100%',
    }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        {prev && (
          <Link
            to={`/case-study/${prev.slug}`}
            style={linkStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#110F0D'; e.currentTarget.style.background = '#F0EDE7'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E0D9'; e.currentTarget.style.background = 'white'; }}
          >
            ← {prev.name}
          </Link>
        )}
      </div>

      <Link
        to="/#work"
        style={{ ...linkStyle, color: 'rgba(17,15,13,0.55)', border: 'none', background: 'transparent', fontSize: '13px' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#110F0D'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(17,15,13,0.55)'; }}
      >
        All projects
      </Link>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {next && (
          <Link
            to={`/case-study/${next.slug}`}
            style={linkStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#110F0D'; e.currentTarget.style.background = '#F0EDE7'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E0D9'; e.currentTarget.style.background = 'white'; }}
          >
            {next.name} →
          </Link>
        )}
      </div>
    </div>
  );
}
