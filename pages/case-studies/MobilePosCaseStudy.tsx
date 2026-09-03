import CaseStudyPrevNext from '@/components/CaseStudyPrevNext';

const N = '#0a1628';
const AC = '#4f8eff';
const AA = '#2563eb';
const DK = '#0f172a';
const BD = '#475569';
const BG = '#f8f7f5';
const BA = '#eef2f8';
const BR = '#dde5f0';
const WH = '#ffffff';
const RD = '#e05252';

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
  return <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? AC : AA, margin: '0 0 14px' }}>{children}</p>;
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

export default function MobilePosCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: N, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,142,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px) clamp(56px,7vw,100px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {['Retail Operations Platform', 'Product Design · 2024 — 2025'].map(t => (
              <span key={t} style={{ background: 'rgba(79,142,255,0.15)', border: '1px solid rgba(79,142,255,0.3)', color: '#a5c4ff', fontSize: '13px', fontWeight: 500, padding: '5px 14px', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, letterSpacing: '-0.035em', color: WH, lineHeight: 1, margin: '0 0 24px' }}>Mobile POS</h1>
          <p style={{ fontSize: 'clamp(17px,2vw,24px)', fontWeight: 400, lineHeight: 1.6, color: '#c0d4ff', maxWidth: 640, margin: '0 0 48px' }}>
            Empowering retail staff to complete transactions and manage store operations from anywhere within the store.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
            {[{ l: 'Role', v: 'Lead UX Designer' }, { l: 'Timeline', v: '6 months' }, { l: 'Platform', v: 'iOS · Android' }, { l: 'Tools', v: 'Figma · Maze · Miro' }].map(m => (
              <div key={m.l}><p style={{ fontSize: '13px', color: AC, margin: '0 0 4px' }}>{m.l}</p><p style={{ fontSize: '15px', fontWeight: 600, color: WH, margin: 0 }}>{m.v}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEC SUMMARY */}
      <Wrap>
        <SL>Executive Summary</SL>
        <H2>The Business Case for Mobile Retail</H2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }} className="cs-2col">
          <div>
            <Body>Modern retail is under pressure. Customer expectations around speed, personalisation, and convenience have never been higher — yet most brick-and-mortar stores still rely on fixed POS counters that physically chain staff to a single spot on the shop floor.</Body>
            <Body>The result: long queues at peak hours, staff who can{"'"}t help customers on the floor without leaving their post, and managers who lack real-time visibility into what{"'"}s actually happening across the store.</Body>
            <Body style={{ margin: 0 }}>A mobile-first POS breaks those physical constraints. When every staff member carries a complete transaction terminal, checkout becomes ambient — it happens wherever the customer is, not wherever the counter is.</Body>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,1.5vw,16px)' }}>
            {[{ v: '−40%', l: 'Checkout Time' }, { v: '+35%', l: 'Staff Efficiency' }, { v: '+28%', l: 'Sales Throughput' }, { v: '−55%', l: 'Queue Reduction' }].map(s => (
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
        <H2>When the Counter Is the Constraint</H2>
        <div style={{ background: WH, border: `1px solid ${BR}`, borderLeft: `4px solid ${AC}`, borderRadius: 12, padding: 'clamp(20px,2.5vw,32px)', marginBottom: 28 }}>
          <p style={{ fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.7, color: DK, margin: 0 }}>
            "Retail staff are forced to choose between helping customers on the shop floor and processing their transactions at a fixed counter — because no single device connects both realities."
          </p>
        </div>
        <div style={g3}>
          {[
            { t: 'Fixed Checkout Counters', b: 'Every transaction requires the customer to walk to a designated counter — often at the back of the store — creating bottlenecks and abandoning shoppers mid-decision.' },
            { t: 'Staff Immobility', b: 'Cashiers are tethered to their station. When a customer needs help on the floor, they must leave the queue unattended or call someone else — breaking the service flow.' },
            { t: 'Inventory Blindspots', b: 'Stock queries require staff to physically check the stockroom or ask a colleague, adding minutes to each customer interaction and eroding confidence in real-time availability.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* PROBLEM */}
      <Wrap>
        <SL>Problem Statement</SL>
        <H2>The Problem We Were Solving</H2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {['Slow billing processes caused by counter-centric hardware', 'Limited staff mobility restricts proactive customer service', 'Inventory access requires leaving the customer to check stockroom', 'Customer wait times spike during peak hours with no overflow capacity', 'Disconnected workflows between sales, inventory, and payments', 'Lack of real-time operational visibility for managers'].map(p => (
            <li key={p} style={{ display: 'flex', gap: 12, fontSize: 'clamp(14px,1.2vw,16px)', color: BD, lineHeight: 1.6 }}>
              <span style={{ color: RD, flexShrink: 0, fontWeight: 700 }}>•</span>{p}
            </li>
          ))}
        </ul>
      </Wrap>

      {/* RESEARCH OBJECTIVES */}
      <Wrap bg={BA}>
        <SL>Research Objectives</SL>
        <H2>What We Set Out to Learn</H2>
        <div style={g2}>
          {[
            { t: 'Staff Workflows', b: 'Map the daily routines of sales associates and cashiers to understand where time is lost and why mobility matters.' },
            { t: 'Transaction Bottlenecks', b: 'Identify the specific steps in the checkout flow that create delay and frustration for both staff and customers.' },
            { t: 'Mobility Requirements', b: 'Determine what hardware, connectivity, and UX characteristics a mobile POS must have to work reliably on the shop floor.' },
            { t: 'Inventory Management', b: 'Understand how staff currently look up stock, handle out-of-stock situations, and communicate availability.' },
            { t: 'Operational Efficiency', b: 'Explore how managers currently track store performance and what real-time signals would most improve their decisions.' },
            { t: 'Adoption Barriers', b: 'Anticipate resistance to change among staff used to traditional POS systems and design for a smooth transition.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* RESEARCH & DISCOVERY */}
      <Wrap>
        <SL>Research &amp; Discovery</SL>
        <H2>Going Into the Store to Understand the Store</H2>
        <Body style={{ maxWidth: 640 }}>We conducted two weeks of immersive store research across three retail formats — a fashion chain, a consumer electronics store, and a grocery supermarket — to capture the full range of POS complexity.</Body>
        <div style={{ borderTop: `1px solid ${BR}` }}>
          {[
            { l: 'Store Observations', c: '40+ hours', b: 'Shadowing staff across peak and off-peak periods. We mapped every physical movement and identified the 8 most time-consuming micro-interactions in a typical transaction.' },
            { l: 'Retail Staff Interviews', c: '22 interviews', b: 'Key themes: frustration with counter dependency, fear of looking incompetent in front of customers, and desire for real-time inventory access.' },
            { l: 'Store Manager Interviews', c: '8 interviews', b: 'Discussed their need for live floor visibility, sales pacing alerts, and staff accountability without micromanagement.' },
            { l: 'Competitive Benchmarking', c: 'Square, Shopify, Lightspeed, Toast', b: 'Evaluated industry norms and identified differentiation opportunities across four leading platforms.' },
          ].map(m => (
            <div key={m.l} style={{ display: 'grid', gridTemplateColumns: 'minmax(160px,220px) 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(20px,2.5vw,28px) 0', borderBottom: `1px solid ${BR}`, alignItems: 'start' }} className="cs-method-row">
              <div><p style={{ fontSize: '14px', fontWeight: 600, color: DK, margin: '0 0 4px' }}>{m.l}</p><p style={{ fontSize: '12px', color: AA, fontWeight: 500, margin: 0 }}>{m.c}</p></div>
              <p style={{ fontSize: 'clamp(14px,1.2vw,15px)', lineHeight: 1.75, color: BD, margin: 0 }}>{m.b}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* KEY FINDINGS */}
      <Wrap bg={BA}>
        <SL>Key Findings</SL>
        <H2>What the Research Revealed</H2>
        <div style={g3}>
          {[
            { v: '73%', b: 'of staff walk more than 200m per shift just to process transactions at the counter' },
            { v: '4.2 min', b: 'average time lost per customer when staff must leave to check inventory availability' },
            { v: '#1', b: 'driver of negative reviews was customer wait time during peak periods' },
            { v: '0 sec', b: 'current manager visibility into live transaction volumes without checking the back office system' },
          ].map(s => (
            <div key={s.v} style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(18px,2vw,24px)' }}>
              <p style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: AA, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.v}</p>
              <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
        <Card style={{ marginTop: 20 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AA, margin: '0 0 16px' }}>Key Insights</p>
          {['Checkout speed directly impacts customer satisfaction — a 1-minute reduction in wait time correlates with a 12% increase in NPS.', 'Staff feel more confident when they can answer inventory questions immediately without leaving the customer.', 'Managers make better shift decisions when they receive real-time sales pacing data, not end-of-day reports.', 'The most feared scenario for cashiers is a payment failure at the end of a long transaction — error handling needs to be graceful and fast.'].map(i => (
            <div key={i} style={{ display: 'flex', gap: 12, fontSize: 'clamp(14px,1.2vw,15px)', color: BD, lineHeight: 1.7, marginBottom: 10 }}>
              <span style={{ color: AC, flexShrink: 0, fontWeight: 700 }}>→</span>{i}
            </div>
          ))}
        </Card>
      </Wrap>

      {/* PERSONAS */}
      <Wrap>
        <SL>User Personas</SL>
        <H2>Who We Were Designing For</H2>
        <div style={g3}>
          {[
            { i: 'P', n: 'Priya, 26', r: 'Sales Associate', goals: ['Help customers find the right product quickly', 'Complete transactions without going to the counter', 'Access stock information on the spot'], pains: ["Walking back to the counter breaks the selling moment", "Can't process a sale mid-floor conversation", "Embarrassed when she can't answer stock queries"] },
            { i: 'A', n: 'Arjun, 38', r: 'Store Manager', goals: ['Monitor floor performance in real time', 'Spot bottlenecks before they create queues', 'Make data-driven staffing decisions during shifts'], pains: ['Reports arrive too late to act on', 'Blind to what\'s happening without checking the back office', "Can't identify high-performing staff without manual observation"] },
            { i: 'R', n: 'Ravi, 31', r: 'Cashier', goals: ['Process payments quickly and accurately', 'Handle returns and exchanges with confidence', 'End shift without a cash discrepancy'], pains: ['Payment errors are stressful and slow to resolve', 'Manual receipt printing slows checkout dramatically', 'No fallback when the primary terminal goes down'] },
          ].map(p => (
            <Card key={p.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${N}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: N }}>{p.i}</span>
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: 0 }}>{p.n}</p>
                  <p style={{ fontSize: '12px', color: AA, margin: 0, fontWeight: 500 }}>{p.r}</p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Goals</p>
                {p.goals.map(g => <p key={g} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#3a8c6e' }}>✓</span>{g}</p>)}
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RD, margin: '0 0 8px' }}>Pain Points</p>
                {p.pains.map(pa => <p key={pa} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: RD }}>×</span>{pa}</p>)}
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* DESIGN PRINCIPLES */}
      <Wrap bg={BA}>
        <SL>Design Principles</SL>
        <H2>The Rules We Designed By</H2>
        <div style={g2}>
          {[
            { t: 'Speed Over Completeness', b: 'Every screen optimises for the fastest path to the most common action. Power features exist but never block the primary flow.' },
            { t: 'Clarity Under Pressure', b: 'Retail floors are loud, bright, and rushed. Typography is large, contrast is high, and every CTA is unmistakable.' },
            { t: 'Mobility-First', b: 'Designed for one hand. Bottom-heavy navigation, thumb-reachable actions, and no interaction that requires precision grip.' },
            { t: 'Efficiency by Default', b: 'Frequent tasks are pre-populated, suggested, or auto-completed. Staff should never re-enter information the system already knows.' },
            { t: 'Accuracy Without Anxiety', b: 'Clear confirmation states, forgiving error flows, and undo capability everywhere remove the fear of making a mistake.' },
            { t: 'Scalability Built In', b: 'The architecture supports single-store independents and 500-location chains without UX compromises at either end.' },
          ].map((p, i) => (
            <div key={p.t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: AC, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
              <div><p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{p.t}</p><p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{p.b}</p></div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* DESIGN EXPLORATION */}
      <Wrap>
        <SL>Design Exploration</SL>
        <H2>Iterating Toward Clarity</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
          {[
            { l: 'Round 1 — Workflow Simplification', p: 'The checkout flow originally required 9 steps — mirroring the legacy desktop system\'s logic, not the user\'s mental model.', c: 'Reduced checkout from 9 steps to 4 by removing confirmation screens that repeated information already shown. Task completion improved by 40% in testing with 6 cashiers.' },
            { l: 'Round 2 — Navigation Architecture', p: 'Tested tab bar vs. drawer navigation vs. gesture-based navigation to find the right pattern for retail floor use.', c: 'Tab bar won decisively — staff couldn\'t spare cognitive bandwidth for gesture discovery under floor pressure.' },
            { l: 'Round 3 — Task Prioritisation', p: 'Early home screen included all features equally — creating cognitive overload for staff under time pressure.', c: 'Heat-mapped which actions were accessed most in prototype testing. Restructured the home screen around the top 5 daily actions and moved edge-case features behind a "More" overflow.' },
          ].map(it => (
            <Card key={it.l}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: AA, margin: '0 0 14px', letterSpacing: '0.04em' }}>{it.l}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(16px,2.5vw,32px)' }} className="cs-iter">
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RD, margin: '0 0 8px' }}>Problem</p><p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{it.p}</p></div>
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Change</p><p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{it.c}</p></div>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* FEATURES */}
      <section style={{ background: BG }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL>Final Solution</SL>
          <H2>The Product We Shipped</H2>
        </div>
        {[
          { n: 'FEATURE 01', t: 'Live Operations Dashboard', p: 'Managers had no real-time floor visibility — reports arrived end-of-day, too late to act on bottlenecks developing during the shift.', d: 'The manager dashboard surfaces live sales pacing, queue depth by zone, per-staff transaction metrics, and inventory alerts — all in one view, updating in real time.', o: 'Managers reduced reactive firefighting by 60%. Shift performance summaries accessible in one tap eliminated 45 minutes of daily manual admin.' },
          { n: 'FEATURE 02', t: 'Contextual Product Search', p: 'Staff were switching between 3 apps to answer a single stock question, breaking the selling moment every time.', d: 'Search by name, SKU, or barcode scan. Inventory availability is displayed inline — no separate query required. Includes real-time stock per size/colour and alternative suggestions when out of stock.', o: 'Staff reported 85% higher confidence answering customer queries. Average stock query time dropped from 4.2 minutes to under 10 seconds.' },
          { n: 'FEATURE 03', t: 'Smart Cart & Sales Processing', p: 'Cart abandonment before checkout reached 18% — navigating away from the product list caused staff to lose their search context.', d: 'The cart is a persistent overlay always visible throughout the session. Discounts, bundles, and loyalty points auto-applied based on the customer profile. Draft cart saves automatically if call is received.', o: 'Cart abandonment before checkout dropped from 18% to 4%. Reorder conversion rate increased significantly as staff stopped losing cart context.' },
          { n: 'FEATURE 04', t: 'Unified Payment Processing', p: 'Multiple payment methods required staff to navigate different interfaces, creating confusion and slowing checkout during busy periods.', d: 'All payment methods — cash, card, UPI, wallet, split payment — in one interface. The payment interface flips to customer-facing mode when the card reader is tapped, eliminating awkward phone handoffs.', o: 'Payment step completion time reduced by 38%. Split payment errors dropped to near zero from 12% on the legacy system.' },
          { n: 'FEATURE 05', t: 'Inventory Management', p: 'Every sale updated inventory in batches — discrepancies built up silently and were only discovered during physical counts.', d: 'Every sale instantly updates inventory in real time. Low-stock alerts appear proactively before items run out. Staff can initiate stock transfers between zones directly from the app.', o: 'Inventory accuracy improved to 99.4%. Low-stock alerts eliminated emergency stockroom runs during trading hours.' },
          { n: 'FEATURE 06', t: 'Reports & Customer Management', p: 'Management reporting was a back-office function — unavailable on the shop floor, always delayed, and requiring manual extraction.', d: 'Customer purchase history accessible at point of conversation for personalised recommendations. Automated shift-end summaries and top-performing products updated hourly, exportable for accounting integration.', o: 'Shift report generation time reduced from 45 minutes to zero — fully automated. Staff-facing customer history drove a 22% uplift in upsell conversion.' },
        ].map((f, i) => (
          <div key={f.n} style={{ background: i % 2 === 0 ? WH : BA, borderTop: `1px solid ${BR}` }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,5vw,80px)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
                <span style={{ background: N, color: WH, fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: 6, letterSpacing: '0.08em' }}>{f.n}</span>
                <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: DK, margin: 0, letterSpacing: '-0.015em' }}>{f.t}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px,2vw,24px)' }} className="cs-pdo">
                {[{ label: 'Problem', body: f.p, color: RD }, { label: 'Decision', body: f.d, color: AA }, { label: 'Outcome', body: f.o, color: '#3a8c6e' }].map(col => (
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
        <H2>The Choices That Defined the Product</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
          {[
            { t: 'Bottom navigation for one-handed use', r: '22% fewer mis-taps in usability testing after switching from top navigation. Retail staff carry stock, hold products, and gesture constantly. Top-of-screen navigation is ergonomically hostile to people who work on their feet.', re: 'Every primary action lives within thumb reach on a 6″ device.' },
            { t: 'Persistent cart as a floating overlay, not a separate screen', r: 'Early testing revealed that navigating away from the product list to check the cart caused staff to lose their search context.', re: 'Cart abandonment before checkout dropped from 18% to 4% in prototype testing.' },
            { t: 'Reducing checkout from 9 steps to 4', r: 'The original flow mirrored the legacy desktop system\'s logic, not the user\'s mental model. We removed redundant confirmation screens, merged product and quantity, and made payment selection context-aware.', re: 'Average checkout completion time fell from 4.8 min to 2.9 min across all product categories.' },
            { t: 'In-context inventory display, not a separate lookup', r: 'Staff were switching between 3 apps to answer a single stock question. Embedding live inventory directly into the product detail card eliminated the mental overhead.', re: 'Staff reported 85% higher confidence answering customer queries in post-deployment survey.' },
            { t: 'No loading screens for critical paths', r: 'We aggressively optimised the product search, cart add, and payment confirmation states to use optimistic UI — showing success before server confirmation where safe.', re: 'Perceived app speed rated 4.7/5 by staff in post-launch survey despite network variability on the shop floor.' },
          ].map((d, i) => (
            <Card key={d.t}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <span style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: `${AA}30`, flexShrink: 0, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: 0, lineHeight: 1.4 }}>{d.t}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(16px,2.5vw,32px)' }} className="cs-decision">
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: BD, margin: '0 0 8px' }}>Rationale</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.r}</p></div>
                <div><p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Result</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.re}</p></div>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* SUCCESS METRICS */}
      <section style={{ background: N }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL dark>Success Metrics</SL>
          <H2 dark>Measuring What Matters</H2>
          <div style={g3}>
            {[
              { l: 'Transaction Completion Rate', v: '98.2%', d: 'Transactions completed without abandonment or error' },
              { l: 'Average Checkout Time', v: '2.9 min', d: 'Down from 4.8 min — a 40% improvement' },
              { l: 'Inventory Accuracy', v: '99.4%', d: 'Real-time sync reduced discrepancy incidents by 91%' },
              { l: 'Staff Efficiency', v: '+35%', d: 'Transactions per staff member per shift hour' },
              { l: 'Customer Satisfaction', v: '4.8/5', d: 'Post-purchase survey NPS across all locations' },
              { l: 'Sales Throughput', v: '+28%', d: 'Total daily transaction volume with same headcount' },
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
        <H2>Where We Go From Here</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { t: 'Offline Mode', tl: 'Q3 2025', d: 'Transactions queue locally when connectivity is lost and sync automatically when the device reconnects — eliminating dependency on stable shop-floor WiFi.' },
            { t: 'AI Product Search', tl: 'Q4 2025', d: 'Natural language queries matched against the full product catalogue using on-device ML.' },
            { t: 'Customer Loyalty Integration', tl: 'Q1 2026', d: 'Unified loyalty programme visible at point of sale — points balance, tier status, and personalised recommendations surface automatically at cart stage.' },
            { t: 'Smart Inventory Recommendations', tl: 'Q2 2026', d: 'Predictive reorder suggestions based on sales velocity, seasonal patterns, and supplier lead times — surfaced as manager alerts, not back-office reports.' },
            { t: 'Analytics Dashboard', tl: 'Q3 2026', d: 'Cohort analysis, basket analysis, and staff performance benchmarking — all accessible on mobile, with shareable snapshot reports for stakeholders.' },
            { t: 'Multi-Store Management', tl: 'Q1 2027', d: 'Regional managers can switch between store views, compare performance, and push product updates across the entire estate from a single app.' },
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
        <H2>Designing for People Who Never Stop Moving</H2>
        <Body style={{ maxWidth: 700 }}>Mobile POS taught me that enterprise UX is less about features and more about the physics of work. The constraints aren{"'"}t technical — they{"'"}re environmental. Retail staff are on their feet, under fluorescent light, with a customer watching, and a queue forming behind them. Every interaction has to earn its place in that context.</Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '28px 0' }}>
          {[
            { lead: 'Prototype in the real environment, not the lab.', body: "Prototype testing in a studio is a necessary step — but it lies. We only found our real usability issues when we took prototypes into an active store during trading hours. The noise, the interruptions, and the physical fatigue revealed failure modes that lab testing completely missed." },
            { lead: 'A mobile POS is a node in a larger operational system.', body: 'Every design decision had upstream and downstream consequences: changing the cart flow affected inventory sync timing; changing the search algorithm affected how managers interpreted low-stock alerts. I learned to model the system, not just the screen.' },
            { lead: 'Simple UX is the output of relentless cross-functional work.', body: 'Getting to 4 steps required months of constraint negotiation — with engineers, with operations, and with compliance. Simple UX doesn\'t happen by accident.' },
            { lead: 'Confidence is a design outcome.', body: 'A cashier who makes a mistake and can\'t recover it will abandon the app and go back to the counter. We invested heavily in the onboarding experience and error recovery flows — because the experience only succeeds if staff trust it.' },
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
      </Wrap>

      <CaseStudyPrevNext currentSlug="mobile-pos" />
    </>
  );
}
