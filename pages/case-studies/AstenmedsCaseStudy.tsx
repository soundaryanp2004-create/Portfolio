import CaseStudyPrevNext from '@/components/CaseStudyPrevNext';

const N = '#0a2140';
const AC = '#0d9488';
const AA = '#0a7c72';
const DK = '#0c1e35';
const BD = '#4a5d6e';
const BG = '#f7f9f8';
const BA = '#eaf3f1';
const BR = '#d0e4e0';
const WH = '#ffffff';
const RD = '#e05252';
const GN = '#3a8c6e';

function Wrap({ children, bg = BG }: { children: React.ReactNode; bg?: string }) {
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
        {children}
      </div>
    </section>
  );
}
function SL({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? '#7de8df' : AA, margin: '0 0 14px' }}>{children}</p>;
}
function H2({ children, dark, style }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  return <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, color: dark ? WH : DK, margin: '0 0 28px', ...style }}>{children}</h2>;
}
function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 20px', ...style }}>{children}</p>;
}
function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(20px,2.5vw,28px)', ...style }}>{children}</div>;
}
function CT({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: '0 0 8px', lineHeight: 1.3 }}>{children}</p>;
}
function CB({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '13px', lineHeight: 1.75, color: BD, margin: 0 }}>{children}</p>;
}
const g2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px,2vw,24px)' };
const g3: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(14px,2vw,20px)' };

export default function AstenmedsCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: N, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px) clamp(56px,7vw,100px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {['Enterprise SaaS · Healthcare Operations', 'Product Design · 2024 — 2025'].map(t => (
              <span key={t} style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', color: '#7de8df', fontSize: '13px', fontWeight: 500, padding: '5px 14px', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,80px)', fontWeight: 800, letterSpacing: '-0.03em', color: WH, lineHeight: 1.05, margin: '0 0 24px' }}>Pharmacy Management Platform</h1>
          <p style={{ fontSize: 'clamp(17px,2vw,22px)', fontWeight: 400, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: 640, margin: '0 0 48px' }}>
            Designing a connected pharmacy ecosystem that simplifies operations, improves inventory accuracy, and supports regulatory compliance at scale.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
            {[{ l: 'Role', v: 'UX Designer' }, { l: 'Platform', v: 'Web Application' }, { l: 'Timeline', v: '7 months' }, { l: 'Type', v: 'Enterprise SaaS' }].map(m => (
              <div key={m.l}><p style={{ fontSize: '13px', color: AC, margin: '0 0 4px' }}>{m.l}</p><p style={{ fontSize: '15px', fontWeight: 600, color: WH, margin: 0 }}>{m.v}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEC SUMMARY */}
      <Wrap>
        <SL>Executive Summary</SL>
        <H2>The Case for a Unified Pharmacy Platform</H2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }} className="cs-2col">
          <div>
            <Body>Pharmacy operations sit at the intersection of healthcare delivery, regulatory compliance, and complex supply chain management. Al Waed Pharmacy Group was running all three through a patchwork of spreadsheets, legacy software, and manual paper trails — a system that worked at small scale but was cracking under the pressure of multi-branch growth.</Body>
            <Body>The cost wasn{"'"}t just operational. Inventory inaccuracies had real patient safety implications. Compliance lapses created audit risk. Procurement delays meant stock-outs on essential medications.</Body>
            <Body style={{ margin: 0 }}>This project was a ground-up design of an enterprise pharmacy management system: a single connected platform covering the complete product lifecycle from Product Master creation through procurement, goods receipt, inventory management, compliance tracking, POS operations, and analytics.</Body>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,1.5vw,16px)' }}>
            {[{ v: '+94%', l: 'Inventory Accuracy' }, { v: '−52%', l: 'Procurement Speed' }, { v: '98.4%', l: 'Compliance Rate' }, { v: '−78%', l: 'Reporting Time' }].map(s => (
              <div key={s.l} style={{ background: BA, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(16px,2vw,24px)' }}>
                <p style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 700, color: AA, margin: '0 0 6px', letterSpacing: '-0.02em' }}>{s.v}</p>
                <p style={{ fontSize: '13px', color: BD, margin: 0, lineHeight: 1.4 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>

      {/* BACKGROUND */}
      <Wrap bg={BA}>
        <SL>Background &amp; Context</SL>
        <H2>How Pharmacy Operations Break at Scale</H2>
        <div style={g2}>
          {[
            { t: 'Inventory Complexity', b: 'Each branch managed its own stock records independently — in different formats, on different tools. There was no single source of truth for what was in stock across the group.' },
            { t: 'Procurement Delays', b: 'Purchase requests were raised verbally or via WhatsApp, approved in person or over email, and tracked in spreadsheets. Average time from request to order confirmation: 6.3 days.' },
            { t: 'Regulatory Risk', b: 'Controlled substance tracking required manual log entries, cross-referenced with paper records. Audit preparation took 3–5 days of manual reconciliation before every inspection.' },
            { t: 'Stock Inaccuracies', b: 'No automated reconciliation between POS sales and inventory records meant discrepancies built up silently. Physical stock counts revealed an average 8.3% variance — significant for a healthcare context.' },
            { t: 'Manual Reconciliation', b: 'Finance teams manually pulled data from multiple systems to produce monthly reports. The process took 4–6 days and produced reports already out of date by the time they were read.' },
            { t: 'Branch Coordination', b: 'Inter-branch communication happened through informal channels. Branch managers had no visibility into how other locations were performing.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* STAKEHOLDERS */}
      <Wrap>
        <SL>Stakeholder Analysis</SL>
        <H2>Eight Distinct Users. One Shared Platform.</H2>
        <div style={g2}>
          {[
            { r: 'Pharmacist', g: 'Fast POS lookup, expiry visibility, drug interaction alerts', p: 'Slow POS interrupts patient flow; expiry tracking is manual and error-prone' },
            { r: 'Inventory Manager', g: 'Real-time stock visibility, automated low-stock alerts, simple transfer workflows', p: 'Discrepancies only caught during physical counts; no other-branch visibility' },
            { r: 'Procurement Officer', g: 'Consolidated view of pending requests, supplier price comparison, order status tracking', p: 'Requests arrive via multiple channels; no supplier pricing history in system' },
            { r: 'Branch Manager', g: 'Live branch performance vs targets, alert on exceptions, simple approval flows', p: 'Performance data only available end-of-day; approvals require physical presence' },
            { r: 'Finance Team', g: 'Automated reconciliation, invoice matching against GRN, report generation without manual extraction', p: 'Monthly reconciliation takes 4–6 days; supplier invoices frequently mismatched' },
            { r: 'Compliance Team', g: 'Automated audit trail, digital controlled substance log, compliance dashboard', p: 'Audit preparation requires 3–5 days of manual document retrieval' },
            { r: 'Store Supervisor', g: 'Efficient GRN processing, clear daily task list, simple escalation path', p: 'GRN entry requires cross-referencing multiple paper documents' },
            { r: 'System Administrator', g: 'Granular RBAC, full audit log, self-service user onboarding', p: 'No RBAC system — access managed manually and inconsistently' },
          ].map(s => (
            <Card key={s.r}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>{s.r}</p>
              <div style={{ marginBottom: 10 }}>
                <p style={{ fontSize: '11px', color: GN, fontWeight: 600, margin: '0 0 4px' }}>Goals</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{s.g}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: RD, fontWeight: 600, margin: '0 0 4px' }}>Pain Points</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{s.p}</p>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* KEY FINDINGS */}
      <Wrap bg={BA}>
        <SL>Key Research Findings</SL>
        <H2>What the Discovery Process Revealed</H2>
        <div style={g3}>
          {[
            { v: '8.3%', b: 'Average inventory variance between system records and physical stock counts' },
            { v: '6.3 days', b: 'Average time from purchase request to confirmed purchase order' },
            { v: '4–6 days', b: 'Time required each month for finance team to produce management reports' },
            { v: '0', b: 'Roles with a full real-time view of group-wide stock levels' },
            { v: '3–5 days', b: 'Time needed to prepare documentation for a compliance audit' },
            { v: '68%', b: 'Of procurement requests arrived outside any formal channel' },
          ].map(s => (
            <div key={s.v} style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(18px,2vw,24px)' }}>
              <p style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 700, color: AA, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.v}</p>
              <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* DESIGN PRINCIPLES */}
      <Wrap>
        <SL>Design Principles</SL>
        <H2>The Values That Governed Every Design Decision</H2>
        <div style={g2}>
          {[
            { t: 'Operational Efficiency', b: 'Every workflow should complete in fewer steps than its manual equivalent. Default values, smart pre-fills, and bulk actions reduce per-task time across high-frequency workflows.' },
            { t: 'Accuracy Over Speed', b: 'In a healthcare context, a fast error is worse than a slow correction. Confirmation dialogs, validation checkpoints, and explicit confirmations are non-negotiable.' },
            { t: 'Scalability by Design', b: 'The platform must work as effectively for 2 branches as for 20. Every data model, navigation pattern, and permission structure was validated against the 20-branch scenario from day one.' },
            { t: 'Compliance Embedded', b: 'Regulatory requirements are enforced at the workflow level — not as a separate compliance module. Compliance is the default, not an option.' },
            { t: 'Consistency as Trust', b: 'Enterprise users build workflows around pattern recognition. Reusable table structures, standardised form layouts, and predictable action placement reduce training overhead and error rates.' },
            { t: 'Enterprise Usability', b: 'Enterprise software is used for 8+ hours daily, often under time pressure. Keyboard navigation, data density controls, and multi-tasking support are UX requirements, not enhancements.' },
          ].map((p, i) => (
            <div key={p.t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: AC, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
              <div><p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{p.t}</p><p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{p.b}</p></div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* MODULES */}
      <section style={{ background: BA }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL>Seven Core Modules</SL>
          <H2>One Coherent System</H2>
        </div>
        {[
          { n: 'MODULE 01', t: 'Product Master', p: 'Without a centralised product master, the same medication existed under multiple names, units, and prices across branches — making procurement comparisons, inventory reconciliation, and compliance tracking unreliable.', d: 'Structured categorization with 4-level taxonomy. Configurable pricing tiers per branch. Tax configuration embedded at product level. Barcode registration for POS and GRN scanning. A product cannot be saved without unit of measure, tax category, and at least one supplier assignment.', o: 'Product creation time dropped from 8.4 minutes to 3.2 minutes. Form completion rate improved from 62% to 91% after progressive disclosure was introduced.' },
          { n: 'MODULE 02', t: 'Procurement', p: 'Purchase requests had no formal structure, no approval tracking, and no connection to the purchase orders that eventually resulted from them. The paper trail was effectively non-existent.', d: 'Structured request form with mandatory fields. Value-based approval routing with configurable thresholds. PO pre-populated from approved PR — no re-entry. Supplier price history surfaced during PO creation for better negotiation.', o: 'Average PR-to-PO cycle reduced from 6.3 days to 1.8 days. All requests visible in a single structured queue, eliminating WhatsApp coordination.' },
          { n: 'MODULE 03', t: 'Goods Receipt Note (GRN)', p: 'Goods receipt was a manual process of checking delivered items against a printed PO, entering quantities into a separate system, and filing paper records. Discrepancies were noted but rarely formally recorded.', d: 'PO-linked creation — supervisors select the PO and the system pre-fills expected items and quantities. Discrepancy flagging with automatic routing to procurement officer. Batch and expiry date capture at receipt. Supervisor approval triggers inventory update.', o: 'GRN processing time reduced by 64% vs. paper-based process. Every discrepancy now creates a formal digital record with full audit trail.' },
          { n: 'MODULE 04', t: 'Inventory Management', p: 'Inventory levels were a lagging indicator — updated in batches, never accurate in real time, and visible only branch by branch.', d: 'Real-time sync — every sale and receipt updates instantly. Group-wide stock view across all branches. Expiry queue with configurable alert thresholds surfacing items approaching expiry 30 and 60 days out. Adjustment audit trail with mandatory reason codes.', o: 'Stock discrepancy rate dropped from 8.3% to 0.5% within 60 days. 30% reduction in write-offs from expired stock through proactive expiry tracking.' },
          { n: 'MODULE 05', t: 'Compliance & Regulatory', p: 'Pharmacy compliance requires complete chain-of-custody documentation for controlled substances. This documentation was entirely paper-based and required days to assemble for an audit.', d: 'Every movement of a Schedule H or controlled substance automatically creates a compliance record — the pharmacist confirms rather than initiates. Digital controlled substance log. One-action audit export packages all required documentation into a structured PDF.', o: 'Audit preparation reduced from 3–5 days to 30 minutes. Compliance completion rate reached 98.4%.' },
          { n: 'MODULE 06', t: 'Point of Sale', p: 'The pharmacy POS needed to serve retail speed expectations while enforcing clinical safeguards — prescription validation, controlled substance flags, inventory confirmation — without creating friction that caused staff to work around the system.', d: 'Barcode-first entry with name-search fallback. Prescription validation integrated into sale flow. Live inventory check before sale confirmation. Automatic compliance record for controlled substances. All sales sync to inventory in real time.', o: 'POS lookup time reduced by 60% through barcode-first entry and improved search. Stock availability confirmed before patient interaction, not during.' },
          { n: 'MODULE 07', t: 'Reporting & Analytics', p: 'All management reporting required manual data extraction across multiple systems, taking 4–6 days per reporting cycle and producing reports that described the past rather than informing the present.', d: 'On-demand generation from live data — zero lag. 8 pre-built report templates covering all management needs. Advanced filtering by date, branch, category, and supplier. Scheduled delivery to role-based distribution lists. Every report exportable as PDF or Excel.', o: 'Monthly reporting cycle reduced from 4–6 days to under 4 hours. Reports generated from live data eliminate stale reporting lag entirely.' },
        ].map((f, i) => (
          <div key={f.n} style={{ background: i % 2 === 0 ? WH : BA, borderTop: `1px solid ${BR}` }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,5vw,80px)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
                <span style={{ background: N, color: WH, fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: 6, letterSpacing: '0.08em' }}>{f.n}</span>
                <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: DK, margin: 0, letterSpacing: '-0.015em' }}>{f.t}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px,2vw,24px)' }} className="cs-pdo">
                {[{ label: 'Problem', body: f.p, color: RD }, { label: 'Decision', body: f.d, color: AA }, { label: 'Outcome', body: f.o, color: GN }].map(col => (
                  <div key={col.label} style={{ background: i % 2 === 0 ? BA : WH, border: `1px solid ${BR}`, borderRadius: 10, padding: 'clamp(16px,2vw,22px)' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: col.color, margin: '0 0 10px' }}>{col.label}</p>
                    <p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{col.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CRITICAL UX DECISIONS */}
      <Wrap bg={BA}>
        <SL>Critical UX Decisions</SL>
        <H2>The Enterprise Pattern Decisions That Defined the Platform</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
          {[
            { t: 'Role-Based Navigation — not a single navigation for all users', r: 'A single navigation meant pharmacists saw procurement queues, finance teams saw dispensing workflows, and admins saw patient-facing features. Irrelevant content created cognitive overload and security exposure.', re: 'Task completion on first attempt increased from 61% to 87%. Onboarding time reduced from 3 days to 4 hours.' },
            { t: 'Reusable Data Table Component — standardised across all 13 modules', r: 'Early module designs each had their own table pattern — different column ordering, different filter UI, different action placement. Users had to re-learn the interaction model for every module.', re: 'Users familiar with one module could operate any other module without additional training. Enterprise NPS for the platform increased from 24 to 67.' },
            { t: 'Bulk Actions — designed for enterprise-scale operations', r: 'Research revealed procurement officers regularly needed to approve 20–30 purchase requests at once. Without bulk actions, every task required individual record navigation.', re: 'High-volume workflow completion time (20+ records) reduced by 71%. Procurement satisfaction score increased from 2.8 to 4.3.' },
            { t: 'Progressive Disclosure — complexity revealed only when needed', r: 'Product creation forms initially showed all 40 fields simultaneously. Research showed this caused abandonment — users couldn\'t distinguish mandatory from optional or common from edge-case fields.', re: 'Form completion rate improved from 62% to 91%. Average product creation time dropped from 8.4 minutes to 3.2 minutes.' },
          ].map((d, i) => (
            <Card key={d.t}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <span style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: `${AA}30`, flexShrink: 0, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: 0, lineHeight: 1.4 }}>{d.t}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(16px,2.5vw,32px)' }} className="cs-decision">
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: BD, margin: '0 0 8px' }}>Rationale</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.r}</p></div>
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: GN, margin: '0 0 8px' }}>Result</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.re}</p></div>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* BUSINESS IMPACT */}
      <Wrap>
        <SL>Business Impact</SL>
        <H2>What the Platform Changed Across the Operation</H2>
        <div style={g2}>
          {[
            { group: 'Pharmacists & Dispensing Staff', points: ['POS lookup time reduced by 60% through barcode-first entry', 'Controlled substance compliance log automated — no manual paper entries', 'Stock availability confirmed before patient interaction, not during', 'Prescription history accessible in two taps — improved patient safety'] },
            { group: 'Inventory & Operations Teams', points: ['Real-time stock visibility across all branches — no physical count needed for daily decisions', 'Expiry tracking automated — 30% reduction in write-offs from expired stock', 'Inter-branch stock transfers initiated proactively, reducing branch-level stock-outs', 'Inventory variance reduced from 8.3% to under 0.5% within 60 days'] },
            { group: 'Procurement Team', points: ['Average PR-to-PO cycle reduced from 6.3 days to 1.8 days', 'All purchase requests visible in a single structured queue — no more WhatsApp tracking', 'Supplier price history surfaced at PO creation — improving negotiation outcomes', 'PO status trackable in real time — zero supplier status chasing'] },
            { group: 'Finance & Management', points: ['Monthly reporting cycle reduced from 4–6 days to under 4 hours', 'Reports generated from live data — no stale reporting lag', 'Compliance audit preparation reduced from 3–5 days to 30 minutes', 'Branch comparison analytics available on-demand — enabling group-level strategic decisions'] },
          ].map(s => (
            <Card key={s.group}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AA, margin: '0 0 14px' }}>{s.group}</p>
              {s.points.map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, fontSize: '13px', color: BD, lineHeight: 1.65, marginBottom: 10 }}>
                  <span style={{ color: AC, flexShrink: 0, fontWeight: 700 }}>→</span>{p}
                </div>
              ))}
            </Card>
          ))}
        </div>
      </Wrap>

      {/* SUCCESS METRICS */}
      <section style={{ background: N }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL dark>Success Metrics</SL>
          <H2 dark>KPIs Across Every Operational Dimension</H2>
          <div style={g3}>
            {[
              { l: 'Inventory Accuracy Rate', v: '99.5%', d: 'Up from 91.7%' },
              { l: 'Procurement Cycle Time', v: '1.8 days', d: 'Down from 6.3 days (PR to confirmed PO)' },
              { l: 'GRN Processing Time', v: '−64%', d: 'vs. paper-based process' },
              { l: 'Stock Discrepancy Rate', v: '0.5%', d: 'Down from 8.3% monthly variance' },
              { l: 'Compliance Completion Rate', v: '98.4%', d: 'Required compliance records completed on time' },
              { l: 'Reporting Time', v: '< 4 hrs', d: 'Monthly management report cycle, down from 4–6 days' },
            ].map(k => (
              <div key={k.l} style={{ borderTop: `2px solid ${AC}`, paddingTop: 'clamp(16px,2vw,24px)' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', margin: '0 0 10px', letterSpacing: '0.06em' }}>{k.l}</p>
                <p style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 700, color: WH, margin: '0 0 8px', letterSpacing: '-0.025em' }}>{k.v}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}
      <Wrap>
        <SL>Future Roadmap</SL>
        <H2>The Next Generation of the Platform</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { t: 'AI Demand Forecasting', tl: 'Q3 2025', d: 'ML-powered demand prediction based on sales history, seasonal patterns, and local health data — automatically generating purchase requests before stock levels trigger manual intervention.' },
            { t: 'Predictive Inventory Planning', tl: 'Q4 2025', d: 'Intelligent reorder point calculation that factors in supplier lead times, demand variance, and branch-specific consumption patterns — eliminating both stockouts and overstock situations.' },
            { t: 'Supplier Performance Analytics', tl: 'Q1 2026', d: 'Automated supplier scorecarding based on on-time delivery rate, price consistency, order accuracy, and dispute frequency — surfacing data needed for supplier renegotiation.' },
            { t: 'Mobile Pharmacy Operations', tl: 'Q2 2026', d: 'Native mobile companion for inventory adjustments, GRN validation, and stock transfers — enabling warehouse and dispensing operations without returning to a desktop workstation.' },
            { t: 'Advanced Compliance Automation', tl: 'Q3 2026', d: 'Real-time integration with regulatory reporting systems — automatic submission of controlled substance logs, expiry reports, and traceability data to relevant health authorities.' },
            { t: 'Multi-Region Expansion', tl: 'Q1 2027', d: 'Platform internationalisation supporting multiple regulatory frameworks, multi-currency procurement, cross-border supplier relationships, and jurisdiction-specific compliance reporting.' },
          ].map((item, i) => (
            <div key={item.t} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(18px,2.2vw,26px) 0', borderBottom: i < 5 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="cs-roadmap-row">
              <span style={{ fontSize: '12px', fontWeight: 600, color: AA, background: `${AA}12`, padding: '4px 10px', borderRadius: 6, display: 'inline-block', marginTop: 2 }}>{item.tl}</span>
              <div><p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{item.t}</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.7, margin: 0 }}>{item.d}</p></div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* REFLECTION */}
      <Wrap bg={BA}>
        <SL>Reflection &amp; Learnings</SL>
        <H2>What Enterprise Healthcare Design Teaches You About Systems Thinking</H2>
        <Body style={{ maxWidth: 700 }}>Al Waed was the most technically complex project I{"'"}ve worked on — not because of any individual interaction problem, but because of the sheer number of workflows that had to coexist coherently. Eight user types. Thirteen modules. Hundreds of cross-module data dependencies.</Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '28px 0' }}>
          {[
            { lead: 'Enterprise UX is systems design before it\'s interface design.', body: 'Before sketching a single screen, I spent three weeks mapping the complete data model. A GRN is not just a receiving form — it\'s the event that seeds inventory records, compliance logs, accounting entries, and expiry tracking simultaneously. Designing it without understanding those downstream effects would have produced a beautiful form that created operational chaos.' },
            { lead: 'Compliance is a design problem, not a legal one.', body: 'The compliance gaps weren\'t caused by a lack of regulatory knowledge. They were caused by workflow design that made compliance the hardest path. When we embedded compliance requirements into the operational flow, compliance happened because the workflow required it — not because staff remembered to do it.' },
            { lead: 'Standardisation at scale is a feature, not a constraint.', body: 'The instinct in design is to customise for each context. In enterprise platforms, the opposite is often true. A consistent data table pattern across 13 modules isn\'t a lazy shortcut — it\'s the factor that enables a pharmacist to use the procurement module confidently without training.' },
            { lead: 'Data density is a spectrum, not a binary.', body: 'Enterprise users have sophisticated needs for information density. We offered three density modes — Compact, Standard, and Comfortable — and discovered that power users actively chose the most information-dense option. Respecting that expertise was itself a design decision.' },
          ].map((l, i) => (
            <div key={l.lead} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16, padding: 'clamp(18px,2.2vw,24px) 0', borderBottom: i < 3 ? `1px solid ${BR}` : 'none' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, color: AC, lineHeight: 1.6, flexShrink: 0 }}>{i + 1}</span>
              <div>
                <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: '0 0 8px' }}>{l.lead}</p>
                <p style={{ fontSize: '14px', color: BD, lineHeight: 1.8, margin: 0 }}>{l.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: N, borderRadius: 12, padding: 'clamp(24px,3vw,36px)' }}>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
            "Al Waed made me a systems designer in the truest sense — not a screen designer who considers context, but a designer who starts with the complete operational system and works inward to the interface, ensuring every pixel serves the machine it{"'"}s part of."
          </p>
        </div>
      </Wrap>

      <CaseStudyPrevNext currentSlug="astenmeds" />
    </>
  );
}
