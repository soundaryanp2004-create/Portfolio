import CaseStudyPrevNext from '@/components/CaseStudyPrevNext';

/* ── Brand tokens ── */
const N = '#012b4a';
const CY = '#00b8db';
const CA = '#0092b8';
const DK = '#0f172b';
const BD = '#45556c';
const BG = '#f8f7f5';
const BA = '#edf4f7';
const BR = '#dce8ed';
const WH = '#ffffff';
const RED = '#e05252';

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

function SLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? CY : CA, margin: '0 0 14px' }}>
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

function Body({ children, light, style }: { children: React.ReactNode; light?: boolean; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', fontWeight: 400, lineHeight: 1.8, color: light ? 'rgba(255,255,255,0.75)' : BD, margin: '0 0 20px', ...style }}>
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

function CardLabel({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: CA, margin: '0 0 8px' }}>{children}</p>;
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: '0 0 10px', lineHeight: 1.3 }}>{children}</p>;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '14px', lineHeight: 1.75, color: BD, margin: 0 }}>{children}</p>;
}

/* ── Grid helpers ── */
const grid2: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px,2vw,24px)' };
const grid3: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(14px,2vw,20px)' };

/* ══ HERO ══ */
function AbraajHero() {
  return (
    <section style={{ background: N, position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: -100, left: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,184,219,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: -50, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,184,219,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px) clamp(56px,7vw,100px)', position: 'relative', zIndex: 1 }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
          {['Water Ordering Platform', 'Service Design Redesign · 2024 — 2025'].map(tag => (
            <span key={tag} style={{ background: 'rgba(0,184,219,0.15)', border: '1px solid rgba(0,184,219,0.3)', color: '#53eafd', fontSize: '13px', fontWeight: 500, padding: '5px 14px', borderRadius: 100 }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, letterSpacing: '-0.035em', color: WH, lineHeight: 1, margin: '0 0 24px' }}>
          ABRAAJ
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(17px,2vw,24px)', fontWeight: 400, lineHeight: 1.6, color: '#cefafe', maxWidth: 640, margin: '0 0 48px' }}>
          Making water ordering and delivery tracking simple, reliable, and transparent for households and businesses.
        </p>

        {/* Metadata row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
          {[
            { label: 'Role', value: 'Lead UX Designer' },
            { label: 'Timeline', value: '5 months' },
            { label: 'Platform', value: 'iOS · Android' },
            { label: 'Tools', value: 'Figma · Maze · Miro' },
          ].map(m => (
            <div key={m.label}>
              <p style={{ fontSize: '13px', color: CY, fontWeight: 400, margin: '0 0 4px', letterSpacing: '0.02em' }}>{m.label}</p>
              <p style={{ fontSize: '15px', fontWeight: 600, color: WH, margin: 0 }}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ EXECUTIVE SUMMARY ══ */
function AbraajSummary() {
  const stats = [
    { value: '+41%', label: 'Repeat Order Rate' },
    { value: '100%', label: 'Delivery Visibility' },
    { value: '−63%', label: 'Support Call Reduction' },
    { value: '4.7/5', label: 'Customer Satisfaction' },
  ];
  return (
    <Wrap>
      <SLabel>Executive Summary</SLabel>
      <H2>Why This Redesign Mattered</H2>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }} className="abraaj-2col">
        <div>
          <Body>ABRAAJ is a water delivery platform serving residential and commercial customers across urban and suburban districts. When we began this project, ABRAAJ had a loyal customer base, a reliable delivery fleet, and a serious problem: every single order still had to be placed by phone. There was no app, no website, no way for a customer to check their order status without calling — and no way for drivers or dispatchers to coordinate without WhatsApp and paper logs.</Body>
          <Body>The business was growing. But its operational model couldn{"'"}t scale with demand. Support calls were climbing. Repeat order rates were stagnant. Customers were loyal — water is an essential commodity — but not because they loved the experience. They stayed because switching was inconvenient, not because ABRAAJ had earned their trust through the product.</Body>
          <Body style={{ margin: 0 }}>This case study documents the end-to-end UX process I led: from discovery and research through information architecture, design exploration, usability testing, and final delivery. The outcome was a mobile platform that transformed ABRAAJ from a phone-dependent logistics operation into a digitally-led service with real-time order tracking, one-tap reordering, and a measurable impact on both customer satisfaction and business performance.</Body>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,1.5vw,16px)' }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: BA, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(16px,2vw,24px)' }}>
              <p style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: CA, margin: '0 0 6px', letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontSize: '13px', color: BD, margin: 0, lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* ══ BACKGROUND & CONTEXT ══ */
function AbraajBackground() {
  const cards = [
    { title: 'Phone Call Dependency', body: "Customers had to call to place every order. No app, no website, no record of their preferences. A missed call meant a missed delivery." },
    { title: 'No Delivery Visibility', body: "Once the order was placed, customers were in the dark. There was no ETA, no driver location, no status update — just uncertainty until a knock at the door." },
    { title: 'Coordination Chaos', body: "Dispatchers managed orders manually across whiteboards, phone logs, and memory. Errors were common. Customers experienced duplicate deliveries, missed slots, and incorrect quantities." },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Background &amp; Context</SLabel>
      <H2>The Water Delivery Ecosystem — Before</H2>
      <div style={grid3}>
        {cards.map(c => (
          <Card key={c.title}>
            <CardTitle>{c.title}</CardTitle>
            <CardBody>{c.body}</CardBody>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ PROBLEM STATEMENT ══ */
function AbraajProblem() {
  const problems = [
    "Order uncertainty — customers never know if the order was placed correctly",
    "No delivery tracking — location and ETA are completely invisible",
    "Communication gaps between customer, dispatcher, and driver",
    "Trust erosion from repeated delays, errors, and missed deliveries",
    "High ordering friction discourages repeat purchases",
    "Limited operational visibility prevents managers from spotting issues",
    "Manual processes create bottlenecks that scale poorly",
  ];
  return (
    <Wrap>
      <SLabel>Problem Statement</SLabel>
      <H2>The Problem We Were Solving</H2>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }} className="abraaj-2col">
        <div style={{ background: `${N}08`, border: `1.5px solid ${BR}`, borderLeft: `4px solid ${CY}`, borderRadius: 12, padding: 'clamp(20px,2.5vw,32px)' }}>
          <p style={{ fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.7, color: DK, margin: 0 }}>
            "Customers ordering an essential service — water — have no visibility into when it will arrive, no way to manage their order without calling, and no confidence that their request has even been received."
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {problems.map(p => (
            <li key={p} style={{ display: 'flex', gap: 12, fontSize: 'clamp(14px,1.2vw,16px)', color: BD, lineHeight: 1.6 }}>
              <span style={{ color: RED, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
}

/* ══ RESEARCH OBJECTIVES ══ */
function AbraajResearchObjectives() {
  const objs = [
    { title: 'Ordering Behaviour', body: "How do customers currently decide when and how much water to order? What triggers the decision, and what stands in the way?" },
    { title: 'Delivery Pain Points', body: "Where do delays, miscommunications, and failures occur most frequently? What does the customer experience when something goes wrong?" },
    { title: 'Customer Expectations', body: "What does a trustworthy, convenient water delivery experience look like to different customer types?" },
    { title: 'Operational Bottlenecks', body: "Where does the dispatch and coordination process break down? What information do drivers and dispatchers need to work effectively?" },
    { title: 'Trust Requirements', body: "What signals and interactions build — or destroy — customer trust in a recurring essential service?" },
    { title: 'Repeat Purchase Friction', body: "Why do customers who intend to reorder delay doing so? What would make reordering feel as easy as a single tap?" },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Research Objectives</SLabel>
      <H2>What We Set Out to Understand</H2>
      <div style={grid3}>
        {objs.map(o => (
          <Card key={o.title}>
            <CardTitle>{o.title}</CardTitle>
            <CardBody>{o.body}</CardBody>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ RESEARCH & DISCOVERY ══ */
function AbraajResearch() {
  const methods = [
    { label: 'Customer Interviews', count: '18 interviews', body: "Residential and commercial customers across three districts. We explored ordering routines, moments of frustration, and what \"good\" looked like to them. The dominant theme: not knowing what was happening after placing an order was more stressful than the delivery itself being late." },
    { label: 'Vendor & Operations Interviews', count: '6 interviews', body: "With ABRAAJ dispatchers and managers. Revealed that dispatchers were managing 50+ daily orders via a combination of WhatsApp, notebook logs, and memory — a system that worked only because specific individuals had tacit knowledge no system captured." },
    { label: 'Delivery Staff Interviews', count: '8 interviews', body: "Drivers described routinely receiving unclear addresses, last-minute order changes, and customers who weren't home — all without any digital tool to communicate the issue or reroute efficiently." },
    { label: 'Heuristic Evaluation', count: 'Competitor audit', body: "Benchmarked 5 water delivery apps and 4 adjacent last-mile delivery experiences (grocery, pharmacy). Identified consistent patterns: order confirmation SMS, live driver tracking, and one-tap reorder as table stakes for customer satisfaction." },
    { label: 'Journey Mapping', count: 'Full service blueprint', body: "Mapped the customer journey alongside the parallel operations journey, surfacing 11 specific friction moments — 7 of which were invisible to customers but created downstream errors." },
  ];
  return (
    <Wrap>
      <SLabel>Research &amp; Discovery</SLabel>
      <H2>Listening to the People in the System</H2>
      <Body style={{ maxWidth: 640 }}>We conducted four weeks of mixed-methods research — spanning residential customers, office administrators, delivery drivers, and operations staff — to map the full service experience from ordering intent to post-delivery feedback.</Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${BR}` }}>
        {methods.map(m => (
          <div key={m.label} style={{ display: 'grid', gridTemplateColumns: 'minmax(160px, 220px) 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(20px,2.5vw,28px) 0', borderBottom: `1px solid ${BR}`, alignItems: 'start' }} className="abraaj-method-row">
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, color: DK, margin: '0 0 4px' }}>{m.label}</p>
              <p style={{ fontSize: '12px', color: CA, fontWeight: 500, margin: 0 }}>{m.count}</p>
            </div>
            <p style={{ fontSize: 'clamp(14px,1.2vw,15px)', lineHeight: 1.75, color: BD, margin: 0 }}>{m.body}</p>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ KEY FINDINGS ══ */
function AbraajFindings() {
  const stats = [
    { value: '78%', body: "of customers said they would order more frequently if they could track their delivery in real time" },
    { value: '4.3×', body: "more support calls occurred on delayed delivery days compared to on-time delivery days" },
    { value: '#1', body: "reason for not reordering was \"I'm not sure when I'll run out\" — a solvable prediction problem" },
    { value: '67%', body: "of ordering friction came from having to remember previous order details when calling" },
    { value: '0', body: "customers received proactive communication when their delivery was delayed — creating anxiety" },
    { value: '3.8 min', body: "average time spent per customer call just to confirm order receipt and expected time" },
  ];
  const insights = [
    "Users want predictable delivery times — even an approximate window is significantly better than no information.",
    "Ordering through calls creates friction that discourages impulse reorders, especially for smaller quantities.",
    "Trust is built incrementally through consistent, proactive communication — not through design alone.",
    "Repeat orders should require near-zero effort — customers know what they want; the app should remember it.",
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Key Findings</SLabel>
      <H2>What the Research Told Us</H2>
      <div style={grid3}>
        {stats.map(s => (
          <div key={s.value} style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(18px,2vw,24px)' }}>
            <p style={{ fontSize: 'clamp(26px,3vw,36px)', fontWeight: 700, color: CA, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.value}</p>
            <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'clamp(28px,3vw,40px)', background: WH, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(20px,2.5vw,28px)' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: CA, margin: '0 0 16px' }}>Key Insights</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {insights.map(i => (
            <div key={i} style={{ display: 'flex', gap: 12, fontSize: 'clamp(14px,1.2vw,15px)', color: BD, lineHeight: 1.7 }}>
              <span style={{ color: CY, flexShrink: 0, fontWeight: 700 }}>→</span>
              {i}
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* ══ USER PERSONAS ══ */
function AbraajPersonas() {
  const personas = [
    {
      initial: 'F', name: 'Fatima, 38', role: 'Residential Customer',
      bio: "Orders every 10–14 days. Uses water for drinking, cooking, and one elderly parent. Can't risk running out.",
      goals: ["Know exactly when water will arrive", "Order in 30 seconds without a phone call", "Set up automatic reorders for peace of mind"],
      pains: ["Never knows if her call went through correctly", "Has to explain her address every single time", "Stress when water runs out and she can't reach the vendor"],
    },
    {
      initial: 'K', name: 'Khalid, 44', role: 'Office Administrator',
      bio: "Places 3–4 orders per week. Manages vendor relationships for the whole office. Values reliability over price.",
      goals: ["Manage water orders for 60 staff without manual tracking", "Receive invoices automatically each month", "Never have to follow up on a pending order"],
      pains: ["Manually logs every order in a spreadsheet", "Constantly chasing delivery status for impatient staff", "Approval process delayed by lack of digital records"],
    },
    {
      initial: 'O', name: 'Omar, 29', role: 'Delivery Agent',
      bio: "6-day work week, 08:00–17:00. Covers 2 districts. Knows his regular customers by name — but depends on memory for most.",
      goals: ["Complete 18+ deliveries per shift without confusion", "Know instantly if a customer isn't home", "Have all delivery details on one screen"],
      pains: ["Receives orders on WhatsApp — often incomplete or duplicate", "No system to flag failed deliveries to the dispatcher", "Customers call him directly, not the office, creating role confusion"],
    },
  ];
  return (
    <Wrap>
      <SLabel>User Personas</SLabel>
      <H2>Who We Were Designing For</H2>
      <div style={grid3}>
        {personas.map(p => (
          <Card key={p.name} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${N}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: N }}>{p.initial}</span>
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: 0 }}>{p.name}</p>
                <p style={{ fontSize: '12px', color: CA, margin: 0, fontWeight: 500 }}>{p.role}</p>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: BD, lineHeight: 1.65, margin: 0 }}>{p.bio}</p>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Goals</p>
              {p.goals.map(g => <p key={g} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#3a8c6e' }}>✓</span>{g}</p>)}
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RED, margin: '0 0 8px' }}>Pain Points</p>
              {p.pains.map(pa => <p key={pa} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: RED }}>×</span>{pa}</p>)}
            </div>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ CUSTOMER JOURNEY ══ */
function AbraajJourney() {
  const stages = [
    { stage: 'Need Water', emotion: 'Neutral', emoji: '😌', quote: '"The tank is running low."', problem: 'Realisation happens too late — no buffer.' },
    { stage: 'Search Vendor', emotion: 'Mild Friction', emoji: '😌', quote: '"Which number did I save?"', problem: 'No centralised vendor list; relies on memory or chat history.' },
    { stage: 'Place Order', emotion: 'Anxious', emoji: '😟', quote: '"Did they understand my address? Did it go through?"', problem: 'No confirmation, no reference number, no peace of mind.' },
    { stage: 'Wait', emotion: 'Frustrated', emoji: '😟', quote: '"It\'s been 2 hours. Should I call again?"', problem: 'Completely in the dark. Every hour without delivery increases anxiety.' },
    { stage: 'Track Delivery', emotion: 'Helpless', emoji: '😟', quote: '"I have no idea where the driver is."', problem: 'There is no tracking. The only option is a phone call.' },
    { stage: 'Receive Order', emotion: 'Relieved', emoji: '😌', quote: '"Finally. I hope the quantity is right."', problem: 'Relief mixed with unresolved frustration — the experience was too hard.' },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Customer Journey Mapping</SLabel>
      <H2>The Emotional Rollercoaster of Getting Water Delivered</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {stages.map((s, i) => (
          <div key={s.stage} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'clamp(16px,2.5vw,32px)', padding: 'clamp(16px,2vw,22px) 0', borderBottom: i < stages.length - 1 ? `1px solid ${BR}` : 'none', alignItems: 'center' }} className="abraaj-journey-row">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <span style={{ fontSize: '22px' }}>{s.emoji}</span>
              <p style={{ fontSize: '14px', fontWeight: 600, color: DK, margin: 0 }}>{s.stage}</p>
              <p style={{ fontSize: '11px', color: s.emotion === 'Neutral' || s.emotion === 'Relieved' ? '#3a8c6e' : RED, fontWeight: 500, margin: 0 }}>{s.emotion}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(12px,2vw,24px)' }} className="abraaj-journey-inner">
              <p style={{ fontSize: '14px', color: '#5c4382', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>{s.quote}</p>
              <p style={{ fontSize: '13px', color: BD, lineHeight: 1.65, margin: 0 }}>{s.problem}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ DESIGN GOALS ══ */
function AbraajGoals() {
  const goals = [
    { text: "Reduce ordering friction to under 60 seconds for a standard reorder", tag: "< 60s reorder" },
    { text: "Achieve 100% delivery visibility — every order trackable from confirmation to door", tag: "Live tracking" },
    { text: "Increase repeat order rate within 14-day cycle by 35%+", tag: "+35% repeats" },
    { text: "Reduce inbound support calls about order status by at least 50%", tag: "−50% calls" },
    { text: "Deliver proactive delay notifications before customers ask", tag: "Proactive alerts" },
    { text: "Achieve 85%+ task completion on first use without onboarding tutorial", tag: "85%+ discoverability" },
  ];
  return (
    <Wrap>
      <SLabel>Design Goals</SLabel>
      <H2>Measurable Targets We Were Designing Toward</H2>
      <div style={grid2}>
        {goals.map(g => (
          <div key={g.tag} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: 'clamp(14px,1.8vw,20px) clamp(16px,2vw,24px)', background: WH, border: `1px solid ${BR}`, borderRadius: 10 }}>
            <p style={{ fontSize: '14px', color: BD, lineHeight: 1.55, margin: 0 }}>{g.text}</p>
            <span style={{ background: `${CA}15`, color: CA, fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>{g.tag}</span>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ IA ══ */
function AbraajIA() {
  const navItems = ['Home', 'Order Water', 'Track Orders', 'Subscriptions', 'Notifications', 'Profile', 'Support', 'Payment'];
  return (
    <Wrap bg={BA}>
      <SLabel>Information Architecture</SLabel>
      <H2>Designing a Structure Around Real Usage Patterns</H2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
        {navItems.map(item => (
          <span key={item} style={{ background: WH, border: `1px solid ${BR}`, color: DK, fontSize: '14px', fontWeight: 500, padding: '8px 18px', borderRadius: 8 }}>{item}</span>
        ))}
      </div>
      <Body style={{ maxWidth: 700 }}>The IA was structured around frequency and urgency, not system categories. Order Water and Track Orders — the two highest-frequency, highest-anxiety actions — occupy the bottom navigation bar. Subscriptions and notifications support the repeat-ordering workflow. Support was elevated from a buried settings page to a first-level destination after research showed customers needed it urgently but couldn{"'"}t find it.</Body>
    </Wrap>
  );
}

/* ══ USER FLOW ══ */
function AbraajUserFlow() {
  const primarySteps = [
    { num: '01', title: 'Order Placement', desc: "Customer selects quantity, saved address, and preferred delivery window." },
    { num: '02', title: 'Order Confirmation', desc: "Instant in-app confirmation + SMS with order ID and estimated window." },
    { num: '03', title: 'Delivery Tracking', desc: "Live driver location on map with real-time ETA — no calls needed." },
    { num: '04', title: 'Delivery Completion', desc: "Push notification on arrival. Digital signature or photo confirmation." },
    { num: '05', title: 'Reorder', desc: "One-tap reorder from order history. Subscription prompt for recurring customers." },
  ];
  const altFlows = [
    { title: 'Delayed Delivery', desc: "Proactive alert → Revised ETA → One-tap cancellation option if delay is unacceptable." },
    { title: 'Customer Not Home', desc: "Driver marks as \"attempted\" → Customer receives notification with rescheduling option → Auto-retry next available slot." },
    { title: 'Subscription Reorder', desc: "App surfaces reminder 3 days before estimated run-out → Confirm or modify → Zero-input reorder confirmed." },
    { title: 'First-Time User', desc: "Address capture → Preferred quantity setup → First order flow with optional onboarding guide." },
  ];
  return (
    <Wrap>
      <SLabel>User Flow</SLabel>
      <H2>End-to-End Order Flow — Designed for Confidence</H2>
      <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: BD, margin: '0 0 16px' }}>Primary Order Flow</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, marginBottom: 36 }}>
        {primarySteps.map((s, i) => (
          <div key={s.num} style={{ display: 'flex', alignItems: 'stretch', flex: '1 1 140px', minWidth: 0 }}>
            <div style={{ background: WH, border: `1px solid ${BR}`, borderRadius: i === 0 ? '10px 0 0 10px' : i === primarySteps.length - 1 ? '0 10px 10px 0' : 0, borderLeft: i > 0 ? 'none' : undefined, padding: 'clamp(16px,2vw,22px)', flex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: CY, margin: '0 0 6px' }}>{s.num}</p>
              <p style={{ fontSize: '13px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{s.title}</p>
              <p style={{ fontSize: '12px', color: BD, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: BD, margin: '0 0 16px' }}>Alternative Flows</p>
      <div style={grid2}>
        {altFlows.map(f => (
          <Card key={f.title}>
            <CardTitle>{f.title}</CardTitle>
            <CardBody>{f.desc}</CardBody>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ DESIGN PRINCIPLES ══ */
function AbraajPrinciples() {
  const principles = [
    { title: 'Transparency Over Assumption', body: "Every stage of the delivery journey surfaces information proactively. If something has changed, the customer knows before they have to ask." },
    { title: 'Reliability as a Design Outcome', body: "Reliability isn't just about delivery performance — it's about consistent UI behaviour, honest status labels, and error states that explain rather than confuse." },
    { title: 'Convenience by Default', body: "The most common action (reorder) is always one tap away. Saved addresses, saved quantities, and intelligent defaults eliminate repetition." },
    { title: 'Trust Through Consistency', body: "Trust is earned through repeated positive experiences. Every interaction reinforces the same promise: we told you what would happen, and it did." },
    { title: 'Efficiency Without Sacrifice', body: "Speed of use should never come at the cost of accuracy. Fast interactions include the right level of confirmation to prevent costly errors." },
    { title: 'Accessibility as a Given', body: "Water delivery serves all demographics — including less tech-literate users. Large text, simple language, and a maximum of 3 steps to any outcome are non-negotiable." },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Design Principles</SLabel>
      <H2>The Values That Guided Every Decision</H2>
      <div style={grid2}>
        {principles.map((p, i) => (
          <div key={p.title} style={{ display: 'flex', gap: 14 }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: CY, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{p.title}</p>
              <p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ DESIGN EXPLORATION ══ */
function AbraajExploration() {
  const iterations = [
    {
      label: 'Iteration 1 — Status Communication',
      problem: "Early prototypes used text-based order status labels ('Confirmed', 'Dispatched', 'En Route'). Testing showed users didn't trust these labels because they didn't update frequently enough.",
      change: "Replaced text status with a live progress timeline + map showing driver location. Perceived delivery anxiety dropped by 60% in subsequent testing.",
    },
    {
      label: 'Iteration 2 — Reorder Interaction',
      problem: "First version of reorder required navigating to order history, finding the last order, and tapping 'Repeat'. Three steps too many.",
      change: "Introduced a persistent 'Reorder Last Delivery' card on the home screen. Reorder completion rate increased from 34% to 71% in prototype testing.",
    },
    {
      label: 'Iteration 3 — Notification Timing',
      problem: "Initial notification flow only alerted customers when the driver arrived. Testing revealed customers wanted an alert when the driver was 15 minutes away — giving them time to prepare.",
      change: "Added a pre-arrival notification trigger at 15-min ETA. Customer-reported satisfaction with the delivery experience rose from 3.2 to 4.6 during pilot.",
    },
  ];
  return (
    <Wrap>
      <SLabel>Design Exploration</SLabel>
      <H2>The Iterations That Shaped the Final Product</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
        {iterations.map(it => (
          <Card key={it.label}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: CA, margin: '0 0 14px', letterSpacing: '0.04em' }}>{it.label}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(16px,2.5vw,32px)' }} className="abraaj-iter">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: RED, margin: '0 0 8px' }}>Problem</p>
                <p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{it.problem}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Change</p>
                <p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{it.change}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ FEATURES ══ */
function AbraajFeatures() {
  const features = [
    {
      num: 'FEATURE 01', title: 'Home Experience',
      problem: "Customers had no anchor point — no sense of where they were in their water supply cycle.",
      decision: "The home screen surfaces three contextual states: active order tracking, upcoming subscription delivery, and quick reorder. Customers always see the most relevant action first.",
      outcome: "Home screen became the most-visited screen daily, with 68% of sessions starting with the reorder or track card — not with navigation.",
    },
    {
      num: 'FEATURE 02', title: 'Order Placement',
      problem: "The phone call ordering process required customers to verbally communicate address, quantity, and timing — creating errors and taking 3–5 minutes.",
      decision: "A three-step order flow: select quantity → confirm saved address → pick delivery window. Every field defaults to the last order's values. The entire flow completes in under 45 seconds.",
      outcome: "Average order placement time fell from 4.2 minutes (phone) to 38 seconds (app). Order error rate dropped to near zero.",
    },
    {
      num: 'FEATURE 03', title: 'Live Delivery Tracking',
      problem: "After placing an order, customers entered a black hole — no status, no ETA, no communication until the driver knocked.",
      decision: "Live map with driver location, progress bar with ETA, and status milestones (Order Confirmed → Preparing → En Route → Arriving). The map is always the primary focus.",
      outcome: "Inbound 'where is my delivery?' calls dropped by 71% within the first month of launch.",
    },
    {
      num: 'FEATURE 04', title: 'Proactive Notifications',
      problem: "Customers felt ignored. Delays happened without any communication, turning reasonable waits into perceived broken promises.",
      decision: "A notification system with seven trigger points: order confirmed, driver assigned, en route, 15-minute arrival warning, arrived, delivered, and delay (with revised ETA). Delay notifications lead with an apology and revised time.",
      outcome: "Customer-reported trust score increased from 3.1 to 4.4 after notification system launch — the single biggest satisfaction driver.",
    },
    {
      num: 'FEATURE 05', title: 'Subscription Management',
      problem: "Frequent customers wanted to set up regular deliveries but the manual ordering model made this impossible without persistent effort.",
      decision: "A flexible subscription builder: set quantity, delivery frequency (weekly/biweekly/monthly), preferred days, and time windows. Smart reminders surface 3 days before the estimated run-out.",
      outcome: "34% of users activated a subscription within 3 months. Subscription customers had 2.8× higher lifetime value than one-off orderers.",
    },
    {
      num: 'FEATURE 06', title: 'Payments & Support',
      problem: "Cash-on-delivery was the only payment option, requiring someone to be home at delivery time. Commercial customers couldn't access invoice history.",
      decision: "Digital wallet and card payments with saved methods. Commercial accounts get auto-generated monthly invoices as PDF downloads. A persistent support chat with 2-hour response SLA replaces the call-centre dependency.",
      outcome: "Digital payment adoption reached 58% within 6 months. Support ticket resolution time dropped from 24 hours to 4 hours.",
    },
  ];

  return (
    <section style={{ background: BG }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
        <SLabel>Final Solution</SLabel>
        <H2>The Product We Designed</H2>
      </div>
      {features.map((f, i) => (
        <div key={f.num} style={{ background: i % 2 === 0 ? WH : BA, borderTop: `1px solid ${BR}` }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,5vw,80px)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
              <span style={{ background: N, color: WH, fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: 6, letterSpacing: '0.08em' }}>{f.num}</span>
              <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: DK, margin: 0, letterSpacing: '-0.015em' }}>{f.title}</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px,2vw,24px)' }} className="abraaj-pdo">
              {[
                { label: 'Problem', body: f.problem, color: RED },
                { label: 'Decision', body: f.decision, color: CA },
                { label: 'Outcome', body: f.outcome, color: '#3a8c6e' },
              ].map(col => (
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
  );
}

/* ══ CRITICAL UX DECISIONS ══ */
function AbraajDecisions() {
  const decisions = [
    {
      title: "Persistent order tracking — always accessible, never buried",
      rationale: "Tracking was the most anxiety-reducing feature we could build. We made a deliberate choice to surface active delivery tracking as a persistent banner that appears regardless of which screen the user is on — not as a destination they navigate to.",
      result: "Users spent 40% less time navigating the app during active deliveries — they got their answer without searching.",
    },
    {
      title: "Quick reorder as the primary home screen action",
      rationale: "We could have designed a comprehensive home dashboard. Instead, research showed that 84% of sessions had one intent: reorder or check order status. We designed for the 84%, not for completeness.",
      result: "Reorder conversion rate increased from 22% to 61% — the highest single metric improvement in the project.",
    },
    {
      title: "Honest ETAs with buffer built in, not optimistic estimates",
      rationale: "Operations teams initially wanted to show best-case ETAs. Research showed that customers who received a longer ETA and got early delivery were delighted; customers who got a short ETA and received late delivery were infuriated. We built buffers into every ETA calculation.",
      result: "Late delivery complaints dropped by 48% despite no change in actual delivery speed.",
    },
    {
      title: "Proactive delay alerts lead with the new ETA — not with an apology",
      rationale: "When we tested delay notifications, customers said the most useful element was the revised expected time — not the apology copy. We restructured all delay notifications to lead with the new ETA in large text and put the apology below.",
      result: "Cancellations during delays dropped by 35% when the new ETA was the first thing customers saw.",
    },
    {
      title: "No empty state for the home screen — context always shown",
      rationale: "Early prototypes showed an empty home screen for first-time users with no active orders. Testing showed high drop-off at this point. We replaced empty states with contextual onboarding: 'You haven't ordered yet — here's how to start.'",
      result: "First-session order completion increased by 28% after eliminating the empty home state.",
    },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Critical UX Decisions</SLabel>
      <H2>The Calls That Defined the Experience</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
        {decisions.map((d, i) => (
          <Card key={d.title}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <span style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: `${CA}30`, flexShrink: 0, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: 0, lineHeight: 1.4 }}>{d.title}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(16px,2.5vw,32px)' }} className="abraaj-decision">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: BD, margin: '0 0 8px' }}>Rationale</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.rationale}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a8c6e', margin: '0 0 8px' }}>Result</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.75, margin: 0 }}>{d.result}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ ACCESSIBILITY ══ */
function AbraajAccessibility() {
  const items = [
    { title: 'Large Touch Targets', body: "All interactive elements meet 44×44pt minimum. Order, confirm, and cancel actions are 56pt — no missed taps for users with limited dexterity." },
    { title: 'Readable Typography', body: "Minimum 16sp body text across all screens. ETAs and order quantities — the most critical information — are always displayed at 24sp or larger." },
    { title: 'Clear Status Communication', body: "Status is always communicated through three channels simultaneously: icon, text label, and colour. No status relies on colour alone for meaning." },
    { title: 'Colour Accessibility', body: "All colour combinations meet WCAG AA contrast standards. The primary cyan palette was tested against both light and dark backgrounds before adoption." },
    { title: 'Simple Navigation', body: "Maximum 3 taps to any destination. No gesture-only flows. Bottom navigation remains consistent across all screens — no contextual navigation changes." },
    { title: 'Error Prevention', body: "Confirmation dialogs for destructive actions (cancel order, delete address). Inline validation during order placement catches errors before submission." },
  ];
  return (
    <Wrap>
      <SLabel>Accessibility Considerations</SLabel>
      <H2>Designing for the Full Range of Users</H2>
      <div style={grid2}>
        {items.map(a => (
          <Card key={a.title}>
            <CardTitle>{a.title}</CardTitle>
            <CardBody>{a.body}</CardBody>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ BUSINESS IMPACT ══ */
function AbraajImpact() {
  const stakeholders = [
    {
      group: 'Customers',
      points: ["Real-time visibility — no more uncertainty after placing an order", "Reordering in under 60 seconds, not 4 minutes", "Proactive delay notifications replace anxious waiting", "Subscription management eliminates the risk of running out"],
    },
    {
      group: 'Delivery Teams',
      points: ["Structured order list replaces WhatsApp coordination", "Failed delivery reporting handled digitally — no direct customer calls to drivers", "Real-time route updates when new orders are dispatched", "Delivery confirmation via digital signature, not paper receipt"],
    },
    {
      group: 'Operations Teams',
      points: ["Live dashboard of all active orders — no more whiteboard tracking", "Automated customer notifications eliminate manual call-outs", "Order history and analytics available for demand forecasting", "Support tickets routed digitally, with response SLA tracking"],
    },
    {
      group: 'Business Owners',
      points: ["Subscription model creates predictable recurring revenue", "Reduced support call volume frees staff time for value-add work", "Customer retention improved through loyalty and convenience", "Data foundation for AI-powered demand prediction and route optimisation"],
    },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Business Impact</SLabel>
      <H2>Value Created Across the Entire System</H2>
      <div style={grid2}>
        {stakeholders.map(s => (
          <Card key={s.group}>
            <CardLabel>{s.group}</CardLabel>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {s.points.map(p => (
                <li key={p} style={{ display: 'flex', gap: 10, fontSize: '13px', color: BD, lineHeight: 1.6 }}>
                  <span style={{ color: CA, flexShrink: 0, fontWeight: 700 }}>→</span>{p}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ SUCCESS METRICS ══ */
function AbraajMetrics() {
  const kpis = [
    { label: 'Order Completion Rate', value: '97.8%', desc: "Orders placed through app completed successfully" },
    { label: 'Repeat Order Rate', value: '+41%', desc: "Customers reordering within 14-day cycle" },
    { label: 'Delivery Success Rate', value: '95.2%', desc: "First-attempt delivery success (up from 81%)" },
    { label: 'Customer Satisfaction', value: '4.7/5', desc: "Post-delivery in-app rating average" },
    { label: 'Support Call Reduction', value: '−63%', desc: "Inbound order status calls since launch" },
    { label: 'Delivery Tracking Usage', value: '89%', desc: "Of customers who open the tracking screen during active orders" },
  ];
  return (
    <section style={{ background: N }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
        <SLabel dark>Success Metrics</SLabel>
        <H2 dark>KPIs That Measured Real Change</H2>
        <div style={grid3}>
          {kpis.map(k => (
            <div key={k.label} style={{ borderTop: `2px solid ${CY}`, paddingTop: 'clamp(16px,2vw,24px)' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', margin: '0 0 10px', letterSpacing: '0.06em' }}>{k.label}</p>
              <p style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 700, color: WH, margin: '0 0 8px', letterSpacing: '-0.025em' }}>{k.value}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ FUTURE ROADMAP ══ */
function AbraajRoadmap() {
  const items = [
    { title: 'Smart Delivery Scheduling', timeline: 'Q3 2025', desc: "ML-powered delivery windows that predict the best available slots based on historical demand, traffic patterns, and driver capacity — reducing failed deliveries further." },
    { title: 'Enhanced Subscription Plans', timeline: 'Q4 2025', desc: "Tiered subscription tiers with quantity flexibility, pause/resume, and gifting — targeting the growing segment of customers who want \"set and forget\" water management." },
    { title: 'AI Demand Prediction', timeline: 'Q1 2026', desc: "Customer-level demand forecasting based on household size, consumption history, and seasonal patterns — proactively suggesting reorders before the customer thinks to place them." },
    { title: 'Route Optimisation', timeline: 'Q2 2026', desc: "Driver-side route optimisation engine that sequences deliveries to minimise drive time and maximise daily delivery capacity, feeding into more accurate customer ETAs." },
    { title: 'Vendor Marketplace Expansion', timeline: 'Q3 2026', desc: "Extend the platform to support multiple verified water vendors competing for customers in the same district — with ABRAAJ as the trust layer and logistics backbone." },
    { title: 'Business Dashboard', timeline: 'Q1 2027', desc: "Commercial account dashboard for office administrators and B2B customers: multi-location management, consolidated invoicing, consumption analytics, and team ordering permissions." },
  ];
  return (
    <Wrap>
      <SLabel>Future Roadmap</SLabel>
      <H2>The Next Chapter for ABRAAJ</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <div key={item.title} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(18px,2.2vw,26px) 0', borderBottom: i < items.length - 1 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="abraaj-roadmap-row">
            <span style={{ fontSize: '12px', fontWeight: 600, color: CA, background: `${CA}12`, padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap', display: 'inline-block', marginTop: 2 }}>{item.timeline}</span>
            <div>
              <p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{item.title}</p>
              <p style={{ fontSize: '13px', color: BD, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══ REFLECTION ══ */
function AbraajReflection() {
  const lessons = [
    { lead: "Service design is system design.", body: "The customer experience starts long before the app opens. Delivery delays, miscommunication between driver and dispatcher, incorrect order quantities — these weren't UX failures, they were service failures. Designing the customer-facing product without addressing the operational workflow would have produced a beautiful UI over a broken service. The two had to improve together." },
    { lead: "Transparency is the cheapest trust builder there is.", body: "Customers didn't need faster deliveries — they needed to know what was happening. A 2-hour delivery with live tracking felt better than a 90-minute delivery in silence. This was one of the most instructive findings of my career: you can change the perceived experience without changing the underlying operations." },
    { lead: "Frequency creates obligation.", body: "When someone orders water every two weeks without fail, reliability stops being a feature and becomes a contract. The weight of that contract — and the consequences of breaking it — shaped every design decision we made around error states, delay notifications, and cancellation flows." },
    { lead: "Never underestimate the reorder problem.", body: "Getting a user to order once is a marketing challenge. Getting them to reorder indefinitely is a UX challenge. The single decision to surface 'Reorder Last Delivery' as the primary home screen action — instead of burying it in history — drove more repeat revenue than any other design choice in the project." },
  ];
  return (
    <Wrap bg={BA}>
      <SLabel>Reflection &amp; Learnings</SLabel>
      <H2>What Designing for Everyday Essential Services Teaches You</H2>
      <Body style={{ maxWidth: 700 }}>
        ABRAAJ wasn{"'"}t a sexy product brief. It wasn{"'"}t a new category or an emerging technology — it was water delivery. But designing for essential services is, in many ways, harder than designing for aspirational ones. There{"'"}s no enthusiasm to borrow from. Every UX point has to be earned from reliability and respect.
      </Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '28px 0' }}>
        {lessons.map((l, i) => (
          <div key={l.lead} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16, padding: 'clamp(18px,2.2vw,24px) 0', borderBottom: i < lessons.length - 1 ? `1px solid ${BR}` : 'none' }}>
            <span style={{ fontSize: '16px', fontWeight: 800, color: CY, lineHeight: 1.6, flexShrink: 0 }}>{i + 1}</span>
            <div>
              <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 600, color: DK, margin: '0 0 8px' }}>{l.lead}</p>
              <p style={{ fontSize: '14px', color: BD, lineHeight: 1.8, margin: 0 }}>{l.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: N, borderRadius: 12, padding: 'clamp(24px,3vw,36px)' }}>
        <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
          "ABRAAJ reminded me that good UX is not about delighting users with unexpected moments — it{"'"}s about making the expected moments so reliable, so effortless, and so transparent that the product earns the right to disappear into the background of someone{"'"}s life."
        </p>
      </div>
    </Wrap>
  );
}

/* ══ ROOT ══ */
export default function AbraajCaseStudy() {
  return (
    <>
      <AbraajHero />
      <AbraajSummary />
      <AbraajBackground />
      <AbraajProblem />
      <AbraajResearchObjectives />
      <AbraajResearch />
      <AbraajFindings />
      <AbraajPersonas />
      <AbraajJourney />
      <AbraajGoals />
      <AbraajIA />
      <AbraajUserFlow />
      <AbraajPrinciples />
      <AbraajExploration />
      <AbraajFeatures />
      <AbraajDecisions />
      <AbraajAccessibility />
      <AbraajImpact />
      <AbraajMetrics />
      <AbraajRoadmap />
      <AbraajReflection />

      <CaseStudyPrevNext currentSlug="abraaj" />
    </>
  );
}
