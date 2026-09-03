import imgImage2 from '@/imports/PettyCashUx/a9455da716f02b707a46832ce6e80d452a08aab4.png';
import imgImage3 from '@/imports/PettyCashUx/65a32b2fbfd7da1517936eec68ee39bc5533152f.png';
import imgImage4 from '@/imports/PettyCashUx/dcc6cf4dd09d77137391582ef2b36a50faa44251.png';
import CaseStudyPrevNext from '@/components/CaseStudyPrevNext';

/* ── Brand tokens ── */
const N = '#012b4a';
const AC = '#00b8db';
const AA = '#1a6b4a';
const DK = '#0a1628';
const BD = '#4a5a6e';
const BG = '#f8f7f5';
const BA = '#edf5f1';
const BR = '#cfe0d8';
const WH = '#ffffff';
const RD = '#c0392b';
const AMB = '#d97706';

/* ── Shared layout ── */
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
  return (
    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? AC : AA, margin: '0 0 14px' }}>
      {children}
    </p>
  );
}

function H2({ children, dark, style }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, color: dark ? WH : DK, margin: '0 0 28px', ...style }}>
      {children}
    </h2>
  );
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 20px', ...style }}>
      {children}
    </p>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(20px,2.5vw,28px)', ...style }}>
      {children}
    </div>
  );
}

function CT({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: '0 0 8px', lineHeight: 1.3 }}>{children}</p>;
}

function CB({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '13px', lineHeight: 1.75, color: BD, margin: 0 }}>{children}</p>;
}

function Bullet({ children, color = AA }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: 'flex', gap: 12, fontSize: 'clamp(14px,1.2vw,15px)', color: BD, lineHeight: 1.6, marginBottom: 8 }}>
      <span style={{ color, flexShrink: 0, fontWeight: 700 }}>•</span>{children}
    </div>
  );
}

const g2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px,2vw,24px)' };
const g3: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(14px,2vw,20px)' };

export default function ArmadaCashCaseStudy() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: N, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,184,219,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,107,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px) clamp(56px,7vw,100px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {['Finance', 'UX Research'].map(t => (
              <span key={t} style={{ background: 'rgba(0,184,219,0.15)', border: '1px solid rgba(0,184,219,0.3)', color: '#53eafd', fontSize: '13px', fontWeight: 500, padding: '5px 14px', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,80px)', fontWeight: 800, letterSpacing: '-0.035em', color: WH, lineHeight: 1.05, margin: '0 0 24px' }}>
            Retail Cash Flow<br />Management System
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.8vw,22px)', fontWeight: 400, lineHeight: 1.6, color: 'rgba(200,230,240,0.85)', maxWidth: 640, margin: '0 0 48px' }}>
            A complete UX documentation for a retail cash operations platform managing inflow, outflow, petty expenses, day closing, and bank deposits across GCC countries.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,48px)' }}>
            {[{ l: 'Company', v: 'Armada Technologies' }, { l: 'Product', v: 'Petty Cash' }, { l: 'Domain', v: 'Cash Flow Management' }, { l: 'Market', v: 'GCC Region' }].map(m => (
              <div key={m.l}>
                <p style={{ fontSize: '12px', color: AC, margin: '0 0 4px', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{m.l}</p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: WH, margin: 0 }}>{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero images ── */}
      <section style={{ background: N, paddingBottom: 'clamp(40px,6vw,80px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(12px,2vw,20px)' }}>
            {[imgImage2, imgImage3, imgImage4].map((src, i) => (
              <div key={i} style={{ borderRadius: 'clamp(10px,1.5vw,16px)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={src} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 01 — Project Overview ── */}
      <Wrap>
        <SL>Section 01</SL>
        <H2>Project Overview</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 700 }}>
          A comprehensive retail cash operations platform serving multi-store chains across GCC countries.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(12px,1.5vw,16px)', marginBottom: 32 }}>
          {[
            { label: 'Company', value: 'Armada Technologies' },
            { label: 'Product', value: 'Petty Cash' },
            { label: 'Domain', value: 'Cash Flow Management' },
            { label: 'Users', value: 'Cashier · Manager · Owner' },
            { label: 'Coverage', value: 'Multi-branch, Multi-currency' },
            { label: 'Market', value: 'Middle East (SAR · AED · KWD · QAR)' },
          ].map(m => (
            <div key={m.label} style={{ background: BA, border: `1px solid ${BR}`, borderRadius: 10, padding: 'clamp(16px,2vw,22px)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 6px' }}>{m.label}</p>
              <p style={{ fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 600, color: DK, margin: 0, lineHeight: 1.4 }}>{m.value}</p>
            </div>
          ))}
        </div>
        <Card>
          <CT>Project Overview</CT>
          <CB>Armada Cash was designed to digitize the entire cash lifecycle — from shift opening and POS denomination entry, through inter-branch transfers and bank deposits, to reconciliation and consolidated reporting. The system serves three distinct roles: Branch Cashiers handling daily transactions, Branch Managers overseeing operations, and Business Owners monitoring the enterprise. Each role receives a purpose-built interface with access scoped to their operational responsibility.</CB>
        </Card>
      </Wrap>

      {/* ── SECTION 02 — Business Context ── */}
      <Wrap bg={BA}>
        <SL>Section 02</SL>
        <H2>Business Context</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 700 }}>
          Understanding why this product had to exist — and what it needed to solve.
        </p>
        <Card style={{ borderLeft: `4px solid ${AC}`, marginBottom: 28 }}>
          <CB>Cash-reliant retail businesses in the GCC — multi-branch outlets — were managing their daily cash using physical registers, handwritten shift summaries, and manual bank reconciliation. The absence of a unified digital layer meant that discrepancies went undetected for days, inter-branch transfers were informal, and business owners had no real-time view of their financial position.</CB>
        </Card>
        <div style={g3}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RD, margin: '0 0 12px' }}>Why This Exists</p>
            {[
              'Branch managers could not validate cash positions without physically opening the safe',
              'Bank deposit records were kept in notebooks — completely disconnected from POS data',
              'Petty cash and inter-branch transfers had zero audit trail',
            ].map(b => <Bullet key={b} color={RD}>{b}</Bullet>)}
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AA, margin: '0 0 12px' }}>Business Objectives</p>
            {[
              'Create a single system of record for all cash movements across branches',
              'Reduce end-of-day reconciliation from 45 minutes to under 10',
              'Enable remote monitoring for multi-branch business owners',
            ].map(b => <Bullet key={b}>{b}</Bullet>)}
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: BD, margin: '0 0 12px' }}>Market Situation</p>
            {[
              'GCC retail sector growing at 6–8% annually with active branch expansion',
              'Enterprise ERPs (SAP, Oracle) overbuilt for mid-market retailers',
              'Existing POS systems capture sales — not cash drawer state',
            ].map(b => <Bullet key={b} color={BD}>{b}</Bullet>)}
          </div>
        </div>
        <Card style={{ marginTop: 24 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>User Expectations by Role</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { role: 'Cashier', expectation: 'Guided daily workflows requiring no accounting knowledge' },
              { role: 'Manager', expectation: 'Instant branch cash visibility without manual calculation' },
              { role: 'Owner', expectation: 'Consolidated live view with alert-based exception management' },
            ].map((r, i) => (
              <div key={r.role} style={{ display: 'grid', gridTemplateColumns: 'clamp(80px,15%,120px) 1fr', gap: 'clamp(12px,2vw,24px)', padding: 'clamp(12px,1.5vw,16px) 0', borderBottom: i < 2 ? `1px solid ${BR}` : 'none', alignItems: 'start' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: AA, margin: 0 }}>{r.role}</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.7, margin: 0 }}>{r.expectation}</p>
              </div>
            ))}
          </div>
        </Card>
      </Wrap>

      {/* ── SECTION 03 — Goal ── */}
      <Wrap>
        <SL>Section 03</SL>
        <H2>Goal</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 600 }}>
          Measurable intent behind every design decision.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(14px,2vw,20px)', marginBottom: 32 }}>
          {[{ v: '< 10 min', l: 'Target end-of-day reconciliation time' }, { v: '3 Roles', l: 'Distinct user types with tailored interfaces' }].map(s => (
            <div key={s.v} style={{ background: BA, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(18px,2vw,26px)' }}>
              <p style={{ fontSize: 'clamp(26px,3.2vw,38px)', fontWeight: 700, color: AA, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.v}</p>
              <p style={{ fontSize: '13px', color: BD, margin: 0, lineHeight: 1.5 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <div style={g2}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AA, margin: '0 0 12px' }}>Business Goals</p>
            {[
              'Eliminate manual discrepancy detection lag',
              'Scale cash oversight across unlimited branches',
              'Generate automatic financial reports without manual input',
              'Reduce dependence on manager presence for daily operations',
            ].map(b => <Bullet key={b}>{b}</Bullet>)}
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AC, margin: '0 0 12px' }}>User Goals</p>
            {[
              'Cashiers: Complete shift opening and closing with guided steps',
              'Managers: Approve, monitor, and review without re-entering data',
              'Owners: View live cash position anytime, from anywhere',
              'All users: Avoid errors through smart validation — not memory',
            ].map(b => <Bullet key={b} color={AC}>{b}</Bullet>)}
          </div>
        </div>
      </Wrap>

      {/* ── SECTION 04 — Problem Statement ── */}
      <Wrap bg={BA}>
        <SL>Section 04</SL>
        <H2>Problem Statement</H2>
        <Card style={{ borderLeft: `4px solid ${RD}`, marginBottom: 32 }}>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.7, color: DK, margin: 0 }}>
            "Cash-reliant retail businesses in the GCC have no unified, role-aware digital system to manage, monitor, and reconcile daily cash operations — leaving them exposed to daily discrepancies, zero accountability, and zero real-time financial visibility."
          </p>
        </Card>
        <p style={{ fontSize: 'clamp(14px,1.2vw,16px)', lineHeight: 1.75, color: BD, margin: '0 0 24px', maxWidth: 740 }}>
          During the discovery phase, all identified pain points were grouped using the Card Sorting method. This helped organize related challenges into meaningful categories, making it easier to identify recurring patterns and prioritize design decisions. Every feature and workflow in the solution directly addresses one or more of these core problems.
        </p>
        <div style={g2}>
          {[
            { label: 'Business Pain Points', color: RD, items: ['No consolidated view of cash across branches', 'Daily losses from undetected discrepancies', 'No audit trail for regulatory or internal review'] },
            { label: 'User Pain Points', color: AMB, items: ['Cashiers manually counting denomination-by-denomination with no guidance', 'Managers receiving inconsistent data depending on who prepared it', 'Owners relying on phone calls or WhatsApp for branch status updates'] },
            { label: 'Operational Pain Points', color: '#7a4f9e', items: ['Inter-branch cash transfers handled via informal phone approvals', 'Petty cash withdrawals not categorised or tracked', 'Safe balance could only be verified by physically opening it'] },
            { label: 'Existing System Pain Points', color: BD, items: ['POS and accounting systems are siloed — no shared data layer', 'No notification system for approvals or discrepancy alerts', 'Multi-branch summary required hours of manual data aggregation'] },
          ].map(cat => (
            <Card key={cat.label}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: cat.color, margin: '0 0 14px' }}>{cat.label}</p>
              {cat.items.map(b => <Bullet key={b} color={cat.color}>{b}</Bullet>)}
            </Card>
          ))}
        </div>
        <Card style={{ marginTop: 20, background: `${N}08`, border: `1px solid ${BR}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>UX Decision</p>
          <CB>"The UX phase — and every screen, flow, and component that followed — was structured directly around these four problems. Nothing was designed as a feature for its own sake; every element exists to close one of these four gaps."</CB>
        </Card>
      </Wrap>

      {/* ── SECTION 05 — Users & Their Roles ── */}
      <Wrap>
        <SL>Section 05</SL>
        <H2>Users & Their Roles</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Three distinct users. Each with fundamentally different needs, mental models, and interaction patterns.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
          {[
            {
              role: 'Branch Cashier',
              initial: 'C',
              responsibilities: ['Open and close daily cash shifts', 'Enter denomination-level POS cash counts', 'Record petty cash with reason codes', 'Submit shift handover summary'],
              goals: ['Complete shift quickly with guided steps', 'Rely on system — not mental arithmetic', 'Immediate confirmation on task completion', 'Clear error messages, not generic failures'],
              pains: ['Confusion when denomination totals don\'t align with POS', 'Fear of reporting discrepancies — no safe way to flag', 'Multiple re-entries due to missing submission validation'],
              interactions: ['Shift Opening', 'POS Entry', 'Denomination Count', 'Petty Cash', 'Shift Closing'],
            },
            {
              role: 'Branch Manager',
              initial: 'M',
              responsibilities: ['Review and approve cashier submissions', 'Authorise inter-branch cash transfers', 'Monitor branch safe balance and daily position', 'Approve bank deposits and log references'],
              goals: ['Real-time view of branch cash without being on site', 'Approve workflows from a single dashboard', 'Receive alerts for anomalies — no manual monitoring', 'Access shift history to resolve disputes quickly'],
              pains: ['Cannot approve remotely — must be physically present', 'Manual calculation of end-of-day position from cashier sheets', 'No single view of all pending approvals'],
              interactions: ['Approval Dashboard', 'Shift Review', 'Transfer Auth', 'Branch Monitor'],
            },
            {
              role: 'Business Owner',
              initial: 'O',
              responsibilities: ['Monitor enterprise-wide cash position', 'Review consolidated financial reports', 'Set operational limits: caps, ceilings, thresholds', 'Access audit logs for compliance or investigation'],
              goals: ['All branches on a single dashboard — no per-branch login', 'Summary reports automatically generated — zero manual compilation', 'Alerts for threshold breaches or unusual transactions', 'Data to make strategic decisions in real time'],
              pains: ['Calls each branch manager daily for cash position updates', 'Month-end report compilation takes 2–3 days of staff time', 'No visibility into petty cash usage across the business', 'Discrepancies only known weeks after they occur'],
              interactions: ['Enterprise Dashboard', 'Multi-Branch Reports', 'Audit Logs', 'Config & Limits'],
            },
          ].map(u => (
            <Card key={u.role}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${N}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '17px', fontWeight: 700, color: N }}>{u.initial}</span>
                </div>
                <p style={{ fontSize: 'clamp(16px,1.5vw,18px)', fontWeight: 700, color: DK, margin: 0 }}>{u.role}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(16px,2vw,24px)' }} className="cs-2col">
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: BD, margin: '0 0 10px' }}>Responsibilities</p>
                  {u.responsibilities.map(r => <Bullet key={r} color={BD}>{r}</Bullet>)}
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>Goals</p>
                  {u.goals.map(g => <Bullet key={g}>{g}</Bullet>)}
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RD, margin: '0 0 10px' }}>Pain Points</p>
                  {u.pains.map(p => <Bullet key={p} color={RD}>{p}</Bullet>)}
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AC, margin: '0 0 10px' }}>System Interaction</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {u.interactions.map(i => (
                      <span key={i} style={{ fontSize: '12px', fontWeight: 600, background: BA, border: `1px solid ${BR}`, color: AA, padding: '4px 10px', borderRadius: 20 }}>{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* ── SECTION 06 — Research ── */}
      <Wrap bg={BA}>
        <SL>Section 06</SL>
        <H2>Research</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Structured discovery to validate assumptions and surface hidden workflows.
        </p>
        <div style={{ borderTop: `1px solid ${BR}`, marginBottom: 32 }}>
          {[
            { l: 'Stakeholder Findings', items: ['Business owners prioritised real-time visibility over advanced analytics', 'Finance teams needed audit-ready records, not just summaries', 'Management required role-based access — cashiers must not see branch totals', 'Approval workflows must support remote authorisation via mobile'] },
            { l: 'User Findings', items: ['Cashiers counted cash an average of 2.3× before feeling confident in the total', 'Managers spent 40+ minutes per day on reconciliation-related communication', 'Shift handover was the highest-anxiety moment — sole point of accountability transfer', 'Non-Arabic-literate staff needed icon-first interfaces over text-heavy labels'] },
            { l: 'Business Findings', items: ['Average daily cash discrepancy: SAR 150–400 per branch', 'Bank deposit reconciliation delayed 3–5 days on average', 'Petty cash was the most frequently disputed transaction category', 'Multi-branch owners averaged 3 status calls per branch per day'] },
            { l: 'Technical Findings', items: ['No consistent POS integration API across client systems — manual entry required', 'Network connectivity in warehouse back-offices was unreliable', 'Multi-currency support needed from day one: SAR, AED, KWD, QAR', 'Offline resilience needed for denomination entry screens'] },
          ].map(m => (
            <div key={m.l} style={{ display: 'grid', gridTemplateColumns: 'clamp(130px,18%,200px) 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(20px,2.5vw,28px) 0', borderBottom: `1px solid ${BR}`, alignItems: 'start' }} className="cs-method-row">
              <p style={{ fontSize: '14px', fontWeight: 700, color: DK, margin: 0 }}>{m.l}</p>
              <div>{m.items.map(i => <Bullet key={i} color={AC}>{i}</Bullet>)}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>Research Insights</p>
        <div style={g2}>
          {[
            { t: 'Cashiers struggle because', b: 'They must reconcile denomination totals mentally against a POS figure — with no visual scaffolding, no partial save, and no confirmation until submission. Every error restarts the entire count.' },
            { t: 'Businesses need', b: 'A system that separates data entry from approval — cashiers enter, managers verify, owners view — without any role seeing more than their operational scope requires.' },
            { t: 'Existing workflows cause', b: 'Accountability gaps at handover. When a shift ends verbally, neither cashier nor manager has a signed-off record — making dispute resolution impossible and encouraging informal shortcuts.' },
            { t: 'Users struggle because', b: 'Multi-role businesses have staff with varying digital literacy. The interface must work for an educated manager and a warehouse cashier — requiring progressive disclosure, not feature parity.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* ── SECTION 07 — How Might We? ── */}
      <Wrap>
        <SL>Section 07</SL>
        <H2>How Might We?</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Design questions that bridged research into solution space.
        </p>
        <div style={g2}>
          {[
            'How might we make POS-to-bank reconciliation something the finance team reviews by exception, instead of rebuilding by hand every week?',
            'How might we let an owner in one country understand cash health across seven countries without asking anyone for a report?',
            'How might we reduce inter-branch transfer risk by creating a structured request-and-approval flow with full audit trail and notification?',
            'How might we eliminate petty cash disputes by requiring reason codes, receipt references, and manager approval above defined thresholds?',
          ].map((hmw, i) => (
            <Card key={i}>
              <p style={{ fontSize: 'clamp(26px,3vw,36px)', fontWeight: 800, color: `${AC}30`, margin: '0 0 14px', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</p>
              <CB>{hmw}</CB>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* ── SECTION 08 — Design Principles ── */}
      <Wrap bg={BA}>
        <SL>Section 08</SL>
        <H2>Design Principles</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Product-level commitments — not UI style rules.
        </p>
        <div style={g2}>
          {[
            { t: 'Scoped by role', b: 'Every user sees only what they need. A cashier cannot accidentally access float management; an auditor cannot accidentally approve a transaction.' },
            { t: 'No ambiguous states', b: 'Every piece of data carries a visible status — Pending, In Transit, Verified, Matched, Unmatched. Users never have to guess where something stands.' },
            { t: 'Prevent errors by design', b: 'The system blocks negative balance entries, previews before/after states before financial transfers confirm, and requires mandatory reasons for variances and rejections.' },
            { t: 'Progressive disclosure', b: 'Lists and dashboards show summary data; detail panels open on demand, keeping high-density screens usable for daily work.' },
            { t: 'Inline actions over navigation', b: 'Approval panels open as right-side drawers; deposit status updates happen in-row — preserving the user\'s place in their list.' },
            { t: 'Urgency is visual', b: 'Red always means risk or action required, amber means pending attention, green means resolved — applied without exception, everywhere.' },
          ].map((p, i) => (
            <div key={p.t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: AA, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{p.t}</p>
                <p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{p.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ── SECTION 09 — Information Architecture ── */}
      <Wrap>
        <SL>Section 09</SL>
        <H2>Information Architecture</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          How the design solves both business and user problems simultaneously.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)', marginBottom: 32 }}>
          {[
            {
              label: 'Manager & Cashier Navigation',
              items: [
                { module: 'Cash Home', sub: 'Current Balance · Live Ledger · Inflow / Outflow · Quick Day Closing' },
                { module: 'Petty Expenses', sub: 'Pending Approvals · All Requests · Request Detail · Receipt Viewer' },
                { module: 'Transfers', sub: 'Transfer to HO · Transfer to Store · Transfer History' },
                { module: 'Bank Deposit', sub: 'Active Deposit · Create Deposit · Deposit History · Status Tracker' },
                { module: 'Day Closing', sub: 'Step 1: Shift Close · Step 2: Summary · Step 3: Cash Count · Step 4: Variance · Step 5: Report · Step 6: Lock' },
                { module: 'Notifications', sub: 'Financial Alerts · System Alerts · Alert History' },
              ],
            },
            {
              label: 'HO / Manager Navigation',
              items: [
                { module: 'Dashboard', sub: 'KPI Cards · Cash Overview · Live Alerts · Store Summary' },
                { module: 'Float Management', sub: 'Float Allocation · Float Top-Up · Float Return · Store Transfer · Emergency Fund' },
                { module: 'Approvals', sub: 'Float Requests · Expense Requests · Approval History · Reimbursements' },
                { module: 'HO Controls', sub: 'Float Limits · Approval Matrix · Compliance Rules · Country Configuration · Reconciliation · Payment Configuration · Bank Mapping · POS vs Bank · Deposit Monitoring' },
                { module: 'Audit & Admin', sub: 'Audit Trail · RBAC Matrix · Integrations · User Management' },
              ],
            },
            {
              label: 'Owner Navigation',
              items: [
                { module: 'Dashboard', sub: 'Live Overview · All Branches · Cash Positions · Quick Stats' },
                { module: 'Analytics', sub: 'Cash Trends · Branch Comparison · Variance Analysis' },
                { module: 'Audit Trail', sub: 'Transaction Log · User Activity · Approval History · Discrepancies' },
              ],
            },
          ].map(tree => (
            <Card key={tree.label}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>{tree.label}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {tree.items.map((item, i) => (
                  <div key={item.module} style={{ display: 'grid', gridTemplateColumns: 'clamp(110px,20%,160px) 1fr', gap: 'clamp(10px,2vw,20px)', padding: 'clamp(10px,1.2vw,14px) 0', borderBottom: i < tree.items.length - 1 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="cs-method-row">
                    <p style={{ fontSize: '13px', fontWeight: 600, color: DK, margin: 0 }}>{item.module}</p>
                    <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{item.sub}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Card style={{ background: `${N}06`, border: `1px solid ${BR}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>UX Decision — Sidebar Navigation</p>
          <CB>"Sidebar navigation was chosen over top-tabs because the HO app has 8+ primary modules — too many for a tab bar without truncation. A collapsible sidebar lets finance users jump between sections quickly while keeping the full workspace visible."</CB>
        </Card>
      </Wrap>

      {/* ── Design System ── */}
      <Wrap bg={BA}>
        <SL>Section 09 — Continued</SL>
        <H2>Design System</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Visual language built for clarity, trust, and operational precision.
        </p>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>Color System</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(10px,1.5vw,14px)', marginBottom: 32 }}>
          {[
            { name: 'Navy — Primary', color: '#012b4a', usage: 'Sidebar, top bar, primary buttons, headings, table headers' },
            { name: 'Navy — Secondary', color: '#1a4a6e', usage: 'Secondary buttons, active nav states, links' },
            { name: 'Green — Positive', color: '#1a6b4a', usage: 'Completed status, Approved badges' },
            { name: 'Amber — Pending', color: '#d97706', usage: 'Pending status, below threshold warnings' },
            { name: 'Red — Risk', color: '#c0392b', usage: 'Variance detected, rejections, Emergency Fund header' },
            { name: 'Teal — Verified', color: '#00b8db', usage: 'Bank-confirmed deposits, posted entries' },
          ].map(c => (
            <div key={c.name} style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: 44, background: c.color }} />
              <div style={{ padding: 'clamp(10px,1.2vw,14px)' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: DK, margin: '0 0 4px' }}>{c.name}</p>
                <p style={{ fontSize: '11px', color: BD, margin: 0, lineHeight: 1.5 }}>{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>Typography Scale</p>
        <Card style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { role: 'Page / Screen title', spec: '22px / 700', why: 'Anchors the screen with immediate visual hierarchy' },
              { role: 'Section heading', spec: '15px / 600', why: 'Establishes sub-hierarchy while linking visually to the brand' },
              { role: 'Body / form text', spec: '14px / 400', why: 'Minimum readable size for finance users reading dense tables all day' },
              { role: 'Table data', spec: '13px / 400', why: 'One step smaller than body, increasing row density without hurting legibility' },
              { role: 'KPI card value', spec: '28–32px / 700', why: 'Hero numbers scannable in under one second' },
            ].map((t, i) => (
              <div key={t.role} style={{ display: 'grid', gridTemplateColumns: 'clamp(130px,22%,180px) clamp(80px,12%,110px) 1fr', gap: 'clamp(10px,2vw,20px)', padding: 'clamp(10px,1.2vw,14px) 0', borderBottom: i < 4 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="cs-roadmap-row">
                <p style={{ fontSize: '13px', fontWeight: 600, color: DK, margin: 0 }}>{t.role}</p>
                <p style={{ fontSize: '12px', fontWeight: 700, color: AC, margin: 0, fontFamily: 'monospace' }}>{t.spec}</p>
                <p style={{ fontSize: '13px', color: BD, margin: 0, lineHeight: 1.6 }}>{t.why}</p>
              </div>
            ))}
          </div>
        </Card>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>Components</p>
        <div style={g2}>
          {[
            { t: 'Status Badges', b: '5-state pill badges (Pending, In Transit, Completed, Verified, Rejected) using the same colour ramp everywhere a transaction has a lifecycle.' },
            { t: 'Inline Balance Bar', b: 'A single table cell that communicates current balance, threshold, and approved float at once — replacing three numeric columns with one scannable graphic.' },
            { t: '5-Step Approval Stepper', b: 'Requested → Manager Approved → Cash Paid → Receipt Uploaded → Posted — shown at the top of every expense detail view.' },
            { t: 'Right-Side Detail Drawer', b: 'Approval, reconciliation, and drill-down details open in a 400px drawer, keeping the working list visible on the left at all times.' },
            { t: 'Maker-Checker Approval Card', b: 'Segregated maker (read-only) and checker (action) sections, making it structurally impossible for one person to approve their own transaction.' },
            { t: 'Cascading Dropdowns', b: 'Country selected first, store list filters automatically — preventing cross-country data-entry errors across a 150-store, 7-country network.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
        <Card style={{ marginTop: 20, background: `${N}06`, border: `1px solid ${BR}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>UX Decision — Right-Side Detail Drawer</p>
          <CB>"The Right-Side Detail Drawer was one of the most deliberate architectural choices in the project. A head cashier reviewing 20 pending approvals needs to stay in the queue while reading and acting on each item — the drawer pattern reduces clicks by roughly 50% for approval-heavy workflows compared with full-page navigation."</CB>
        </Card>
      </Wrap>

      {/* ── SECTION 10 — Solution ── */}
      <Wrap>
        <SL>Section 10</SL>
        <H2>Solution</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 8px', maxWidth: 700 }}>
          A role-aware, shift-centric cash management platform that digitises the complete cash lifecycle — from denomination entry to bank reconciliation — with real-time visibility, structured approval workflows, and automatic reporting.
        </p>
        <p style={{ fontSize: 'clamp(14px,1.2vw,16px)', fontWeight: 600, color: DK, margin: '0 0 32px' }}>
          Every role gets exactly what they need. Nothing more. Nothing less.
        </p>
        <div style={g3}>
          {[
            { role: 'For Cashiers', items: ['Guided shift opening with denomination counting grid', 'Live variance feedback — no surprises at submission', 'One-tap petty cash with reason codes', 'Digital handover that timestamps accountability', 'Shift history for self-review and dispute resolution'] },
            { role: 'For Managers', items: ['Single approval queue — all pending actions unified', 'Branch cash position without physical safe access', 'Discrepancy alerts with denomination-level drill-down', 'Transfer and deposit approval from any device', 'Side-by-side cashier vs. system calculation review'] },
            { role: 'For Owners', items: ['Multi-branch dashboard — live cash position per branch', 'Automatic daily report at shift close — zero effort', 'Exception alerts for threshold breaches', 'Full audit log with user attribution per transaction', 'Configurable limits: transfer caps, petty cash ceilings'] },
          ].map(r => (
            <Card key={r.role}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 14px' }}>{r.role}</p>
              {r.items.map(i => <Bullet key={i}>{i}</Bullet>)}
            </Card>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vw,18px)', marginTop: 24 }}>
          {[
            { t: 'Read-only mode for auditors', b: '"Read-only mode for auditors is enforced both at the UI layer (approve/reject buttons removed entirely) and the API layer (write endpoints return 403 for auditor tokens) — the UI removal prevents confusion, the API enforcement is the actual security control."' },
            { t: 'Risk & Exception panel placement', b: '"The Risk & Exception panel sits at the bottom of the Owner Dashboard, not the top. The owner sees the positive picture — KPIs, sales, trends — first; starting with exceptions would bias the morning review negatively. If something needs urgent attention, the KPI cards themselves turn red before the owner even scrolls down."' },
          ].map(d => (
            <Card key={d.t} style={{ background: `${N}06`, border: `1px solid ${BR}` }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 10px' }}>UX Decision</p>
              <p style={{ fontSize: '13px', fontWeight: 600, color: DK, margin: '0 0 8px' }}>{d.t}</p>
              <CB>{d.b}</CB>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* ── Accessibility ── */}
      <Wrap bg={BA}>
        <SL>Section 10 — Continued</SL>
        <H2>Accessibility</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Inclusive design for a diverse operational staff across the GCC.
        </p>
        <div style={g2}>
          {[
            { t: 'Contrast', b: 'All text-on-background combinations meet WCAG AA (4.5:1 minimum). Primary action buttons (#1A6B4A on white) achieve 5.2:1. Critical error states (#C0392B on white) at 5.8:1.' },
            { t: 'Readability', b: 'Body text at 12.5px Inter with 1.6 line-height. Denomination fields use JetBrains Mono for numeric clarity. Labels never rely on colour alone — always paired with text or icon.' },
            { t: 'Keyboard', b: 'Denomination grid: Tab to advance fields, Enter to submit, Escape to cancel. Approval actions accessible via keyboard without mouse. Focus ring always visible — never suppressed.' },
            { t: 'Clear Feedback', b: 'Every submission returns a visible confirmation state. Pending approvals show distinct waiting indicators. Failed actions provide actionable descriptions — not generic error codes.' },
            { t: 'Touch Targets', b: 'All interactive elements minimum 44×44px. Approve/submit buttons are full-width on compact viewports. Denomination input fields generously sized for finger entry on tablet.' },
            { t: 'Responsive', b: 'Manager approval dashboard responsive to 768px for tablet workflows. Cashier denomination entry optimised for desktop. Branch approval accessible via mobile-optimised layout.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* ── SECTION 11 — Outcome vs Design Deliverables ── */}
      <Wrap>
        <SL>Section 11</SL>
        <H2>Outcome vs Design Deliverables</H2>
        <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8, color: BD, margin: '0 0 32px', maxWidth: 640 }}>
          Every design deliverable mapped to its direct business value.
        </p>
        <div style={{ borderTop: `1px solid ${BR}` }}>
          {[
            { deliverable: 'Full cash visibility across 150 stores', outcome: 'The Owner Dashboard and HO Control Dashboard give finance leadership a real-time view of every store\'s cash position, updated hourly — eliminating manual reporting requests.' },
            { deliverable: 'Zero manual reconciliation', outcome: 'POS-to-bank reconciliation runs automatically every day; the HO team reviews exceptions only, not the full ledger.' },
            { deliverable: 'Fraud and leakage control', outcome: 'The no-negative-balance guard, mandatory receipt upload, maker-checker approval, and immutable audit trail collectively remove the conditions under which petty cash fraud typically occurs.' },
            { deliverable: 'Compliance-ready audit trail', outcome: 'Every transaction, approval, and system change is logged with before/after values, user, timestamp, and IP address — external auditors can be given read-only access without data exports.' },
            { deliverable: 'Operational continuity', outcome: 'Threshold-triggered top-up alerts and Emergency Fund fasttrack approval mean stores never run out of petty cash without an automated safety net.' },
            { deliverable: 'Scalable across countries', outcome: 'The multi-country, multi-currency, RBAC-controlled design accommodates additional countries and stores without architectural change — a new country is a new table entry, not a new build.' },
          ].map((row, i) => (
            <div key={row.deliverable} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(20px,2.5vw,28px) 0', borderBottom: i < 5 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="cs-2col">
              <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: 0, lineHeight: 1.4 }}>{row.deliverable}</p>
              <p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{row.outcome}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ── Conclusion ── */}
      <section style={{ background: `${N}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,80px)' }}>
          <SL dark>Conclusion</SL>
          <p style={{ fontSize: 'clamp(18px,2.4vw,28px)', fontWeight: 400, lineHeight: 1.65, color: '#e8f5ee', maxWidth: 760, margin: '0 0 48px' }}>
            Armada Cash demonstrates that operational enterprise software can be designed with the same rigour and craft applied to consumer products — when research, architecture, and user empathy drive every decision.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {['Research-Driven', 'Role-Aware', 'Shift-Centric', 'Audit-Ready'].map(tag => (
              <span key={tag} style={{ background: 'rgba(0,184,219,0.12)', border: '1px solid rgba(0,184,219,0.25)', color: AC, fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyPrevNext currentSlug="armada-cash" />
    </>
  );
}
