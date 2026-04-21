// Direction 01 — "The Index"
// Swiss grid, numbered entries, column rules, mono meta labels.
// Reference mood: printed table of contents, Werkplaats Typografie.

const D1 = {
  ink: '#111',
  paper: '#fafaf7',
  rule: '#111',
  muted: '#8a8a85',
  gridLine: 'rgba(0,0,0,0.05)',
  serif: '"Times New Roman", Times, serif',
  mono: '"Courier New", ui-monospace, monospace',
};

const d1GridBg = {
  backgroundImage: `linear-gradient(${D1.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${D1.gridLine} 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

function D1Home() {
  const posts = [
    ['01', '2026.04.12', 'Wesley’s Theory',        'On consciousness, AlphaGo, and a lunch alone.', '12 min'],
    ['02', '2026.03.28', 'Inspirations',                 'People I borrow shape from. A mixed bag.',       '08 min'],
    ['03', '2026.03.04', 'Larry & Sergei',               'Why the academics still matter most.',           '06 min'],
    ['04', '2026.02.17', 'Notes on Going Home',          'Tashkent, and the distance you can’t walk.','05 min'],
    ['05', '2026.01.30', 'A Quiet Theory of Focus',      'What I learned from not watching the feed.',     '09 min'],
    ['06', '2026.01.11', 'On Being Early',               'Arriving before anyone asked you to.',           '04 min'],
    ['07', '2025.12.22', 'Letter to a Younger Student',  'Things I wish I’d done in the first year.', '07 min'],
    ['08', '2025.11.30', 'The Room, the Desk, the Lamp', 'Rooms I’ve written in.',                    '03 min'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: D1.paper, color: D1.ink, fontFamily: D1.serif, ...d1GridBg, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '28px 48px 0', alignItems: 'baseline' }}>
        <div style={{ fontFamily: D1.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Abdulboriyx — Journal</div>
        <div style={{ fontFamily: D1.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', display: 'flex', gap: 24 }}>
          <span>Index</span><span>About</span><span>↗ Twitter</span><span>UZ/EN</span>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${D1.rule}`, margin: '12px 48px 0' }} />

      {/* Masthead */}
      <div style={{ padding: '56px 48px 24px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: D1.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: D1.muted, marginBottom: 12 }}>Volume 03 / Spring 2026</div>
          <div style={{ fontFamily: D1.mono, fontSize: 11, color: D1.muted, lineHeight: 1.5 }}>
            Eight pieces. Written slowly,<br/>to be read the same way.
          </div>
        </div>
        <div style={{ fontSize: 112, lineHeight: 0.9, letterSpacing: -4, fontWeight: 400, fontStyle: 'italic' }}>
          Journal,<br/>No. 03
        </div>
      </div>

      {/* Column headers */}
      <div style={{ borderTop: `1px solid ${D1.rule}`, margin: '24px 48px 0' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '42px 110px 1fr 1fr 72px', gap: 24, padding: '10px 48px', fontFamily: D1.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D1.muted }}>
        <span>No.</span><span>Date</span><span>Title</span><span>Abstract</span><span style={{ textAlign: 'right' }}>Read</span>
      </div>
      <div style={{ borderTop: `1px solid ${D1.rule}`, margin: '0 48px' }} />

      {/* Index */}
      <div style={{ padding: '0 48px' }}>
        {posts.map(([n, d, t, a, r], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '42px 110px 1fr 1fr 72px', gap: 24,
            padding: '18px 0', borderBottom: `1px solid ${D1.gridLine}`,
            alignItems: 'baseline',
          }}>
            <span style={{ fontFamily: D1.mono, fontSize: 12, color: D1.muted }}>{n}</span>
            <span style={{ fontFamily: D1.mono, fontSize: 12, color: D1.muted }}>{d}</span>
            <span style={{ fontSize: 22, letterSpacing: -0.3 }}>{t}</span>
            <span style={{ fontSize: 14, fontStyle: 'italic', color: '#3a3a36', lineHeight: 1.4 }}>{a}</span>
            <span style={{ fontFamily: D1.mono, fontSize: 11, color: D1.muted, textAlign: 'right' }}>{r}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 48px', display: 'flex', justifyContent: 'space-between', fontFamily: D1.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D1.muted, borderTop: `1px solid ${D1.rule}`, background: D1.paper }}>
        <span>© Abdulboriyx 2026</span>
        <span>Set in Times New Roman &amp; Courier</span>
        <span>Tashkent · Incheon</span>
      </div>
    </div>
  );
}

function D1Post() {
  return (
    <div style={{ width: '100%', height: '100%', background: D1.paper, color: D1.ink, fontFamily: D1.serif, ...d1GridBg, overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '28px 48px 0', alignItems: 'baseline' }}>
        <div style={{ fontFamily: D1.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>← Index</div>
        <div style={{ fontFamily: D1.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>No. 01 · 2026.04.12</div>
      </div>
      <div style={{ borderTop: `1px solid ${D1.rule}`, margin: '12px 48px 0' }} />

      {/* Title block */}
      <div style={{ padding: '72px 48px 28px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48 }}>
        <div style={{ fontFamily: D1.mono, fontSize: 11, lineHeight: 1.7, color: D1.muted }}>
          <div style={{ marginBottom: 16 }}>ESSAY</div>
          <div style={{ marginBottom: 4 }}>A. Abdulboriyx</div>
          <div style={{ marginBottom: 4 }}>12 min read</div>
          <div style={{ marginBottom: 4 }}>1,840 words</div>
        </div>
        <div>
          <div style={{ fontSize: 72, lineHeight: 1, letterSpacing: -2, fontStyle: 'italic' }}>Wesley’s Theory</div>
          <div style={{ fontSize: 18, lineHeight: 1.4, marginTop: 20, color: '#3a3a36', maxWidth: 560 }}>
            On consciousness, a documentary at lunchtime, and what it means to become curious again.
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${D1.rule}`, margin: '0 48px' }} />

      {/* Body column */}
      <div style={{ padding: '40px 48px 0', display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: 48 }}>
        <div style={{ fontFamily: D1.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D1.muted }}>§ I — The Store</div>
        <div style={{ fontSize: 15, lineHeight: 1.65, color: '#1a1a1a', columnCount: 2, columnGap: 32 }}>
          <span style={{ float: 'left', fontSize: 64, lineHeight: 0.85, paddingRight: 8, paddingTop: 4, fontStyle: 'italic' }}>I</span>
          t was either Tuesday or Thursday afternoon. I was on campus since there were classes. I came into the convenience store, bought my food, and went out to eat. Usually, I watch videos on YouTube while eating lunch, especially if I am alone. The documentary from Google DeepMind had been popping up for several days. I decided to watch it, and it literally changed my interest. It was about AlphaGo and how it won against the world champion. I became a fan of Demis Hassabis. Then I watched a couple of his other interviews and podcasts.
        </div>
        <div />
      </div>
    </div>
  );
}

Object.assign(window, { D1Home, D1Post });
