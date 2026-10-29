import './globals.css';

const navItems = ['Home', 'Feed', 'Matches', 'Safety', 'Rewards'];
const quickActions = ['Plan a date', 'Start chat', 'Check safety', 'Invite friend'];

const matches = [
  { name: 'Ava', city: 'New York', vibe: 'Warm and curious', status: 'High trust', color: 'from-pink-400 to-orange-300' },
  { name: 'NOAH', city: 'Chicago', vibe: 'Creative & grounded', status: 'Shared values', color: 'from-sky-400 to-cyan-300' },
  { name: 'MAYA', city: 'Seattle', vibe: 'Adventurous', status: 'New match', color: 'from-violet-400 to-purple-300' }
];

const dateIdeas = [
  { title: 'Coffee walk', time: 'Today • 6:30 PM', tag: 'Low pressure' },
  { title: 'Museum date', time: 'Thu • 2:00 PM', tag: 'Indoor' },
  { title: 'Sunset picnic', time: 'Sat • 7:00 PM', tag: 'Best vibe' }
];

const safetyChecks = [
  { label: 'Profile verified', ok: true },
  { label: 'Trusted contacts set', ok: true },
  { label: 'Location sharing on', ok: true },
  { label: 'First date safety plan', ok: false }
];

const updates = [
  { title: 'You matched with Ava', time: '12 min ago' },
  { title: 'Safety check passed', time: '1 hour ago' },
  { title: 'Your date plan is ready', time: '3 hours ago' }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div className="brand-name">Penpaldate</div>
        </div>

        <div className="topbar-actions">
          <div className="search-pill">
            <span className="search-icon">⌕</span>
            <span>Type / to search</span>
          </div>
          <div className="small-actions">
            <span>⊕</span>
            <span>◌</span>
            <span>☰</span>
          </div>
          <div className="profile-badge">P</div>
        </div>
      </header>

      <div className="content-grid">
        <aside className="sidebar">
          <nav className="nav-list">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={index === 0 ? 'nav-item active' : 'nav-item'}
              >
                <span>{index === 0 ? '⌂' : index === 1 ? '◌' : index === 2 ? '♡' : index === 3 ? '✓' : '★'}</span>
                {item}
              </button>
            ))}
          </nav>

          <div className="sidebar-note">
            <div className="note-label">Trust score</div>
            <div className="note-score">92%</div>
            <div className="note-sub">Strong safety habits</div>
          </div>
        </aside>

        <section className="main-panel">
          <div className="hero-card">
            <div className="hero-head">
              <div className="hero-icon">💛</div>
              <h1>Good evening, PHDstudent76!</h1>
              <button className="preview-btn">Preview</button>
            </div>

            <p className="subtitle">Ask anything or type @ to add context</p>

            <div className="pill-row">
              <span className="pill">Auto</span>
              <span className="pill">Optimized for: Balance</span>
            </div>

            <div className="action-row">
              {quickActions.map((action) => (
                <button key={action} className="action-btn">{action}</button>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
              <h2>Best matches</h2>
              <button>View all</button>
            </div>

            <div className="match-grid">
              {matches.map((match) => (
                <article key={match.name} className="match-card">
                  <div className={`avatar ${match.color}`}>
                    {match.name.charAt(0)}
                  </div>
                  <div className="match-info">
                    <div className="match-name-row">
                      <h3>{match.name}</h3>
                      <span className="status-chip">{match.status}</span>
                    </div>
                    <p>{match.city}</p>
                    <small>{match.vibe}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bottom-row">
            <div className="section-card wide">
              <div className="section-header">
                <h2>Plan a date</h2>
                <button>New idea</button>
              </div>

              <div className="date-list">
                {dateIdeas.map((idea) => (
                  <div key={idea.title} className="date-item">
                    <div className="date-dot" />
                    <div>
                      <h3>{idea.title}</h3>
                      <p>{idea.time}</p>
                    </div>
                    <span className="tag">{idea.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card compact">
              <div className="section-header">
                <h2>Safety</h2>
                <button>Check</button>
              </div>

              <div className="safety-list">
                {safetyChecks.map((check) => (
                  <div key={check.label} className="safety-item">
                    <span className={check.ok ? 'status ok' : 'status warn'}>{check.ok ? '✓' : '•'}</span>
                    <span>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="right-rail">
          <div className="mini-card dark">
            <div className="mini-head">
              <div className="mini-avatar">👤</div>
              <span>Profile strength</span>
            </div>
            <div className="ring-wrap">
              <div className="score-ring">86%</div>
            </div>
            <button className="primary-cta">Complete profile</button>
          </div>

          <div className="mini-card light">
            <h3>Trusted contacts</h3>
            <div className="contact-list">
              <div className="contact"><span className="dot green" /> Emma</div>
              <div className="contact"><span className="dot blue" /> Jordan</div>
              <div className="contact"><span className="dot gold" /> Mira</div>
            </div>
          </div>

          <div className="mini-card light">
            <h3>Recent updates</h3>
            {updates.map((item) => (
              <div key={item.title} className="update-item">
                <span className="update-dot" />
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
