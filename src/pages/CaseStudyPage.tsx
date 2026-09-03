import { useParams, Link } from 'react-router';

const PROJECT_NAMES: Record<string, string> = {
  'armada-cash': 'Armada Cash — Petty Cash Management App',
  'mobile-pos': 'Mobile Point-of-Sale System',
  'aasara': 'Aasara — Funeral Service Coordination Platform',
  'astenmeds': 'AstenMeds 2.0 — Enterprise Medical ERP Platform',
  'abraaj': 'Abraaj',
};

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const projectName = slug ? PROJECT_NAMES[slug] : undefined;

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(60px,8vw,120px) 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 24 }}>
          Case Study
        </p>
        <h1 style={{ fontSize: 'clamp(24px,4vw,48px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--ink)', marginBottom: 24 }}>
          {projectName ?? 'Case Study'}
        </h1>
        <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 40 }}>
          This case study is being prepared. Full content coming soon.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0 24px', height: 44, borderRadius: 22,
            background: 'transparent', color: 'var(--ink)',
            fontSize: '14px', fontWeight: 500, letterSpacing: '-0.005em',
            textDecoration: 'none',
            border: '1.5px solid rgba(17,15,13,0.22)',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(17,15,13,0.22)')}
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}
