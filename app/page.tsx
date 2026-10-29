const navItems = [
  { label: 'Home', active: true, icon: '⌂' },
  { label: 'Feed', active: false, icon: '◌' },
  { label: 'Matches', active: false, icon: '♡' },
  { label: 'Safety', active: false, icon: '✓' },
  { label: 'Rewards', active: false, icon: '✦' },
];

const matches = [
  { name: 'Ava', city: 'New York', vibe: 'Warm and curious', tag: 'High trust', accent: 'sunset' },
  { name: 'Noah', city: 'Chicago', vibe: 'Creative & grounded', tag: 'Shared values', accent: 'mint' },
  { name: 'Maya', city: 'Seattle', vibe: 'Adventurous', tag: 'New match', accent: 'violet' },
];

const safetyChecks = [
  { label: 'Profile verified', ok: true },
  { label: 'Trusted contacts set', ok: true },
  { label: 'Location sharing on', ok: true },
  { label: 'First date safety plan', ok: false },
];

const dateIdeas = [
  { title: 'Coffee walk', time: 'Today • 6:30 PM', label: 'Low pressure' },
  { title: 'Museum date', time: 'Thu • 2:00 PM', label: 'Indoor' },
  { title: 'Sunset picnic', time: 'Sat • 7:00 PM', label: 'Best vibe' },
];

const updates = [
  { title: 'You matched with Ava', time: '12 min ago', dot: 'green' },
  { title: 'Safety check passed', time: '1 hour ago', dot: 'blue' },
  { title: 'Your date plan is ready', time: '3 hours ago', dot: 'amber' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div className="brand-name">Penpaldate</div>
        </div>

        <div className="topbar-tools">
          <div className="search-box">
            <span>⌕</span>
            <span>Type / to search</span>
          </div>
          <button className="tool-action">⟲</button>
          <button className="tool-action">☰</button>
          <div className="avatar-mini">P</div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav className="nav-list">
            {navItems.map((item) => (
              <button key={item.label} className={item.active ? 'nav-item active' : 'nav-item'}>
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="trust-card">
            <div className="muted-label">Trust score</div>
            <div className="score">92%</div>
            <div className="muted-text">Strong safety habits</div>
          </div>
        </aside>

        <section className="content-panel">
          <div className="hero-card">
            <div className="hero-topline">
              <div className="hero-badge">❤</div>
              <h1>Good evening, PHDstudent76!</h1>
              <button className="ghost-btn">Preview</button>
            </div>

            <p className="hero-subtitle">Ask anything or type @ to add context</p>

            <div className="chip-row">
              <span className="chip">Auto</span>
              <span className="chip muted">Optimized for: Balance</span>
            </div>

            <div className="quick-actions">
              <button>Plan a date</button>
              <button>Start chat</button>
              <button>Check safety</button>
              <button>Invite friend</button>
            </div>
          </div>

          <div className="section-card">
            <div className="section-head">
              <h2>Best matches</h2>
              <button className="ghost-btn small">View all</button>
            </div>

            <div className="match-grid">
              {matches.map((match) => (
                <article key={match.name} className="match-card">
                  <div className={`profile-bubble ${match.accent}`}>
                    {match.name.charAt(0)}
                  </div>
                  <div className="match-copy">
                    <div className="match-topline">
                      <h3>{match.name}</h3>
                      <span className="mini-tag">{match.tag}</span>
                    </div>
                    <div className="meta-line">{match.city}</div>
                    <div className="meta-line sub">{match.vibe}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lower-grid">
            <div className="section-card">
              <div className="section-head">
                <h2>Plan a date</h2>
                <button className="ghost-btn small">New idea</button>
              </div>

              <div className="list-stack">
                {dateIdeas.map((idea) => (
                  <div key={idea.title} className="list-row">
                    <div className="row-dot" />
                    <div className="row-copy">
                      <h3>{idea.title}</h3>
                      <p>{idea.time}</p>
                    </div>
                    <span className="row-tag">{idea.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card">
              <div className="section-head">
                <h2>Safety</h2>
                <button className="ghost-btn small">Check</button>
              </div>

              <div className="safety-list">
                {safetyChecks.map((check) => (
                  <div key={check.label} className="safety-item">
                    <span className={check.ok ? 'check-mark ok' : 'check-mark warn'}>{check.ok ? '✓' : '•'}</span>
                    <span>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="right-rail">
          <div className="profile-panel dark">
            <div className="profile-panel-head">
              <div className="panel-avatar">◔</div>
              <span>Profile strength</span>
            </div>

            <div className="score-ring-wrap">
              <div className="score-ring">86%</div>
            </div>

            <button className="primary-btn">Complete profile</button>
          </div>

          <div className="mini-card">
            <h3>Trusted contacts</h3>
            <div className="contact-list">
              <div className="contact-item"><span className="point green" /> Emma</div>
              <div className="contact-item"><span className="point blue" /> Jordan</div>
              <div className="contact-item"><span className="point amber" /> Mira</div>
            </div>
          </div>

          <div className="mini-card">
            <h3>Recent updates</h3>
            <div className="update-list">
              {updates.map((update) => (
                <div key={update.title} className="update-item">
                  <span className={`update-dot ${update.dot}`} />
                  <div>
                    <strong>{update.title}</strong>
                    <small>{update.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

