// Direction 02 — "The Quiet Page"
// Narrow column, huge whitespace, book-like. One accent (ink red) on links.
// Reference mood: a literary chapbook; paulgraham.com but actually designed.

const D2 = {
  ink: '#1a1a1a',
  paper: '#ffffff',
  accent: '#b4312a',
  muted: '#9a9a95',
  rule: '#1a1a1a',
  gridLine: 'rgba(0,0,0,0.035)',
  serif: '"Times New Roman", Times, serif',
  mono: '"Courier New", ui-monospace, monospace',
};

const d2GridBg = {
  backgroundImage: `linear-gradient(${D2.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${D2.gridLine} 1px, transparent 1px)`,
  backgroundSize: '64px 64px',
};

function D2Home() {
  const posts = [
    ['Wesley’s Theory',            'Apr 12'],
    ['Inspirations',                    'Mar 28'],
    ['Larry & Sergei',                  'Mar 04'],
    ['Notes on Going Home',             'Feb 17'],
    ['A Quiet Theory of Focus',         'Jan 30'],
    ['On Being Early',                  'Jan 11'],
    ['Letter to a Younger Student',     'Dec 22, 2025'],
    ['The Room, the Desk, the Lamp',    'Nov 30, 2025'],
    ['What the Quiet Year Taught Me',   'Oct 14, 2025'],
    ['Against the Feed',                'Sep 02, 2025'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: D2.paper, color: D2.ink, fontFamily: D2.serif, ...d2GridBg, overflow: 'hidden', position: 'relative' }}>
      {/* Corner meta */}
      <div style={{ position: 'absolute', top: 28, left: 32, fontFamily: D2.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D2.muted }}>Abdulboriyx</div>
      <div style={{ position: 'absolute', top: 28, right: 32, fontFamily: D2.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D2.muted, display: 'flex', gap: 20 }}>
        <span>About</span><span>Archive</span><span style={{ color: D2.accent }}>RSS</span>
      </div>

      {/* Masthead — very narrow, centered */}
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '120px 24px 0' }}>
        <div style={{ fontFamily: D2.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: D2.muted, marginBottom: 28, textAlign: 'center' }}>
          —— Est. 2024 ——
        </div>
        <div style={{ fontSize: 44, fontStyle: 'italic', letterSpacing: -1, textAlign: 'center', lineHeight: 1.1, marginBottom: 20 }}>
          Notes from a slow<br/>reader, written slower.
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: '#555', textAlign: 'center', maxWidth: 440, margin: '0 auto' }}>
          A personal journal about attention, curiosity, and the small quiet things I keep noticing. <span style={{ color: D2.accent, borderBottom: `1px solid ${D2.accent}` }}>Start here</span>.
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 40, height: 1, background: D2.ink, margin: '56px auto' }} />

      {/* Post list — tabular, hanging dates */}
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: D2.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D2.muted, marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
          <span>Contents</span><span>24 entries</span>
        </div>
        {posts.map(([t, d], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            padding: '11px 0',
            borderBottom: `1px solid ${D2.gridLine}`,
            alignItems: 'baseline',
          }}>
            <span style={{ fontSize: 17 }}>{t}</span>
            <span style={{ fontFamily: D2.mono, fontSize: 11, color: D2.muted }}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function D2Post() {
  return (
    <div style={{ width: '100%', height: '100%', background: D2.paper, color: D2.ink, fontFamily: D2.serif, ...d2GridBg, overflow: 'hidden', position: 'relative' }}>
      {/* Top nav */}
      <div style={{ position: 'absolute', top: 28, left: 32, fontFamily: D2.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
        <span style={{ color: D2.accent }}>←</span> <span style={{ color: D2.muted }}>Index</span>
      </div>
      <div style={{ position: 'absolute', top: 28, right: 32, fontFamily: D2.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D2.muted }}>
        12 min · Apr 12
      </div>

      {/* Narrow column */}
      <div style={{ maxWidth: 580, margin: '0 auto', padding: '112px 24px 0' }}>
        <div style={{ fontFamily: D2.mono, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: D2.muted, marginBottom: 16 }}>
          Essay No. 01
        </div>
        <h1 style={{ fontSize: 56, lineHeight: 1, letterSpacing: -1.5, margin: 0, fontWeight: 400, fontStyle: 'italic' }}>
          Wesley’s Theory
        </h1>
        <div style={{ fontSize: 18, lineHeight: 1.45, color: '#555', marginTop: 24, fontStyle: 'italic' }}>
          On consciousness, a documentary at lunchtime, and what it means to become curious again.
        </div>

        <div style={{ width: 28, height: 1, background: D2.ink, margin: '40px 0' }} />

        <p style={{ fontSize: 17, lineHeight: 1.7, margin: '0 0 20px', color: '#1a1a1a' }}>
          <span style={{ float: 'left', fontSize: 58, lineHeight: 0.9, paddingRight: 10, paddingTop: 6, color: D2.accent, fontStyle: 'italic' }}>I</span>
          t was either Tuesday or Thursday afternoon. I was on campus since there were classes. I came into the convenience store, bought my food, and went out to eat. Usually, I watch videos on YouTube while eating lunch, especially if I am alone.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, margin: '0 0 20px' }}>
          The documentary from Google DeepMind had been popping up for several days. I decided to watch it, and it literally changed my interest. It was about AlphaGo and how it won against the world champion Lee Sedol—see <span style={{ color: D2.accent, borderBottom: `1px solid ${D2.accent}` }}>the film</span>.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { D2Home, D2Post });
