import CaseStudyPrevNext from '@/components/CaseStudyPrevNext';

const N = '#1a2c38';
const AC = '#c4607a';
const AA = '#a0445e';
const DK = '#0f1f28';
const BD = '#4a5a65';
const BG = '#f8f6f5';
const BA = '#f2ede9';
const BR = '#e0d5ce';
const WH = '#ffffff';
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
  return <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? '#f8a5b5' : AA, margin: '0 0 14px' }}>{children}</p>;
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

export default function AasaraCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: N, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, left: -60, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,96,122,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px) clamp(56px,7vw,100px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {['Product Design Case Study', 'Service Design · 2024 — 2025'].map(t => (
              <span key={t} style={{ background: 'rgba(196,96,122,0.15)', border: '1px solid rgba(196,96,122,0.3)', color: '#f8a5b5', fontSize: '13px', fontWeight: 500, padding: '5px 14px', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, letterSpacing: '-0.035em', color: WH, lineHeight: 1, margin: '0 0 24px' }}>AASARA</h1>
          <p style={{ fontSize: 'clamp(17px,2vw,24px)', fontWeight: 400, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 0 48px' }}>
            Bringing dignity and clarity to families during end-of-life emergencies through a trusted service coordination platform.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
            {[{ l: 'Role', v: 'Lead Product Designer' }, { l: 'Timeline', v: '8 months' }, { l: 'Platform', v: 'Web + Mobile' }].map(m => (
              <div key={m.l}><p style={{ fontSize: '13px', color: AC, margin: '0 0 4px' }}>{m.l}</p><p style={{ fontSize: '15px', fontWeight: 600, color: WH, margin: 0 }}>{m.v}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEC SUMMARY */}
      <Wrap>
        <SL>Executive Summary</SL>
        <H2>Designing for India{"'"}s Most Fragmented Service Market</H2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }} className="cs-2col">
          <div>
            <Body>When a family faces an end-of-life emergency in India, they must simultaneously navigate grief while coordinating multiple fragmented services — freezer boxes, transportation, flowers, ritual providers. This happens through word-of-mouth, multiple phone calls, and uncertain pricing, creating operational chaos during an emotionally devastating time.</Body>
            <Body>AASARA is a trusted marketplace platform that connects families with verified service providers in real-time. It simplifies emergency coordination through transparent pricing, instant communication, and a single interface — reducing cognitive load and restoring dignity during crisis.</Body>
            <Body style={{ margin: 0 }}>By creating a trusted two-sided marketplace, AASARA captures service coordination fees while providing families with price transparency and vendors with reliable customer flow — addressing a $2B+ market gap in India{"'"}s funeral services sector.</Body>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,1.5vw,16px)' }}>
            {[{ v: '< 15 min', l: 'Vendor Response Time' }, { v: '72%', l: 'Booking Conversion' }, { v: '4.6/5', l: 'Family Satisfaction' }, { v: '−62%', l: 'Coordination Time' }].map(s => (
              <div key={s.l} style={{ background: BA, border: `1px solid ${BR}`, borderRadius: 12, padding: 'clamp(16px,2vw,24px)' }}>
                <p style={{ fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 700, color: AA, margin: '0 0 6px', letterSpacing: '-0.02em' }}>{s.v}</p>
                <p style={{ fontSize: '13px', color: BD, margin: 0, lineHeight: 1.4 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>

      {/* BACKGROUND */}
      <Wrap bg={BA}>
        <SL>Background &amp; Context</SL>
        <H2>Understanding the Reality</H2>
        <Body style={{ maxWidth: 700 }}>In India, when a family member passes away, families face an invisible crisis: coordinating 5–8 different services within 2–4 hours, often with no prior experience, while managing profound grief.</Body>
        <div style={g2}>
          {[
            { t: 'Emotional Overwhelm', b: 'Families are processing shock, grief, and trauma while being forced into immediate operational mode. The cognitive load is unbearable — making simple decisions feels impossible.' },
            { t: 'Operational Chaos', b: 'Families scramble through contacts, make dozens of phone calls, negotiate prices, cross-check availability — all under extreme time pressure and information asymmetry.' },
            { t: 'Trust Deficit', b: 'Service providers are fragmented and unverified. Families fear exploitation, hidden costs, and poor service quality at their most vulnerable moment.' },
            { t: 'Time Sensitivity', b: 'Religious and cultural requirements demand immediate action. Delays cause additional family distress and logistical complications.' },
          ].map(c => <Card key={c.t}><CT>{c.t}</CT><CB>{c.b}</CB></Card>)}
        </div>
      </Wrap>

      {/* PROBLEM */}
      <Wrap>
        <SL>Problem Statement</SL>
        <H2>The Design Challenge</H2>
        <div style={{ background: `${N}08`, border: `1.5px solid ${BR}`, borderLeft: `4px solid ${AC}`, borderRadius: 12, padding: 'clamp(24px,3vw,40px)', maxWidth: 720 }}>
          <p style={{ fontSize: 'clamp(17px,1.8vw,22px)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.7, color: DK, margin: 0 }}>
            "How might we reduce operational complexity and emotional burden for families during end-of-life emergencies while building a sustainable, trusted service ecosystem?"
          </p>
          <p style={{ fontSize: 'clamp(14px,1.2vw,16px)', color: BD, lineHeight: 1.7, marginTop: 20, marginBottom: 0 }}>Families need immediate access to verified services, transparent pricing, and simplified coordination — without sacrificing trust or cultural sensitivity.</p>
        </div>
      </Wrap>

      {/* RESEARCH */}
      <Wrap bg={BA}>
        <SL>Research &amp; Discovery</SL>
        <H2>Uncovering Insights</H2>
        <Body style={{ maxWidth: 640 }}>Over 12 weeks, we conducted mixed-method research combining secondary analysis, in-depth interviews, and observational studies to build deep empathy and understanding.</Body>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,24px)', marginBottom: 36 }}>
          {[{ v: '32', l: 'Family Interviews' }, { v: '18', l: 'Vendor Interviews' }, { v: '6', l: 'Hospital Observations' }, { v: '200+', l: 'Hours Research' }].map(s => (
            <div key={s.l} style={{ background: WH, border: `1px solid ${BR}`, borderRadius: 10, padding: 'clamp(16px,2vw,22px)', flex: '1 1 120px' }}>
              <p style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: AA, margin: '0 0 6px', letterSpacing: '-0.02em' }}>{s.v}</p>
              <p style={{ fontSize: '13px', color: BD, margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${BR}` }}>
          {[
            { l: 'Family Interviews (Retrospective)', c: '32 families', b: 'Sensitive retrospective interviews with families who experienced end-of-life emergencies within the past 6 months. Focused on emotional journey, decision-making process, pain points, and unmet needs.' },
            { l: 'Vendor Interviews', c: '18 providers', b: 'Spoke with freezer box vendors, transportation companies, florists, and ritual coordinators to understand business models, operational constraints, customer acquisition, and pain points.' },
            { l: 'Observational Studies', c: '6 hospitals', b: 'Observed (with permission) coordination activities at hospital locations during family transitions, noting communication patterns, time pressure, information flow, and service handoffs.' },
            { l: 'Secondary Research', c: 'Market analysis', b: 'Analyzed existing funeral service markets in India, studied cultural and religious practices across regions, reviewed regulatory frameworks, and examined international marketplace models.' },
          ].map(m => (
            <div key={m.l} style={{ display: 'grid', gridTemplateColumns: 'minmax(160px,220px) 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(20px,2.5vw,28px) 0', borderBottom: `1px solid ${BR}`, alignItems: 'start' }} className="cs-method-row">
              <div><p style={{ fontSize: '14px', fontWeight: 600, color: DK, margin: '0 0 4px' }}>{m.l}</p><p style={{ fontSize: '12px', color: AA, fontWeight: 500, margin: 0 }}>{m.c}</p></div>
              <p style={{ fontSize: 'clamp(14px,1.2vw,15px)', lineHeight: 1.75, color: BD, margin: 0 }}>{m.b}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* KEY FINDINGS */}
      <Wrap>
        <SL>Key Research Findings</SL>
        <H2>What We Learned</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2vw,20px)' }}>
          {[
            { n: '#1', t: 'Decision Paralysis Under Grief', quote: '"I couldn\'t think. My brother had to decide everything. I just needed someone to tell me what to do next."', stat: '78% of families reported extreme difficulty making even simple decisions during the first 2–4 hours.' },
            { n: '#2', t: 'Trust Through Social Proof', quote: '"We went with whoever the hospital suggested. We had no time to research. We just needed someone reliable right now."', stat: '83% said they would pay more for verified, trusted providers.' },
            { n: '#3', t: 'Price Transparency Reduces Anxiety', quote: '"The vendor kept adding charges. We felt helpless. At that moment, you\'ll pay anything, and they know it."', stat: '91% said knowing the price upfront was more important than getting the "best deal."' },
            { n: '#4', t: 'Coordination Is the Biggest Pain', quote: '"Everyone gives you a different number. You\'re calling, waiting, explaining the same thing 10 times. It\'s chaos."', stat: 'Families made an average of 23 phone calls in the first 4 hours, coordinating across 5–7 vendors.' },
            { n: '#5', t: 'Speed Over Perfection', quote: '"We needed the freezer box within an hour for religious reasons. We took the first available option."', stat: '94% said getting someone "good enough" in 30 minutes was better than the "perfect" provider in 2 hours.' },
            { n: '#6', t: 'Vendors Want Reliable Customer Flow', quote: '"We rely on hospital staff to recommend us. If a platform can send us quality leads, we\'ll pay for that."', stat: '72% of vendors said they would pay platform commissions for verified, consistent customer flow.' },
          ].map(f => (
            <Card key={f.t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16 }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: AC, background: `${AC}15`, borderRadius: 6, padding: '3px 0', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'start', height: 28 }}>{f.n}</span>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 10px' }}>{f.t}</p>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5c4382', lineHeight: 1.6, margin: '0 0 10px' }}>{f.quote}</p>
                <p style={{ fontSize: '13px', color: BD, lineHeight: 1.6, margin: 0 }}>{f.stat}</p>
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* PERSONAS */}
      <Wrap bg={BA}>
        <SL>User Personas</SL>
        <H2>Who We{"'"}re Designing For</H2>
        <div style={g3}>
          {[
            { i: 'P', n: 'Priya Sharma', age: '34', r: 'Family Member', goals: ['Arrange dignified services quickly with minimal stress', 'Maximum reliability from verified providers', 'Know all costs upfront before committing'], pains: ['Overwhelmed by logistics during grief', 'Fears exploitation at vulnerable moment', "Doesn't know whom to trust"] },
            { i: 'R', n: 'Rajesh Kumar', age: '42', r: 'Service Vendor', goals: ['Grow customer base and reduce acquisition costs', 'Build reputation through reviews', 'Earn predictable, consistent income'], pains: ['Inconsistent demand from informal channels', 'Payment delays from manual coordination', 'Difficulty reaching customers at point of need'] },
            { i: 'D', n: 'Dr. Anjali Menon', age: '38', r: 'Hospital Coordinator', goals: ['Support families compassionately during transition', 'Ensure smooth handoffs to verified providers', 'Maintain hospital reputation for care quality'], pains: ["Limited time per family — can't verify all vendors", 'Complaints about provider quality reflect on hospital', 'No digital tool for tracking family referrals'] },
          ].map(p => (
            <Card key={p.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${AC}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: AC }}>{p.i}</span>
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: 0 }}>{p.n}, {p.age}</p>
                  <p style={{ fontSize: '12px', color: AA, margin: 0, fontWeight: 500 }}>{p.r}</p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: GN, margin: '0 0 8px' }}>Goals</p>
                {p.goals.map(g => <p key={g} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: GN }}>✓</span>{g}</p>)}
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e05252', margin: '0 0 8px' }}>Frustrations</p>
                {p.pains.map(pa => <p key={pa} style={{ fontSize: '13px', color: BD, margin: '0 0 6px', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#e05252' }}>×</span>{pa}</p>)}
              </div>
            </Card>
          ))}
        </div>
      </Wrap>

      {/* DESIGN PRINCIPLES */}
      <Wrap>
        <SL>Design Principles</SL>
        <H2>Our North Star</H2>
        <div style={g2}>
          {[
            { n: '01', t: 'Trust First', b: 'Every interaction must reinforce trust. We verify providers, display transparent pricing, show real reviews, and guarantee quality. Families are vulnerable — we must be their reliable advocate.' },
            { n: '02', t: 'Reduce Cognitive Load', b: 'Grief reduces decision-making capacity. We minimize choices, provide clear recommendations, use simple language, and guide users through each step with empathy and clarity.' },
            { n: '03', t: 'Urgency Without Pressure', b: 'Time is critical but families must never feel rushed or manipulated. We show availability, enable quick decisions — while maintaining calm, respectful tone.' },
            { n: '04', t: 'Empathy in Every Interaction', b: 'Words matter deeply. We use compassionate language, acknowledge emotional difficulty, avoid transactional tone, and provide human support when needed.' },
            { n: '05', t: 'Transparency Always', b: 'Hidden costs and surprises erode trust. We show all prices upfront, explain fees clearly, communicate delays proactively, and never hide information.' },
            { n: '06', t: 'Inclusive by Default', b: 'AASARA serves diverse communities across India. We support multiple languages, respect cultural practices, ensure accessibility, and design for varying literacy and tech comfort levels.' },
          ].map(p => (
            <div key={p.t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: AC, flexShrink: 0, marginTop: 2 }}>{p.n}</span>
              <div><p style={{ fontSize: '15px', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{p.t}</p><p style={{ fontSize: '14px', color: BD, lineHeight: 1.7, margin: 0 }}>{p.b}</p></div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* FEATURES */}
      <section style={{ background: BA }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL>The Solution</SL>
          <H2>A Platform Built on Trust, Speed, and Empathy</H2>
        </div>
        {[
          { n: 'FEATURE 01', t: 'Service Discovery', p: 'Families had no way to find verified providers — they relied entirely on word-of-mouth referrals and hospital recommendations, with no visibility into pricing, availability, or quality.', d: 'Browse verified service providers by category, location, and availability. Each provider displays ratings, transparent pricing, response time, and verification status — building immediate trust and enabling informed decisions.', o: 'Families could identify and contact a verified provider in under 5 minutes vs. the previous average of 40+ minutes of phone calls.' },
          { n: 'FEATURE 02', t: 'Emergency Requests', p: 'For the most urgent situations, families had to call multiple vendors individually, explain the situation each time, and wait for callbacks — all while managing grief.', d: 'Submit one emergency request describing needs. The platform instantly notifies relevant vendors, who respond with quotes within minutes — eliminating multiple phone calls and repeated explanations.', o: 'Average vendor response time under 15 minutes. Families reduced their coordination call count from an average of 23 to under 3.' },
          { n: 'FEATURE 03', t: 'Quote Comparison', p: 'Families received verbally communicated prices with no way to compare, no written record, and no protection against price changes after acceptance.', d: 'All vendor responses appear in a unified comparison view, showing price, availability, ratings, and estimated arrival time. Clear recommended vendor highlighting enables one-click booking.', o: 'Booking conversion rate reached 72%. Families reported significantly reduced anxiety around pricing — knowing the exact cost upfront removed the fear of exploitation.' },
          { n: 'FEATURE 04', t: 'Real-Time Order Tracking', p: 'Once a service was booked, families had no visibility — they could only wait and hope the provider would arrive as promised.', d: 'Live GPS tracking of service provider with proactive status updates and automated SMS/app notifications. Direct messaging with vendor available throughout.', o: 'Service completion rate reached 96%. Support contact during active orders dropped by 58% — families had the information they needed without having to ask.' },
          { n: 'FEATURE 05', t: 'Vendor Dashboard', p: 'Service providers received inquiries through inconsistent channels — phone, referral, word-of-mouth — with no system to manage requests, track earnings, or build reputation.', d: 'Mobile-first dashboard with real-time request notifications, quick quote submission tools, earnings tracking, and analytics. Reputation management through verified customer reviews.', o: 'Vendor acceptance rate reached 89%. 72% of active vendors said the platform had become their primary customer acquisition channel within 3 months.' },
        ].map((f, i) => (
          <div key={f.n} style={{ background: i % 2 === 0 ? WH : BA, borderTop: `1px solid ${BR}` }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,5vw,80px)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
                <span style={{ background: N, color: WH, fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: 6, letterSpacing: '0.08em' }}>{f.n}</span>
                <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: DK, margin: 0, letterSpacing: '-0.015em' }}>{f.t}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px,2vw,24px)' }} className="cs-pdo">
                {[{ label: 'Problem', body: f.p, color: '#e05252' }, { label: 'Decision', body: f.d, color: AA }, { label: 'Outcome', body: f.o, color: GN }].map(col => (
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

      {/* SUCCESS METRICS */}
      <section style={{ background: N }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)' }}>
          <SL dark>Success Metrics</SL>
          <H2 dark>Measuring Impact</H2>
          <div style={g3}>
            {[
              { l: 'Response Time', v: '< 15 min', d: 'Average vendor response to emergency requests' },
              { l: 'Booking Conversion', v: '72%', d: 'Requests resulting in confirmed bookings' },
              { l: 'Vendor Acceptance', v: '89%', d: 'Vendors accepting platform bookings' },
              { l: 'Completion Rate', v: '96%', d: 'Orders successfully fulfilled as promised' },
              { l: 'Customer Satisfaction', v: '4.6/5', d: 'Average family rating post-service' },
              { l: 'Time Saved', v: '−62%', d: 'Reduction in coordination time vs. traditional' },
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
        <H2>What{"'"}s Next</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { t: 'AI-Powered Recommendations', tl: 'Q3 2025', d: 'ML algorithms that understand family preferences, cultural requirements, and budget constraints to recommend the most suitable service providers automatically.' },
            { t: 'Document Management System', tl: 'Q4 2025', d: 'Secure digital vault for death certificates, cremation certificates, and other essential documents — reducing paperwork burden during an already difficult time.' },
            { t: '24/7 Support Hotline', tl: 'Q1 2026', d: 'Human-staffed emergency hotline for families who need immediate assistance, emotional support, or guidance navigating the platform during crisis moments.' },
            { t: 'Regional Expansion', tl: 'Q2 2026', d: 'Expand from metro cities to tier-2 and tier-3 cities across India, adapting to regional cultural practices and building local vendor networks.' },
            { t: 'Predictive Service Coordination', tl: 'Q4 2026', d: 'For hospitals and palliative care facilities, predictive system that pre-coordinates services based on patient condition — ensuring immediate support when needed.' },
          ].map((item, i) => (
            <div key={item.t} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'clamp(16px,3vw,40px)', padding: 'clamp(18px,2.2vw,26px) 0', borderBottom: i < 4 ? `1px solid ${BR}` : 'none', alignItems: 'start' }} className="cs-roadmap-row">
              <span style={{ fontSize: '12px', fontWeight: 600, color: AA, background: `${AA}12`, padding: '4px 10px', borderRadius: 6, display: 'inline-block', marginTop: 2 }}>{item.tl}</span>
              <div><p style={{ fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 600, color: DK, margin: '0 0 6px' }}>{item.t}</p><p style={{ fontSize: '13px', color: BD, lineHeight: 1.7, margin: 0 }}>{item.d}</p></div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* REFLECTION */}
      <Wrap bg={BA}>
        <SL>Reflection &amp; Learnings</SL>
        <H2>Designing for Humanity{"'"}s Hardest Moments</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '0 0 32px' }}>
          {[
            { lead: 'Research as empathy building.', body: "I couldn't observe users in real-time — I had to conduct retrospective interviews, building trust slowly and honoring their willingness to share painful experiences. These conversations taught me more about human resilience than any design framework ever could." },
            { lead: 'Less is more under stress.', body: 'Every instinct told me to provide comprehensive options and customization. But research showed the opposite: families wanted fewer choices, clearer guidance, and "done-for-you" solutions. I learned to restrain my designer impulse to showcase flexibility, focusing instead on reducing cognitive load through intelligent curation.' },
            { lead: 'Trust cannot be designed — only earned.', body: 'No amount of beautiful UI could compensate for broken trust. Verification badges, transparent pricing, and customer reviews weren\'t "nice-to-haves" — they were existential requirements. I learned that marketplace design is fundamentally about creating systems where trust can emerge organically.' },
            { lead: 'Words carry weight.', body: 'Microcopy became one of my most powerful design tools. The difference between "Submit Request" and "Find Help Now" — between "Order Confirmed" and "We\'re Here to Help" — profoundly impacted how families experienced the platform.' },
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
            "AASARA taught me that product design is not about building features — it{"'"}s about understanding human needs in their full complexity and creating systems that honor people{"'"}s dignity, even in their darkest moments."
          </p>
        </div>
      </Wrap>

      <CaseStudyPrevNext currentSlug="aasara" />
    </>
  );
}
