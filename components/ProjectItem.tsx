import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import ProjectMockup from './ProjectMockup';
import { Link } from 'react-router';

export interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  overview: string;
  role: string;
  tagline?: string;
  badge?: string;
  problem?: string;
  approach?: string;
  areas?: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
  layout?: 'text-left' | 'visual-left' | 'full-width';
}

interface Props {
  project: Project;
}

const CARD_PALETTE: Record<number, { bg: string; labelColor: string }> = {
  1: { bg: '#FDEEEB', labelColor: '#A84B35' },
  2: { bg: '#EBF0FD', labelColor: '#2D4FBD' },
  3: { bg: '#EEEBFD', labelColor: '#5639B8' },
  4: { bg: '#E9F6F0', labelColor: '#246B52' },
  5: { bg: '#F3EFE8', labelColor: '#7A6D55' },
};

function CategoryPill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'rgba(17,15,13,0.45)',
      padding: '4px 10px', border: '1px solid rgba(17,15,13,0.12)',
      borderRadius: 20, whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

export default function ProjectItem({ project }: Props) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView(0.08);
  const palette = CARD_PALETTE[project.id] ?? CARD_PALETTE[5];
  const hasDetail = !!(project.problem || project.areas || project.approach);

  /* Single CTA — prefer case study page, fall back to live project URL */
  const ctaHref = project.caseStudyUrl ?? project.projectUrl;
  const ctaIsExternal = !project.caseStudyUrl && !!project.projectUrl;

  return (
    <article ref={ref as React.RefObject<HTMLDivElement>}>
      <div
        className={`reveal ${visible ? 'vis' : ''}`}
        style={{
          background: palette.bg,
          borderRadius: 'clamp(16px,2vw,28px)',
          padding: 'clamp(32px,4.5vw,64px)',
          overflow: 'hidden',
        }}
      >
        {/* Main grid: text left, visual right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px,4vw,64px)',
            alignItems: 'center',
            minHeight: 'clamp(280px,30vw,420px)',
          }}
          className="fc-grid"
        >
          {/* LEFT — text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,1.8vw,24px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: palette.labelColor }}>
                {project.number}
              </span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(17,15,13,0.2)', flexShrink: 0 }} />
              {project.category.split(' · ').filter(c => c !== '—').slice(0, 2).map(cat => (
                <CategoryPill key={cat}>{cat}</CategoryPill>
              ))}
              {project.badge && <CategoryPill>{project.badge}</CategoryPill>}
            </div>

            <h2 style={{ fontSize: 'clamp(22px,2.8vw,38px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#110F0D', margin: 0 }}>
              {project.title}
            </h2>
            {project.tagline && (
              <p style={{ fontSize: 'clamp(15px,1.6vw,20px)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.2, color: 'rgba(17,15,13,0.5)', margin: 0, marginTop: -8 }}>
                {project.tagline}
              </p>
            )}

            <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 400, lineHeight: 1.75, color: 'rgba(17,15,13,0.58)', margin: 0, maxWidth: 440 }}>
              {project.overview}
            </p>

            <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', color: 'rgba(17,15,13,0.4)', margin: 0 }}>
              {project.role}
            </p>

            {/* Single CTA */}
            {ctaHref && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
                {ctaIsExternal ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '0 22px', height: 44, borderRadius: 22,
                      background: '#110F0D', color: '#F8F6F2',
                      fontSize: '13px', fontWeight: 500, letterSpacing: '-0.005em',
                      textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = palette.labelColor; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#110F0D'; e.currentTarget.style.transform = 'none'; }}
                  >
                    View project
                  </a>
                ) : (
                  <Link
                    to={ctaHref}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '0 22px', height: 44, borderRadius: 22,
                      background: '#110F0D', color: '#F8F6F2',
                      fontSize: '13px', fontWeight: 500, letterSpacing: '-0.005em',
                      textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = palette.labelColor; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#110F0D'; e.currentTarget.style.transform = 'none'; }}
                  >
                    View project
                  </Link>
                )}

                {hasDetail && (
                  <button
                    onClick={() => setOpen(v => !v)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: 'rgba(17,15,13,0.4)',
                      padding: 0, transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = palette.labelColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,15,13,0.4)')}
                  >
                    {open ? 'View less ↑' : 'View more'}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — visual */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} className="fc-visual">
            <div
              style={{ width: '100%', borderRadius: 'clamp(8px,1.2vw,16px)', overflow: 'hidden', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.018)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              <ProjectMockup id={project.id} />
            </div>
          </div>
        </div>

        {/* Expandable detail — inside the card */}
        {hasDetail && (
          <div style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.55s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                paddingTop: 'clamp(24px,3vw,40px)',
                borderTop: '1px solid rgba(17,15,13,0.08)',
                marginTop: 'clamp(24px,3vw,40px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'clamp(20px,2.5vw,40px)',
              }}>
                {project.problem && (
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.35)', marginBottom: 12 }}>Problem</p>
                    <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: 'rgba(17,15,13,0.55)' }}>{project.problem}</p>
                  </div>
                )}
                {project.areas && project.areas.length > 0 && (
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.35)', marginBottom: 12 }}>Key Areas</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                      {project.areas.map(a => (
                        <li key={a} style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.55, color: 'rgba(17,15,13,0.55)', display: 'flex', gap: 10 }}>
                          <span style={{ color: palette.labelColor, flexShrink: 0 }}>—</span>{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,15,13,0.35)', marginBottom: 12 }}>Approach</p>
                    <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.8, color: 'rgba(17,15,13,0.55)' }}>{project.approach}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

    </article>
  );
}
