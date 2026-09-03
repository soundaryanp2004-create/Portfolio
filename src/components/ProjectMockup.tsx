interface Props {
  id: number;
}

const Line = ({ w = '100%', o = 1 }: { w?: string; o?: number }) => (
  <div style={{ height: 1.5, background: 'currentColor', opacity: o, borderRadius: 1, width: w }} />
);

const Bar = ({ h = 8, w = '100%', o = 1 }: { h?: number; w?: string; o?: number }) => (
  <div style={{ height: h, background: 'currentColor', opacity: o, borderRadius: 2, width: w }} />
);

function ArmadaCash() {
  return (
    <div style={{ background: '#E8F2EC', width: '100%', aspectRatio: '16/9', borderRadius: 4, padding: '5%', display: 'flex', flexDirection: 'column', gap: '5%', overflow: 'hidden', color: '#2C6A4F' }}>
      {/* Nav bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.6 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {[40, 32, 28].map((w, i) => <Bar key={i} w={`${w}px`} h={5} o={0.7} />)}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Bar w="22px" h={5} o={0.5} />
          <Bar w="16px" h={5} o={0.5} />
        </div>
      </div>

      {/* KPI cards row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3%' }}>
        {[
          { label: 'Total Balance', val: 0.85 },
          { label: 'Pending', val: 0.45 },
          { label: 'Approved', val: 0.65 },
        ].map((card, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.55)', borderRadius: 4, padding: '10% 10% 8%' }}>
            <Bar w="55%" h={4} o={0.4} />
            <div style={{ marginTop: '10%', marginBottom: '6%' }}>
              <Bar w="70%" h={7} o={0.8} />
            </div>
            <div style={{ height: 3, background: 'rgba(44,106,79,0.15)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${card.val * 100}%`, background: 'currentColor', opacity: 0.5, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', borderRadius: 4, padding: '4% 5%', display: 'flex', flexDirection: 'column', gap: '7%', overflow: 'hidden' }}>
        {/* Table header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4%', opacity: 0.4 }}>
          {['Description', 'Date', 'Amount', 'Status'].map(h => <Bar key={h} h={4} />)}
        </div>
        {/* Rows */}
        {[1, 0.85, 0.9, 0.75, 0.8].map((o, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4%', opacity: o * 0.7 }}>
            <Bar h={5} w="80%" />
            <Bar h={5} w="60%" />
            <Bar h={5} w="70%" />
            <div style={{ height: 5, borderRadius: 8, background: 'currentColor', opacity: 0.35, width: '80%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePOS() {
  return (
    <div style={{ background: '#E6ECF7', width: '100%', aspectRatio: '16/9', borderRadius: 4, display: 'flex', gap: '4%', padding: '5%', overflow: 'hidden', color: '#2B4076' }}>
      {/* Mobile frame */}
      <div style={{ flex: '0 0 35%', background: 'rgba(255,255,255,0.5)', borderRadius: 8, padding: '6%', display: 'flex', flexDirection: 'column', gap: '5%', overflow: 'hidden', border: '1.5px solid rgba(43,64,118,0.15)' }}>
        <Bar w="60%" h={5} o={0.5} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8%', flex: 1 }}>
          {[0.7, 0.55, 0.65, 0.6, 0.72, 0.5].map((o, i) => (
            <div key={i} style={{ background: `rgba(43,64,118,${o * 0.15})`, borderRadius: 4, aspectRatio: '1' }} />
          ))}
        </div>
        <div style={{ background: 'rgba(43,64,118,0.55)', borderRadius: 4, padding: '6% 10%', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Bar w="50%" h={4} o={0.4} />
          <Bar w="70%" h={6} o={0.9} />
        </div>
      </div>
      {/* Right panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4%' }}>
          {[1, 0.7].map((o, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.55)', borderRadius: 4, padding: '8%' }}>
              <Bar h={4} o={o * 0.4} w="60%" />
              <div style={{ margin: '8% 0' }}><Bar h={8} o={o * 0.8} w="80%" /></div>
              <Bar h={3} o={o * 0.25} w="100%" />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', borderRadius: 4, padding: '5%', display: 'flex', flexDirection: 'column', gap: '6%', overflow: 'hidden' }}>
          {[1, 0.85, 0.75, 0.9, 0.7].map((o, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '5%', opacity: o }}>
              <Bar h={5} w="85%" o={0.6} />
              <Bar h={5} w="70%" o={0.5} />
              <Bar h={5} w="60%" o={0.45} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Aasara() {
  return (
    <div style={{ background: '#EDE8F5', width: '100%', aspectRatio: '16/9', borderRadius: 4, padding: '5%', display: 'flex', flexDirection: 'column', gap: '5%', overflow: 'hidden', color: '#5C4382' }}>
      {/* Progress stepper */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2%', padding: '0 5%' }}>
        {['Discover', 'Package', 'Add-ons', 'Payment', 'Confirm'].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2%', flex: i < 4 ? '1' : '0 0 auto' }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
              background: i < 2 ? 'currentColor' : 'transparent',
              border: `1.5px solid ${i < 2 ? 'currentColor' : 'rgba(92,67,130,0.3)'}`,
              opacity: i < 2 ? 0.8 : 0.4,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i < 2 && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />}
            </div>
            {i < 4 && <div style={{ flex: 1, height: 1.5, background: `rgba(92,67,130,${i < 1 ? 0.5 : 0.15})` }} />}
          </div>
        ))}
      </div>

      {/* Service grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4%' }}>
          {[
            { o: 1, selected: true },
            { o: 0.8, selected: false },
            { o: 0.85, selected: false },
            { o: 0.7, selected: false },
          ].map((card, i) => (
            <div key={i} style={{
              background: card.selected ? 'rgba(92,67,130,0.12)' : 'rgba(255,255,255,0.5)',
              borderRadius: 5,
              border: `1.5px solid rgba(92,67,130,${card.selected ? 0.4 : 0.12})`,
              padding: '10%',
              display: 'flex', flexDirection: 'column', gap: '12%',
            }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: `rgba(92,67,130,${card.o * 0.25})` }} />
              <Bar h={5} w="70%" o={card.o * 0.7} />
              <Bar h={4} w="55%" o={card.o * 0.4} />
            </div>
          ))}
        </div>
        {/* Booking summary */}
        <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 5, padding: '8%', display: 'flex', flexDirection: 'column', gap: '8%', overflow: 'hidden' }}>
          <Bar h={5} w="70%" o={0.5} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6%', flex: 1 }}>
            {[0.7, 0.55, 0.6].map((o, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '10%' }}>
                <Bar h={4} w="60%" o={o * 0.6} />
                <Bar h={4} w="25%" o={o * 0.8} />
              </div>
            ))}
          </div>
          <Line o={0.15} />
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10%' }}>
            <Bar h={5} w="40%" o={0.6} />
            <Bar h={5} w="30%" o={0.9} />
          </div>
          <div style={{ background: 'rgba(92,67,130,0.65)', borderRadius: 3, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bar h={4} w="50%" o={0.5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AstenMeds() {
  return (
    <div style={{ background: '#E5EFF7', width: '100%', aspectRatio: '16/9', borderRadius: 4, display: 'flex', overflow: 'hidden', color: '#1A4B8A' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 18%', background: 'rgba(26,75,138,0.06)', padding: '4% 3%', display: 'flex', flexDirection: 'column', gap: '6%', borderRight: '1px solid rgba(26,75,138,0.1)' }}>
        <Bar w="80%" h={5} o={0.45} />
        {['POS', 'Inventory', 'Purchasing', 'Customers', 'Suppliers', 'Reports'].map((item, i) => (
          <div key={item} style={{
            padding: '6% 8%',
            borderRadius: 3,
            background: i === 0 ? 'rgba(26,75,138,0.12)' : 'transparent',
          }}>
            <Bar w={`${[70,55,65,60,55,50][i]}%`} h={4} o={i === 0 ? 0.8 : 0.4} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '4% 4%', display: 'flex', flexDirection: 'column', gap: '4%', overflow: 'hidden' }}>
        {/* KPI strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3%' }}>
          {[0.9, 0.75, 0.85, 0.7].map((o, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 3, padding: '6% 8%' }}>
              <Bar h={4} w="55%" o={o * 0.4} />
              <div style={{ marginTop: '8%' }}><Bar h={7} w="70%" o={o * 0.8} /></div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr', gap: '3%', padding: '3% 4%', background: 'rgba(26,75,138,0.06)', borderBottom: '1px solid rgba(26,75,138,0.1)' }}>
            {[0.35, 0.35, 0.35, 0.35, 0.35].map((o, i) => <Bar key={i} h={4} o={o} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[1, 0.85, 0.9, 0.75, 0.8, 0.7].map((o, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr', gap: '3%', padding: '2.5% 4%', borderBottom: '1px solid rgba(26,75,138,0.07)', opacity: o }}>
                <Bar h={5} w="75%" o={0.6} />
                <Bar h={5} w="65%" o={0.5} />
                <Bar h={5} w="70%" o={0.45} />
                <Bar h={5} w="55%" o={0.45} />
                <div style={{ height: 5, borderRadius: 8, background: 'currentColor', opacity: 0.25, width: '70%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Abraaj() {
  const C = '#012b4a';
  const CY = 'rgba(0,184,219,1)';
  const BG = '#EBF4F8';
  const WH = '#ffffff';
  const BRD = 'rgba(1,43,74,0.1)';
  const INK = 'rgba(1,43,74,0.65)';
  const INK2 = 'rgba(1,43,74,0.35)';

  return (
    <div style={{ background: BG, width: '100%', aspectRatio: '16/9', borderRadius: 4, display: 'flex', gap: 0, overflow: 'hidden', color: C, fontFamily: 'inherit' }}>

      {/* LEFT: Mobile app frame */}
      <div style={{ flex: '0 0 32%', background: WH, borderRight: `1px solid ${BRD}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Status bar */}
        <div style={{ background: C, padding: '3% 5% 2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Bar h={3} w="22px" o={0.6} />
          <div style={{ display: 'flex', gap: 4 }}>
            <Bar h={3} w="12px" o={0.5} />
            <Bar h={3} w="8px" o={0.5} />
          </div>
        </div>
        {/* App nav header */}
        <div style={{ background: C, padding: '2% 5% 4%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Bar h={3} w="40px" o={0.4} />
            <Bar h={4} w="60px" o={0.85} />
          </div>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,184,219,0.25)', border: `1.5px solid ${CY}`, opacity: 0.7 }} />
        </div>

        {/* Active order tracking card */}
        <div style={{ margin: '4% 4% 3%', background: `${C}`, borderRadius: 5, padding: '5% 5%', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Bar h={3} w="55px" o={0.45} />
          {/* Progress bar */}
          <div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, overflow: 'hidden', margin: '2% 0' }}>
            <div style={{ height: '100%', width: '65%', background: CY, borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Bar h={3} w="48px" o={0.5} />
            <Bar h={3} w="30px" o={0.8} />
          </div>
          {/* Map placeholder */}
          <div style={{ background: 'rgba(0,184,219,0.12)', borderRadius: 3, height: 32, marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Grid lines */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
              {[20, 40, 60, 80].map(pct => (
                <div key={pct} style={{ position: 'absolute', top: 0, bottom: 0, left: `${pct}%`, width: 1, background: CY }} />
              ))}
              {[33, 66].map(pct => (
                <div key={pct} style={{ position: 'absolute', left: 0, right: 0, top: `${pct}%`, height: 1, background: CY }} />
              ))}
            </div>
            {/* Driver dot */}
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: CY, boxShadow: `0 0 0 3px rgba(0,184,219,0.25)`, zIndex: 1, position: 'absolute', left: '55%', top: '40%' }} />
            {/* Destination pin */}
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: WH, border: `1.5px solid ${C}`, opacity: 0.8, zIndex: 1, position: 'absolute', left: '25%', top: '60%' }} />
          </div>
        </div>

        {/* Quick reorder card */}
        <div style={{ margin: '0 4% 3%', background: `rgba(0,184,219,0.08)`, border: `1px solid rgba(0,184,219,0.25)`, borderRadius: 5, padding: '5% 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Bar h={3} w="65px" o={0.4} />
            <Bar h={4} w="48px" o={0.8} />
          </div>
          <div style={{ background: C, borderRadius: 3, padding: '5% 8%' }}>
            <Bar h={3} w="28px" o={0.9} />
          </div>
        </div>

        {/* Order history rows */}
        <div style={{ flex: 1, margin: '0 4%', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
          {[1, 0.75, 0.6].map((o, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 0', borderBottom: `1px solid ${BRD}`, opacity: o }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Bar h={3} w="55px" o={0.7} />
                <Bar h={3} w="38px" o={0.35} />
              </div>
              <div style={{ height: 12, width: 32, borderRadius: 6, background: i === 0 ? `rgba(0,184,219,0.2)` : `rgba(1,43,74,0.07)` }} />
            </div>
          ))}
        </div>

        {/* Bottom tab bar */}
        <div style={{ borderTop: `1px solid ${BRD}`, padding: '3% 0 2%', display: 'flex', justifyContent: 'space-around' }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: active ? C : 'transparent', border: `1.5px solid ${active ? C : BRD}`, opacity: active ? 1 : 0.45 }} />
              <Bar h={2} w="22px" o={active ? 0.6 : 0.25} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Desktop overview panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '3% 4%', gap: '3%', overflow: 'hidden' }}>
        {/* Top nav bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: C, opacity: 0.85 }} />
            <Bar h={4} w="50px" o={0.7} />
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {[38, 28, 32, 26].map((w, i) => <Bar key={i} h={3} w={`${w}px`} o={i === 0 ? 0.7 : 0.35} />)}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ height: 18, width: 60, borderRadius: 3, background: C, opacity: 0.9 }} />
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3%' }}>
          {[
            { val: 0.9, accent: true },
            { val: 0.65, accent: false },
            { val: 0.8, accent: false },
            { val: 0.55, accent: false },
          ].map((card, i) => (
            <div key={i} style={{ background: WH, border: `1px solid ${BRD}`, borderRadius: 5, padding: '6% 7%', borderTop: card.accent ? `2.5px solid ${CY}` : `1px solid ${BRD}` }}>
              <Bar h={3} w="55%" o={0.35} />
              <div style={{ margin: '12% 0 6%' }}><Bar h={6} w="65%" o={card.val * 0.85} /></div>
              <Bar h={2} w="40%" o={0.25} />
            </div>
          ))}
        </div>

        {/* Main content: orders table + sidebar */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr minmax(0, 35%)', gap: '3%', overflow: 'hidden' }}>

          {/* Orders table */}
          <div style={{ background: WH, border: `1px solid ${BRD}`, borderRadius: 5, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '2%', padding: '3% 4%', background: `rgba(1,43,74,0.03)`, borderBottom: `1px solid ${BRD}` }}>
              {[0.45, 0.45, 0.45, 0.45, 0.45].map((o, i) => <Bar key={i} h={3} o={o} />)}
            </div>
            {/* Table rows */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {[1, 0.88, 0.82, 0.75, 0.7, 0.65].map((o, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '2%', padding: '2.5% 4%', borderBottom: `1px solid ${BRD}`, opacity: o, alignItems: 'center' }}>
                  <Bar h={4} w="75%" o={0.65} />
                  <Bar h={4} w="60%" o={0.5} />
                  <Bar h={4} w="65%" o={0.5} />
                  <Bar h={4} w="50%" o={0.45} />
                  <div style={{ height: 13, width: '70%', borderRadius: 8, background: i === 0 ? `rgba(0,184,219,0.2)` : i === 2 ? `rgba(58,140,110,0.15)` : `rgba(1,43,74,0.07)` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: subscription + notification preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4%', overflow: 'hidden' }}>
            {/* Subscription card */}
            <div style={{ background: WH, border: `1px solid ${BRD}`, borderRadius: 5, padding: '6%', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Bar h={3} w="55%" o={0.4} />
              <div style={{ margin: '4% 0' }}>
                <div style={{ height: 4, background: `rgba(1,43,74,0.08)`, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '70%', background: CY, opacity: 0.7, borderRadius: 2 }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Bar h={3} w="40%" o={0.35} />
                <Bar h={3} w="25%" o={0.6} />
              </div>
            </div>

            {/* Notification stack */}
            <div style={{ flex: 1, background: WH, border: `1px solid ${BRD}`, borderRadius: 5, padding: '5%', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
              <Bar h={3} w="50%" o={0.4} />
              <div style={{ marginTop: '6%', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[1, 0.75, 0.6, 0.5].map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '6%', padding: '5% 0', borderBottom: `1px solid ${BRD}`, opacity: o, alignItems: 'flex-start' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: i === 0 ? CY : `rgba(1,43,74,0.2)`, flexShrink: 0, marginTop: 2 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                      <Bar h={3} w="80%" o={0.7} />
                      <Bar h={3} w="55%" o={0.35} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gastronomica() {
  return (
    <div style={{ background: '#FFF3E6', width: '100%', aspectRatio: '16/9', borderRadius: 4, padding: '5%', display: 'flex', flexDirection: 'column', gap: '4%', overflow: 'hidden', color: '#B05C1A' }}>
      {/* Top nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.6 }}>
        <div style={{ height: 5, width: 50, background: 'currentColor', borderRadius: 2, opacity: 0.7 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[28, 22, 26].map((w, i) => <div key={i} style={{ height: 4, width: w, background: 'currentColor', borderRadius: 2, opacity: 0.45 }} />)}
        </div>
      </div>
      {/* Hero banner */}
      <div style={{ background: 'rgba(176,92,26,0.1)', borderRadius: 6, padding: '6% 8%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ height: 6, width: '60%', background: 'currentColor', borderRadius: 2, opacity: 0.7 }} />
        <div style={{ height: 4, width: '40%', background: 'currentColor', borderRadius: 2, opacity: 0.4 }} />
        <div style={{ marginTop: 8, height: 22, width: 80, background: 'rgba(176,92,26,0.6)', borderRadius: 11 }} />
      </div>
      {/* Menu grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3%' }}>
        {[0.9, 0.75, 0.85, 0.7, 0.8, 0.65].map((o, i) => (
          <div key={i} style={{ background: `rgba(176,92,26,${o * 0.1})`, borderRadius: 5, padding: '8%', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end' }}>
            <div style={{ height: 4, width: '70%', background: 'currentColor', borderRadius: 2, opacity: o * 0.6 }} />
            <div style={{ height: 3, width: '50%', background: 'currentColor', borderRadius: 2, opacity: o * 0.35 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FashionAI() {
  return (
    <div style={{ background: '#FFF0F5', width: '100%', aspectRatio: '16/9', borderRadius: 4, display: 'flex', gap: '3%', padding: '5%', overflow: 'hidden', color: '#A03060' }}>
      {/* Left: garment panel */}
      <div style={{ flex: '0 0 38%', background: 'rgba(160,48,96,0.07)', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6%', gap: '6%' }}>
        <div style={{ height: 4, width: '60%', background: 'currentColor', borderRadius: 2, opacity: 0.4 }} />
        <div style={{ flex: 1, width: '70%', background: 'rgba(160,48,96,0.12)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '50%', height: '60%', background: 'rgba(160,48,96,0.2)', borderRadius: '40% 40% 20% 20%' }} />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FDEEF5', '#E8D8F0', '#D0C8E8', '#F5E8D0'].map((c, i) => (
            <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: c, border: '1.5px solid rgba(160,48,96,0.2)' }} />
          ))}
        </div>
      </div>
      {/* Right: outfit grid + AI panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ height: 5, width: '40%', background: 'currentColor', borderRadius: 2, opacity: 0.5 }} />
          <div style={{ height: 5, width: '25%', background: 'rgba(160,48,96,0.5)', borderRadius: 11 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4%', flex: 1 }}>
          {[1, 0.85, 0.9, 0.75, 0.8, 0.7].map((o, i) => (
            <div key={i} style={{ background: `rgba(160,48,96,${o * 0.09})`, borderRadius: 5, border: i === 0 ? '1.5px solid rgba(160,48,96,0.3)' : 'none' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SchoolMgmt() {
  return (
    <div style={{ background: '#EBF4FD', width: '100%', aspectRatio: '16/9', borderRadius: 4, display: 'flex', overflow: 'hidden', color: '#1A5A9A' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 20%', background: 'rgba(26,90,154,0.06)', padding: '4% 3%', display: 'flex', flexDirection: 'column', gap: '5%', borderRight: '1px solid rgba(26,90,154,0.1)' }}>
        <div style={{ height: 5, width: '75%', background: 'currentColor', borderRadius: 2, opacity: 0.5 }} />
        {['Students', 'Classes', 'Schedule', 'Grades', 'Reports'].map((_, i) => (
          <div key={i} style={{ height: 4, width: `${[70,55,65,60,50][i]}%`, background: 'currentColor', borderRadius: 2, opacity: i === 0 ? 0.75 : 0.35 }} />
        ))}
      </div>
      {/* Main */}
      <div style={{ flex: 1, padding: '4%', display: 'flex', flexDirection: 'column', gap: '4%', overflow: 'hidden' }}>
        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3%' }}>
          {[1, 0.8, 0.9, 0.75].map((o, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 4, padding: '6% 8%' }}>
              <div style={{ height: 4, width: '55%', background: 'currentColor', borderRadius: 2, opacity: o * 0.35, marginBottom: 6 }} />
              <div style={{ height: 7, width: '70%', background: 'currentColor', borderRadius: 2, opacity: o * 0.75 }} />
            </div>
          ))}
        </div>
        {/* Class schedule grid */}
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '2%', padding: '3%', background: 'rgba(26,90,154,0.05)', borderBottom: '1px solid rgba(26,90,154,0.08)' }}>
            {['Mon','Tue','Wed','Thu','Fri'].map(d => (
              <div key={d} style={{ height: 4, background: 'currentColor', borderRadius: 2, opacity: 0.3 }} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[0.9, 0.75, 0.8, 0.7].map((o, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '2%', padding: '2.5% 3%', borderBottom: '1px solid rgba(26,90,154,0.06)', opacity: o }}>
                {[1,0,1,0,1].map((filled, j) => (
                  <div key={j} style={{ height: 14, borderRadius: 3, background: filled ? `rgba(26,90,154,${0.15 + (i % 2) * 0.05})` : 'transparent' }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectMockup({ id }: Props) {
  switch (id) {
    case 1: return <ArmadaCash />;
    case 2: return <MobilePOS />;
    case 3: return <Aasara />;
    case 4: return <AstenMeds />;
    case 5: return <Abraaj />;
    case 6: return <Gastronomica />;
    case 7: return <FashionAI />;
    case 8: return <SchoolMgmt />;
    default: return <ArmadaCash />;
  }
}
