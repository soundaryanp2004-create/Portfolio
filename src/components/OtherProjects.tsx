import { useInView } from '../hooks/useInView';
import ProjectMockup from './ProjectMockup';

const OTHER = [
  {
    id: 6,
    title: 'Gastronomica',
    desc: 'A focused digital experience designed to bring the brand, content, and user journey together through a clear and engaging interface.',
    url: 'https://turtle-myrtle-47213440.figma.site/',
  },
  {
    id: 7,
    title: 'Virtual AI',
    desc: 'An AI-powered digital experience focused on creating a simple, intuitive interaction between users and intelligent tools.',
    url: 'https://dress-demo-ai.lovable.app',
  },
  {
    id: 8,
    title: 'Asten Pods',
    desc: 'Designed a sustainable washing pod packaging system that improves shelf appeal, clearly communicates product benefits, and connects with eco-conscious consumers through a premium, functional visual identity.',
    url: 'https://floral-static-21674226.figma.site/',
  },
];

function OtherCard({ project, index }: { project: typeof OTHER[0]; index: number }) {
  const { ref, visible } = useInView(0.08);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? 'vis' : ''} d${index + 1}`}
      style={{
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(16px,2vw,24px)',
        padding: 'clamp(24px,3vw,40px)',
        minWidth: 0,
      }}
    >
      {/* Image */}
      <div style={{
        borderRadius: 'clamp(8px,1.2vw,14px)',
        overflow: 'hidden',
        background: '#F0EDE7',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.018)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
      >
        <ProjectMockup id={project.id} />
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <h3 style={{
          fontSize: 'clamp(16px,1.6vw,20px)',
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          color: '#110F0D',
          margin: 0,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: 'clamp(13px,1.1vw,14px)',
          fontWeight: 400,
          lineHeight: 1.65,
          color: 'rgba(17,15,13,0.55)',
          margin: 0,
        }}>
          {project.desc}
        </p>
      </div>

      {/* CTA */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '-0.005em',
          color: 'rgba(17,15,13,0.45)',
          textDecoration: 'none',
          transition: 'color 0.2s',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#110F0D')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,15,13,0.45)')}
      >
        View project →
      </a>
    </div>
  );
}

export default function OtherProjects() {
  const { ref, visible } = useInView(0.1);

  return (
    <section style={{ paddingBottom: 'clamp(60px,8vw,120px)' }}>
      <div className="wrap">
        {/* Section label */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${visible ? 'vis' : ''}`}
          style={{
            paddingBottom: 'clamp(20px,2.5vw,32px)',
            borderBottom: '1px solid var(--border)',
            marginBottom: 0,
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Other Projects
          </p>
        </div>

        {/* Cards row */}
        <div
          style={{
            display: 'flex',
            border: '1px solid var(--border)',
            borderTop: 'none',
            borderRadius: '0 0 clamp(14px,1.8vw,20px) clamp(14px,1.8vw,20px)',
            overflow: 'hidden',
            background: 'white',
          }}
          className="op-row"
        >
          {OTHER.map((project, i) => (
            <div
              key={project.id}
              style={{
                flex: '1 1 0',
                display: 'flex',
                minWidth: 0,
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              }}
              className="op-col"
            >
              <OtherCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
