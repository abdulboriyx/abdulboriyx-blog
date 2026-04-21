// Direction 04 — "The Manifesto"
// Large-display serif takes over. Posts read as entries in a logbook.
// Confident, almost a manifesto. Minimal chrome, strong grid.

const D4 = {
  ink: '#0a0a0a',
  paper: '#ffffff',
  muted: '#888',
  gridLine: 'rgba(0,0,0,0.05)',
  serif: '"Times New Roman", Times, serif',
  mono: '"Courier New", ui-monospace, monospace',
};

const d4GridBg = {
  backgroundImage: `linear-gradient(${D4.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${D4.gridLine} 1px, transparent 1px)`,
  backgroundSize: '56px 56px',
};

function D4Home() {
  const posts = [
    ['01', 'Wesley’s Theory',           '··· on consciousness, Go, and a lunch alone'],
    ['02', 'Inspirations',                   '··· on the people I keep borrowing shape from'],
    ['03', 'Larry & Sergei',                 '··· on why the academics still matter'],
    ['04', 'Notes on Going Home',            '··· on Tashkent, and the distance I can’t walk'],
    ['05', 'A Quiet Theory of Focus',        '··· on what the feed cost me'],
    ['06', 'On Being Early',                 '··· on arriving before anyone asked'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: D4.paper, color: D4.ink, fontFamily: D4.serif, ...d4GridBg, overflow: 'hidden', position: 'relative' }}>
      {/* corner marks */}
      <div style={{ position: 'absolute', top: 24, left: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>A—X</div>
      <div style={{ position: 'absolute', top: 24, right: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', display: 'flex', gap: 20, color: D4.muted }}>
        <span>About</span><span>Archive</span><span>RSS</span>
      </div>
      <div style={{ position: 'absolute', bottom: 24, left: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: D4.muted }}>© MMXXVI</div>
      <div style={{ position: 'absolute', bottom: 24, right: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: D4.muted }}>Tashkent / Incheon</div>

      {/* HUGE manifesto line */}
      <div style={{ padding: '120px 64px 0' }}>
        <div style={{ fontSize: 168, lineHeight: 0.88, letterSpacing: -6, fontWeight: 400 }}>
          Read<br/>
          <span style={{ fontStyle: 'italic' }}>slowly.</span>
        </div>
        <div style={{ fontFamily: D4.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: D4.muted, marginTop: 28, maxWidth: 420 }}>
          A journal by Abdulboriyx. Twenty-four essays on attention, curiosity, and what I keep coming back to.
        </div>
      </div>

      {/* Rule */}
      <div style={{ borderBottom: `1px solid ${D4.ink}`, margin: '72px 64px 0' }} />

      {/* Logbook */}
      <div style={{ padding: '0 64px' }}>
        {posts.map(([n, t, s], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '48px 1fr',
            padding: '18px 0',
            borderBottom: `1px solid ${D4.gridLine}`,
            alignItems: 'baseline',
            gap: 24,
          }}>
            <div style={{ fontFamily: D4.mono, fontSize: 12, color: D4.muted }}>{n}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32 }}>
              <span style={{ fontSize: 26, letterSpacing: -0.4 }}>{t}</span>
              <span style={{ fontFamily: D4.mono, fontSize: 11, color: D4.muted, fontStyle: 'normal' }}>{s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function D4Post() {
  return (
    <div style={{ width: '100%', height: '100%', background: D4.paper, color: D4.ink, fontFamily: D4.serif, ...d4GridBg, overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 24, left: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>← A—X</div>
      <div style={{ position: 'absolute', top: 24, right: 32, fontFamily: D4.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: D4.muted }}>01 / 24</div>

      {/* Big cover title */}
      <div style={{ padding: '88px 64px 0' }}>
        <div style={{ fontFamily: D4.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: D4.muted }}>
          Essay 01 · April 12, 2026 · 12 min
        </div>
        <div style={{ fontSize: 140, lineHeight: 0.9, letterSpacing: -5, marginTop: 28, fontStyle: 'italic', fontWeight: 400 }}>
          Wesley’s<br/>Theory
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${D4.ink}`, margin: '56px 64px 0' }} />

      {/* Body: single wide-ish column, centered */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 0' }}>
        <p style={{ fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', margin: '0 0 28px', color: '#333' }}>
          On consciousness, a documentary at lunchtime, and what it means to become curious again.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0 }}>
          <span style={{ fontVariant: 'small-caps', letterSpacing: 1.5, fontSize: 15 }}>It was either Tuesday or Thursday afternoon.</span> I was on campus since there were classes. I came into the convenience store, bought my food, and went out to eat. Usually, I watch videos on YouTube while eating lunch—especially if I am alone.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { D4Home, D4Post });
