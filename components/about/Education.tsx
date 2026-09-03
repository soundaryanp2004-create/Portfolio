import { useInView } from '../../hooks/useInView';

function GradIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill={color} fillOpacity="0.15" />
      <path d="M20 10L30 15.5V18C30 23.5 25.5 28.5 20 30C14.5 28.5 10 23.5 10 18V15.5L20 10Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M20 10L30 15.5M20 10L10 15.5M30 15.5L20 21L10 15.5" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M30 15.5V20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="21" r="1.5" fill={color} />
    </svg>
  );
}

function CertIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill={color} fillOpacity="0.15" />
      <rect x="10" y="12" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M14 17H26M14 21H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="23" cy="27" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M21 30L20 33L23 31.5L26 33L25 30" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function WorkIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill={color} fillOpacity="0.15" />
      <rect x="11" y="16" width="18" height="13" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M15 16V14C15 12.9 15.9 12 17 12H23C24.1 12 25 12.9 25 14V16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 21H29" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 21V23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 21V23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ENTRIES = [
  {
    icon: 'grad',
    color: '#C4607A',
    bg: '#FFF0F3',
    label: 'Education',
    degree: 'B.Design (Interaction Design)',
    institution: 'PES UNIVERSITY',
    period: 'SEPT 2021 – MAY 2025',
    extra: 'CGPA: 8.75',
  },
  {
    icon: 'work',
    color: '#7050C4',
    bg: '#F4F0FF',
    label: 'Work',
    degree: 'Astenlabs',
    institution: '',
    period: 'FEB 2025 – PRESENT',
    extra: '',
  },
];

export default function Education() {
  const { ref, visible } = useInView(0.08);

  return (
    <section style={{ paddingTop: 'clamp(60px,8vw,120px)', paddingBottom: 'clamp(48px,6vw,96px)' }}>
      <div className="wrap">
        <p className={`reveal ${visible ? 'vis' : ''}`}
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'clamp(28px,3vw,44px)' }}>
          Education
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px,2vw,24px)' }} className="edu-grid">
          {ENTRIES.map((e, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'vis' : ''} d${i + 1}`}
              style={{
                background: e.bg,
                borderRadius: 'clamp(14px,1.8vw,22px)',
                padding: 'clamp(28px,3.5vw,44px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {e.icon === 'grad' ? <GradIcon color={e.color} /> : e.icon === 'work' ? <WorkIcon color={e.color} /> : <CertIcon color={e.color} />}
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: e.color }}>
                {e.label}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ fontSize: 'clamp(16px,2vw,22px)', fontWeight: 500, letterSpacing: '-0.015em', color: '#110F0D', lineHeight: 1.2 }}>
                  {e.degree}
                </p>
                {e.institution && (
                  <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, color: 'rgba(17,15,13,0.55)' }}>
                    {e.institution}
                  </p>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: e.color }}>
                  {e.period}
                </p>
                {e.extra && (
                  <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(17,15,13,0.55)' }}>
                    {e.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
