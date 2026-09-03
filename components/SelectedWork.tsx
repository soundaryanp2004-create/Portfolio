import ProjectItem, { type Project } from './ProjectItem';

const PROJECTS: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Armada Cash — Petty Cash Management App',
    category: 'Finance · Business Operations · B2B',
    overview: 'A petty cash management product designed to replace fragmented spreadsheet and paper-based tracking with a more structured digital expense management experience.',
    role: 'UX/UI Designer',
    layout: 'text-left',
    problem: 'Small and mid-sized businesses were managing petty cash through spreadsheets, paper receipts, and informal tracking — causing chronic reconciliation errors, unauthorized spending, and hours of manual bookkeeping per month.',
    areas: [
      'Role-based dashboards for submitters, approvers, and finance admins',
      'One-tap expense submission with receipt capture',
      'Real-time fund balance tracking with visual indicators',
      'Approval pipeline with contextual notifications',
      'Audit log, filtering, and export for administrators',
    ],
    approach: 'Designed around three distinct user groups — each with a tailored experience. Balanced frictionless submitter flows with robust finance admin controls.',
    projectUrl: 'https://petty-cash-management-26.netlify.app/',
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile Point-of-Sale System',
    category: 'Retail · POS · B2B',
    overview: 'A mobile POS experience designed to give retail teams greater flexibility to process transactions beyond fixed checkout locations.',
    role: 'UX/UI Designer',
    layout: 'visual-left',
    problem: "Businesses were constrained to fixed checkout locations, limiting operational flexibility and causing revenue loss during peak hours. Mobile staff couldn't process floor transactions.",
    areas: [
      'Progressive disclosure to reduce cognitive load on mobile',
      'Adaptive layouts across phones and tablets',
      'Simplified complex POS functionality for mobile',
      'Customizable widgets for different user personas',
      'Contextual help patterns',
    ],
    approach: 'Progressive disclosure and clear visual hierarchy kept the experience manageable on small screens. Adaptive components adjusted across compact phones, larger handsets, and tablets in both orientations.',
    projectUrl: 'https://file-rice-69785001.figma.site/',
  },
  {
    id: 3,
    number: '03',
    title: 'Aasara — Funeral Service Coordination Platform',
    category: 'Service Design · Personal Project',
    badge: 'Personal Project',
    overview: 'A service platform designed to simplify and coordinate essential funeral arrangements through a single, structured booking experience.',
    role: 'Individual Product Designer',
    layout: 'full-width',
    problem: 'During a difficult and time-sensitive situation, families must coordinate multiple services separately — without clear guidance or a unified experience.',
    areas: [
      'Structured service discovery and package selection',
      'Add-on selection and payment flow',
      'Booking confirmation and service tracking',
      'Calm, respectful visual design language',
    ],
    approach: 'Discover → Package → Add-ons → Payment → Confirm → Track. The interface prioritises clarity and reduced decision fatigue in an emotionally sensitive context.',
    projectUrl: 'https://aasara.lovable.app',
  },
  {
    id: 4,
    number: '04',
    title: 'AstenMeds 2.0 — Enterprise Medical ERP Platform',
    category: 'Enterprise Healthcare · Medical ERP · B2B',
    overview: 'A large-scale medical ERP redesign bringing multiple healthcare business workflows into a more cohesive and scalable product experience.',
    role: 'UX/UI Designer',
    layout: 'visual-left',
    problem: "A fragmented, outdated system couldn't scale with growing demands. 200+ disconnected screens created confusion across POS, inventory, purchasing, customer relations, and reporting.",
    areas: [
      'Modular navigation across interconnected ERP modules',
      'Intelligent search and filtering across data-heavy tables',
      'Role-based dashboards with relevant KPIs',
      'Consistent patterns: bulk actions, inline editing, keyboard shortcuts',
      'Data visualization for reporting',
    ],
    approach: 'Modular navigation allowed context-preserving movement across modules. A reusable design system established consistency across 200+ screens.',
    projectUrl: 'https://www.figma.com/proto/EIf6lOvs7GQuE4wywc4ra9/MEDS2.0?page-id=2041%3A121568&node-id=2041-132172&viewport=1506%2C107%2C0.04&t=TfZA7PopOLsHT6jF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2041%3A132172',
  },
  {
    id: 5,
    number: '05',
    title: 'Abraaj',
    tagline: 'Simplifying Complex Journeys',
    category: 'Service Design Redesign',
    overview: 'A streamlined digital experience designed to make complex service journeys clearer, simpler, and easier to navigate.',
    role: 'Product Designer',
    problem: 'Simplifying a complex service journey and making information, tasks, and next steps easier for users to understand and navigate.',
    areas: [
      'User experience, information architecture, workflow simplification, interaction design, and creating a clearer end-to-end service journey.',
    ],
    approach: 'Understand the existing journey, identify friction and complexity, structure the experience around user needs, and design a clearer and more connected flow.',
    projectUrl: 'https://www.figma.com/proto/djD3cpDEQABA9wN81UNz6D/Abraaj?node-id=410-8038&p=f&viewport=921%2C66%2C0.02&t=ZxsRYazT5FDTIb7v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=410%3A8038&show-proto-sidebar=1&page-id=61%3A827',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" style={{ paddingTop: 'clamp(60px,8vw,120px)', paddingBottom: 'clamp(48px,6vw,80px)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,24px)' }}>
          {PROJECTS.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
