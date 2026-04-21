// Direction 03 — "The Archive"
// Year-foldered archive with vertical year labels, hanging numbers,
// asymmetric body column with marginalia. Confident type, grid-heavy.

const D3 = {
  ink: '#0d0d0d',
  paper: '#f4f2ec',
  muted: '#7a7872',
  rule: '#0d0d0d',
  gridLine: 'rgba(0,0,0,0.055)',
  serif: '"Times New Roman", Times, serif',
  mono: '"Courier New", ui-monospace, monospace',
};

const d3GridBg = {
  backgroundImage: `linear-gradient(${D3.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${D3.gridLine} 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
};

function D3Home() {
  return (
    <div style={{ width: '100%', height: '100%', background: D3.paper, color: D3.ink, fontFamily: D3.serif, ...d3GridBg, overflow: 'hidden', position: 'relative', display: 'grid', gridTemplateColumns: '80px 1fr' }}>
      {/* Left rail */}
      <div style={{ borderRight: `1px solid ${D3.rule}`, padding: '28px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Abdulboriyx — Archive</div>
        <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.muted, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>UZ / EN</div>
      </div>

      <div style={{ padding: '28px 48px 0', position: 'relative' }}>
        {/* Top nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
          <span>Index — 2026</span>
          <div style={{ display: 'flex', gap: 20, color: D3.muted }}>
            <span>Essays</span><span>Notes</span><span>About</span><span>↗ Twitter</span>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${D3.rule}`, margin: '14px 0 0' }} />

        {/* Hero line */}
        <div style={{ padding: '68px 0 44px', display: 'grid', gridTemplateColumns: '1fr 240px', gap: 40, alignItems: 'end' }}>
          <div style={{ fontSize: 92, lineHeight: 0.92, letterSpacing: -2.5, fontWeight: 400 }}>
            Twenty-four<br/>
            <span style={{ fontStyle: 'italic' }}>essays</span>, written<br/>
            on purpose.
          </div>
          <div style={{ fontFamily: D3.mono, fontSize: 11, lineHeight: 1.6, color: D3.muted }}>
            A personal archive of things I keep thinking about. Most are short. None are finished.
          </div>
        </div>

        {/* Year section */}
        <div style={{ borderTop: `1px solid ${D3.rule}`, display: 'grid', gridTemplateColumns: '96px 1fr', padding: '18px 0 0' }}>
          <div style={{ fontFamily: D3.mono, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>2026</div>
          <div>
            {[
              ['001', 'Apr', 'Wesley’s Theory',       'Essay'],
              ['002', 'Mar', 'Inspirations',               'Essay'],
              ['003', 'Mar', 'Larry & Sergei',             'Note'],
              ['004', 'Feb', 'Notes on Going Home',        'Essay'],
              ['005', 'Jan', 'A Quiet Theory of Focus',    'Essay'],
              ['006', 'Jan', 'On Being Early',             'Note'],
            ].map(([n, m, t, k], i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '42px 52px 1fr 80px',
                gap: 20, padding: '14px 0',
                borderBottom: i < 5 ? `1px solid ${D3.gridLine}` : 'none',
                alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: D3.mono, fontSize: 11, color: D3.muted }}>{n}</span>
                <span style={{ fontFamily: D3.mono, fontSize: 11, color: D3.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{m}</span>
                <span style={{ fontSize: 24, letterSpacing: -0.4 }}>{t}</span>
                <span style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D3.muted, textAlign: 'right' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${D3.rule}`, marginTop: 28, display: 'grid', gridTemplateColumns: '96px 1fr', padding: '18px 0 0' }}>
          <div style={{ fontFamily: D3.mono, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>2025</div>
          <div>
            {[
              ['007', 'Dec', 'Letter to a Younger Student', 'Essay'],
              ['008', 'Nov', 'The Room, the Desk, the Lamp','Note'],
            ].map(([n, m, t, k], i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '42px 52px 1fr 80px',
                gap: 20, padding: '14px 0',
                borderBottom: i < 1 ? `1px solid ${D3.gridLine}` : 'none',
                alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: D3.mono, fontSize: 11, color: D3.muted }}>{n}</span>
                <span style={{ fontFamily: D3.mono, fontSize: 11, color: D3.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{m}</span>
                <span style={{ fontSize: 24, letterSpacing: -0.4 }}>{t}</span>
                <span style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D3.muted, textAlign: 'right' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function D3Post() {
  return (
    <div style={{ width: '100%', height: '100%', background: D3.paper, color: D3.ink, fontFamily: D3.serif, ...d3GridBg, overflow: 'hidden', position: 'relative', display: 'grid', gridTemplateColumns: '80px 1fr' }}>
      <div style={{ borderRight: `1px solid ${D3.rule}`, padding: '28px 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>001 · Wesley’s Theory · 2026</div>
      </div>
      <div style={{ padding: '28px 48px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
          <span>← Archive</span>
          <span style={{ color: D3.muted }}>Next: 002 Inspirations →</span>
        </div>
        <div style={{ borderTop: `1px solid ${D3.rule}`, margin: '14px 0 0' }} />

        {/* Title + meta */}
        <div style={{ padding: '64px 0 28px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 40, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: D3.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: D3.muted, marginBottom: 16 }}>Essay · 001</div>
            <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -2, fontStyle: 'italic', fontWeight: 400 }}>Wesley’s<br/>Theory.</div>
          </div>
          <div style={{ fontFamily: D3.mono, fontSize: 10, lineHeight: 1.8, color: D3.muted }}>
            <div>DATE &nbsp;&nbsp; 2026.04.12</div>
            <div>READ &nbsp;&nbsp; 12 MIN</div>
            <div>WORDS &nbsp;1,840</div>
            <div>TAGS &nbsp;&nbsp; AI, SELF</div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${D3.rule}` }} />

        {/* Body with marginalia */}
        <div style={{ padding: '32px 0 0', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40 }}>
          <div style={{ fontFamily: D3.mono, fontSize: 10, lineHeight: 1.7, color: D3.muted }}>
            <div style={{ marginBottom: 4, color: D3.ink }}>§ I</div>
            <div>The store, the documentary, the afternoon that slipped sideways.</div>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 620 }}>
            It was either Tuesday or Thursday afternoon. I was on campus since there were classes. I came into the convenience store, bought my food, and went out to eat. Usually, I watch videos on YouTube while eating lunch, especially if I am alone. The documentary from DeepMind had been popping up for days. I decided to watch it, and it literally changed my interest.
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { D3Home, D3Post });
