import './globals.css';

const navItems = ['Home', 'Feed'];
const quickActions = ['Debug', 'Agent', 'Create issue', 'Write code'];
const repoTags = ['Auto', 'Optimized for: Balance'];

const matches = [
  { name: 'Ava', city: 'New York', badge: 'Safe match', tone: 'emerald' },
  { name: 'Luna', city: 'Chicago', badge: 'New', tone: 'cyan' },
  { name: 'Maya', city: 'Seattle', badge: 'Popular', tone: 'violet' }
];

const updateItems = [
  { time: '8 hours ago', text: 'GitHub Copilot in Visual Studio — September update' },
  { time: '10 hours ago', text: 'Custom skills, agents, and MCP servers in usage metrics API' },
  { time: '12 hours ago', text: 'Global default for Copilot features generally available' },
  { time: '14 hours ago', text: 'Meta API endpoints updated for Actions blob storage' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f8fa] text-[#1f2937]">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-700">
              ≡
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-sm font-bold text-white">
                P
              </div>
              <div className="text-[18px] font-semibold">Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 shadow-sm">
              <span>⌕</span>
              <span>Type / to search</span>
            </div>
            <div className="flex items-center gap-2">
              {['◌', '✦', '+', '◔', '◍', '◐'].map((icon, index) => (
                <button key={index} className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm">
                  {icon}
                </button>
              ))}
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d4ed8] text-white shadow-sm">
              P
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-[240px_minmax(0,1fr)_320px] gap-0">
        <aside className="min-h-[calc(100vh-76px)] border-r border-gray-200 bg-white/60">
          <div className="space-y-2 px-3 py-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[15px] ${
                  index === 0 ? 'bg-[#eef1f4] font-medium text-[#111827]' : 'text-[#374151] hover:bg-gray-100'
                }`}
              >
                <span>{index === 0 ? '⌂' : '◌'}</span>
                {item}
              </button>
            ))}
          </div>

          <div className="px-4 pt-4 text-sm text-gray-500">
            No repositories found
          </div>
        </aside>

        <section className="border-r border-gray-200 bg-[#f6f8fa]">
          <div className="p-5">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-2xl font-bold text-[#111827]">
                  <span>🫶</span>
                  <span>Good evening, PHDstudent76!</span>
                </div>
                <button className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                  Preview
                </button>
              </div>

              <div className="mt-5 text-center text-[17px] text-gray-500">
                Ask anything or type @ to add context
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {repoTags.map((tag, index) => (
                  <button key={index} className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm text-gray-700 shadow-sm">
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={action}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      index === 0
                        ? 'border-gray-200 bg-white text-gray-700'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
                  Git
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-[18px] font-semibold text-[#111827]">Pull requests</h2>
                <button className="text-sm text-blue-600">View all</button>
              </div>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-gray-500">
                No pull requests found, try a different filter.
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-[18px] font-semibold text-[#111827]">Issues</h2>
                <button className="text-sm text-blue-600">View all</button>
              </div>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-gray-500">
                No issues found, try a different filter.
              </div>
            </div>
          </div>
        </section>

        <aside className="bg-[#f6f8fa] p-5">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#facc15] via-[#fb7185] to-[#8b5cf6] text-xl text-white">
                  🐻
                </div>
                <div className="text-[13px] font-medium text-gray-500">Brand preview</div>
              </div>
              <button className="text-gray-400">×</button>
            </div>

            <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-4">
              <div className="text-[28px] font-black tracking-tight text-[#111827]">UNIVERSE 26</div>
            </div>

            <div className="mt-4 text-sm text-gray-600">Join Universe virtually, from anywhere.</div>

            <button className="mt-5 w-full rounded-xl bg-[#111827] py-3 text-sm font-semibold text-white">
              Save your seat
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-[18px] font-semibold text-[#111827]">Latest from our changelog</h3>

            <div className="space-y-4">
              {updateItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 flex h-4 w-4 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{item.time}</div>
                    <div className="text-sm text-gray-700">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-blue-600">View changelog →</div>
          </div>
        </aside>
      </div>

      <footer className="border-t border-gray-200 bg-white py-5 text-center text-sm text-gray-500">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-4 flex-wrap">
          <span>© 2026 GitHub, Inc.</span>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Security</span>
          <span>Status</span>
          <span>Community</span>
          <span>Docs</span>
          <span>Contact</span>
          <span>Manage cookies</span>
          <span>Do not share my personal information</span>
        </div>
      </footer>
    </main>
  );
}
